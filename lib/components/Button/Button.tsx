import { css } from '@pigment-css/react';
import { clsx } from 'clsx';

const button = css({
    appearance: 'none',
    border: '0',
    backgroundColor: 'lavender',
    color: 'black',
    borderRadius: '6px',
    paddingInline: '24px',
    paddingBlock: '4px',
    fontSize: '1rem',
    fontWeight: 'bold',
});

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg';
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
    color?:
        | 'default'
        | 'accent'
        | 'highlight'
        | 'info'
        | 'caution'
        | 'warning'
        | 'critical'
        | 'positive'
        | 'magic'
        | 'discovery';
    startIcon?: React.ReactElement;
    endIcon?: React.ReactElement;
    isLoading?: boolean;
    loadingText?: string;
}

export function Button({
    children,
    startIcon,
    endIcon,
    ...props
}: ButtonProps) {
    return (
        <button {...props} className={clsx(button)}>
            {startIcon}
            {children}
            {endIcon}
        </button>
    );
}
