import { render, screen } from '@testing-library/react';
import Text from '@/shared/ui/typography/Text/Text.tsx';
import { expect } from 'vitest';
import css from '../../Text.module.scss';


export default () => {
    render(
        <>
            <Text>Size default</Text>
            <Text size="small">Size small</Text>
            <Text size="medium">Size medium</Text>
            <Text size="large">Size large</Text>
        </>,
    );

    const defaultSizeElement: HTMLElement = screen.getByText('Size default');
    const smallSizeElement: HTMLElement   = screen.getByText('Size small');
    const mediumSizeElement: HTMLElement  = screen.getByText('Size medium');
    const largeSizeElement: HTMLElement   = screen.getByText('Size large');

    expect(defaultSizeElement.classList.contains(css.small_size)).toBe(false);
    expect(defaultSizeElement.classList.contains(css.medium_size)).toBe(false);
    expect(defaultSizeElement.classList.contains(css.large_size)).toBe(false);
    expect(smallSizeElement.classList.contains(css.small_size)).toBe(true);
    expect(mediumSizeElement.classList.contains(css.medium_size)).toBe(true);
    expect(largeSizeElement.classList.contains(css.large_size)).toBe(true);
}