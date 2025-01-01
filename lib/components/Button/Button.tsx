import { clsx } from 'clsx';
import './Button.css';

export interface ButtonProps extends React.ComponentProps<'button'> {
    // Icons props
    icon?: React.ReactNode; // Change to typeof Icon when ready
    iconPosition?: 'start' | 'end';
    isIconButton?: boolean;

    // Loading props
    isLoading?: boolean;
    loaderPosition?: 'start' | 'end';
    loaderType?: string; // Change to the list of available loaders

    // Button styling
    size?: 'xs' | 's' | 'm' | 'l' | 'xl';
    block?: boolean;
    elevated?: boolean;
    reversed?: boolean;

    // Presets
    variant?: 'default';
}

export const Button = ({
    children,
    icon,
    iconPosition = 'start',
    isIconButton = false,
    isLoading = false,
    loaderPosition = 'start',
    loaderType,
    size = 'm',
    block = false,
    elevated = false,
    reversed = false,
    variant = 'default',
    className,
    ...props
}: ButtonProps) => {
    return (
        <button {...props} className={clsx('Button')}>
            {children}
        </button>
    );
};
