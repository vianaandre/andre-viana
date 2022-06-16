import { ButtonHTMLAttributes } from 'react';

type typeButton = 'primary' | 'outline';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    typeStyle: typeButton;
}

export interface IContainerButton {
    typeStyle: typeButton;
}
