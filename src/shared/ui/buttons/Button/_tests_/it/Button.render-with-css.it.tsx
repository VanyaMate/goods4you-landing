import { render, screen } from '@testing-library/react';
import Button from '@/shared/ui/buttons/Button/Button.tsx';
import { expect } from 'vitest';
import css from '@/shared/ui/buttons/Button/Button.module.scss';
import React from 'react';


export default () => {
    render(<Button>Button</Button>);
    const button: HTMLElement = screen.getByRole('button');
    expect(button.classList.contains(css.container)).toBe(true);
}