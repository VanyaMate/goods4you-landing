import { render, screen } from '@testing-library/react';
import IconM from '@/shared/ui/icons/IconM/IconM.tsx';
import { expect } from 'vitest';
import css from '../IconM.module.scss';


export default () => {
    render(
        <>
            <IconM>default</IconM>
            <IconM size="small">small</IconM>
            <IconM size="medium">medium</IconM>
            <IconM size="large">large</IconM>
        </>,
    );

    const defaultIcon: HTMLElement = screen.getByText('default');
    const smallIcon: HTMLElement   = screen.getByText('small');
    const mediumIcon: HTMLElement  = screen.getByText('medium');
    const largeIcon: HTMLElement   = screen.getByText('large');

    expect(defaultIcon.classList.contains(css.medium));
    expect(smallIcon.classList.contains(css.small));
    expect(mediumIcon.classList.contains(css.medium));
    expect(largeIcon.classList.contains(css.large));
}