import { css } from '@pigment-css/react';

const input = css({
    appearance: 'none',
    border: '0',
    backgroundColor: 'white',
    color: 'rebeccapurple',
    borderRadius: '6px',
    paddingInline: '24px',
    paddingBlock: '4px',
    fontSize: '1rem',
    fontWeight: 'bold',
});

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return <input {...props} className={input} />;
}
