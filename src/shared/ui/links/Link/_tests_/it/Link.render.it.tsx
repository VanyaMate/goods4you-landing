import ComponentRenderIt from '$/_tests_/vitest/components/Component.render.it.tsx';
import Link, { LinkProps } from '@/shared/ui/links/Link/Link.tsx';


export const LinkRenderIt = ComponentRenderIt<LinkProps>(Link,
    {
        children: 'home',
        href    : '#',
    },
    {
        text: 'home',
        role: 'link',
    },
);