import * as React from 'react';

export type ButtonProps = {
    label: string
}

export const Button = ({label}: ButtonProps) => <button>{label}</button>