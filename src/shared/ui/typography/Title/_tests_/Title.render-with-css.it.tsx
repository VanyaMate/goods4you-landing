import { render, screen } from '@testing-library/react';
import Title from '@/shared/ui/typography/Title/Title.tsx';
import { expect } from 'vitest';
import css from '../Title.module.scss';


export default () => {
    render(<Title level={ 1 }>Simple</Title>);
    const title: HTMLElement = screen.getByText('Simple');
    expect(title.classList.contains(css.container)).toBe(true);
}