import { render, screen } from '@testing-library/react';
import Text from '@/shared/ui/typography/Text/Text.tsx';
import { expect } from 'vitest';
import css from '../Text.module.scss';


export default () => {
    render(
        <>
            <Text>Color default</Text>
            <Text color="inversion">Color inversion</Text>
            <Text color="main">Color main</Text>
            <Text color="link">Color link</Text>
            <Text color="light">Color light</Text>
            <Text color="danger">Color danger</Text>
        </>,
    );

    const colorDefaultElement: HTMLElement   = screen.getByText('Color default');
    const colorInversionElement: HTMLElement = screen.getByText('Color inversion');
    const colorMainElement: HTMLElement      = screen.getByText('Color main');
    const colorLinkElement: HTMLElement      = screen.getByText('Color link');
    const colorLightElement: HTMLElement     = screen.getByText('Color light');
    const colorDangerElement: HTMLElement    = screen.getByText('Color danger');

    expect(colorDefaultElement.classList.contains(css.inversion_color)).toBe(false);
    expect(colorDefaultElement.classList.contains(css.main_color)).toBe(false);
    expect(colorDefaultElement.classList.contains(css.link_color)).toBe(false);
    expect(colorDefaultElement.classList.contains(css.light_color)).toBe(false);
    expect(colorDefaultElement.classList.contains(css.danger_color)).toBe(false);
    expect(colorInversionElement.classList.contains(css.inversion_color)).toBe(true);
    expect(colorMainElement.classList.contains(css.main_color)).toBe(true);
    expect(colorLinkElement.classList.contains(css.link_color)).toBe(true);
    expect(colorLightElement.classList.contains(css.light_color)).toBe(true);
    expect(colorDangerElement.classList.contains(css.danger_color)).toBe(true);
}