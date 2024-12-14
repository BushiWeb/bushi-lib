import { pigment } from '@pigment-css/vite-plugin';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [pigment(), tsconfigPaths(), react()],
    test: {
        environment: 'jsdom',
        setupFiles: ['./vitest-setup.ts'],
    },
});
