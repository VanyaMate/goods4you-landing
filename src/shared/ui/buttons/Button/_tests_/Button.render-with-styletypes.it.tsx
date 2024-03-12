import { render, screen } from '@testing-library/react';
import Button from '@/shared/ui/buttons/Button/Button.tsx';
import { expect } from 'vitest';
import css from '@/shared/ui/buttons/Button/Button.module.scss';
import React from 'react';


export default () => {
    render(
        <>
            <Button>Default</Button>
            <Button styleType="primary">Main</Button>
            <Button styleType="second">Second</Button>
            <Button styleType="light">Light</Button>
            <Button styleType="danger">Danger</Button>
        </>,
    );
    const defaultButton: HTMLElement = screen.getByText('Default');
    const mainButton: HTMLElement    = screen.getByText('Main');
    const secondButton: HTMLElement  = screen.getByText('Second');
    const lightButton: HTMLElement   = screen.getByText('Light');
    const dangerButton: HTMLElement  = screen.getByText('Danger');

    expect(defaultButton.classList.contains(css.primary)).toBe(true);
    expect(mainButton.classList.contains(css.primary)).toBe(true);
    expect(secondButton.classList.contains(css.second)).toBe(true);
    expect(lightButton.classList.contains(css.light)).toBe(true);
    expect(dangerButton.classList.contains(css.danger)).toBe(true);
}