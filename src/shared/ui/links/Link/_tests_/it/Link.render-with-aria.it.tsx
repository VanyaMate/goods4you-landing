import ComponentRenderWithAriaIt
    from '$/_tests_/vitest/components/Component.render-with-aria.it.tsx';
import Link, { LinkProps } from '@/shared/ui/links/Link/Link.tsx';


export const LinkRenderWithAriaIt = ComponentRenderWithAriaIt<LinkProps>(Link,
    {
        children    : 'home',
        href        : '#',
        'aria-label': 'Home page',
    },
    {
        text     : 'home',
        ariaLabel: 'Home page',
    },
);