import { render, screen } from '@testing-library/react';
import Button from '@/shared/ui/buttons/Button/Button.tsx';
import { expect } from 'vitest';
import React from 'react';


export default () => {
    render(
        <>
            <Button>Default</Button>
            <Button styleType="primary">Main</Button>
            <Button styleType="second">Second</Button>
            <Button styleType="light">Light</Button>
            <Button styleType="border">Border</Button>
        </>,
    );
    screen.getByText('Default');
    const mainButton: HTMLElement   = screen.getByText('Main');
    const secondButton: HTMLElement = screen.getByText('Second');
    const lightButton: HTMLElement  = screen.getByText('Light');
    const borderButton: HTMLElement = screen.getByText('Border');

    expect(mainButton.classList.contains('button_primary')).toBe(true);
    expect(secondButton.classList.contains('button_second')).toBe(true);
    expect(lightButton.classList.contains('button_light')).toBe(true);
    expect(borderButton.classList.contains('button_border')).toBe(true);
}