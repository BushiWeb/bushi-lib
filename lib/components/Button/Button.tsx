import { css } from '@pigment-css/react';

const button = css({
    appearance: 'none',
    border: '0',
    backgroundColor: 'rebeccapurple',
    color: 'white',
    borderRadius: '6px',
    paddingInline: '24px',
    paddingBlock: '4px',
    fontSize: '1rem',
    fontWeight: 'bold',
});

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
    return <button {...props} className={button} />;
}
