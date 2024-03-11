import React, { JSX } from 'react';
import { render, screen, Matcher, ByRoleMatcher } from '@testing-library/react';


export type ComponentRenderCheck = {
    text?: Matcher;
    role?: ByRoleMatcher;
}

export default function <Props extends JSX.IntrinsicAttributes> (Component: React.FC<Props>, props: Props, options: ComponentRenderCheck) {
    return () => {
        render(<Component { ...props }/>);
        options.text && screen.getByText(options.text);
        options.role && screen.getByRole(options.role);
    };
}