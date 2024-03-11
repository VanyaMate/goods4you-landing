import ComponentRenderWithAriaIt
    from '$/_tests_/components/Component.render-with-aria.it.tsx';
import IconM, { IconMProps } from '@/shared/ui/icons/IconM/IconM.tsx';


export const IconMRenderWithAriaIt = ComponentRenderWithAriaIt<IconMProps>(IconM, {
    children    : 'edit',
    'aria-label': 'edit product',
}, {
    text     : 'edit',
    ariaLabel: 'edit product',
});