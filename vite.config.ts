import { extname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pigment } from '@pigment-css/vite-plugin';
import react from '@vitejs/plugin-react';
import { glob } from 'glob';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';
import { peerDependencies } from './package.json';

export default defineConfig({
    plugins: [
        pigment(),
        tsconfigPaths(),
        react(),
        libInjectCss(),
        dts({
            include: ['lib'],
            exclude: ['**/*.stories.{ts, tsx}', '**/*.test.{ts, tsx}'],
            tsconfigPath: './tsconfig.lib.json',
        }),
    ],
    test: {
        environment: 'jsdom',
        setupFiles: ['./vitest-setup.ts'],
    },
    build: {
        copyPublicDir: false,
        lib: {
            entry: resolve(__dirname, 'lib/main.ts'),
            formats: ['es'],
        },
        rollupOptions: {
            external: Object.keys(peerDependencies).concat('react/jsx-runtime'),
            input: Object.fromEntries(
                glob
                    .sync('lib/**/*.{ts,tsx}', {
                        ignore: [
                            'lib/**/*.d.ts',
                            'lib/**/*.stories.{ts,tsx}',
                            'lib/**/*.test.{ts,tsx}',
                        ],
                    })
                    .map((file) => [
                        // The name of the entry point
                        // lib/nested/foo.ts becomes nested/foo
                        relative(
                            'lib',
                            file.slice(0, file.length - extname(file).length),
                        ),
                        // The absolute path to the entry file
                        // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
                        fileURLToPath(new URL(file, import.meta.url)),
                    ]),
            ),
            output: {
                assetFileNames: 'assets/[name][extname]',
                entryFileNames: '[name].js',
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
});
