import { render, screen } from '@testing-library/react';
import Link from '@/shared/ui/links/Link/Link.tsx';
import { expect } from 'vitest';


export default () => {
    render(<Link href="#home">home</Link>);
    const link: HTMLAnchorElement = screen.getByRole('link');
    expect(link.getAttribute('href')).toBe('#home');
}