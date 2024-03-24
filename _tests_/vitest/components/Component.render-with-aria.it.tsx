import React, { JSX } from 'react';
import { render, screen, Matcher, ByRoleMatcher } from '@testing-library/react';
import { expect } from 'vitest';


export type ComponentRenderCheck = {
    text?: Matcher;
    role?: ByRoleMatcher;
    ariaLabel?: string;
}

export default function <Props extends JSX.IntrinsicAttributes> (Component: React.FC<Props>, props: Props, options: ComponentRenderCheck) {
    return () => {
        render(<Component { ...props }/>);
        if (options.role) {
            expect(screen.getByRole(options.role).getAttribute('aria-label')).toBe(options.ariaLabel);
        } else if (options.text) {
            expect(screen.getByText(options.text).getAttribute('aria-label')).toBe(options.ariaLabel);
        }
    };
}