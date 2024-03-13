import ComponentRenderWithAriaIt
    from '$/_tests_/vitest/components/Component.render-with-aria.it.tsx';
import Title, { TitleProps } from '@/shared/ui/typography/Title/Title.tsx';


export const TitleRenderWithAriaIt = ComponentRenderWithAriaIt<TitleProps>(Title, {
    children    : 'Simple',
    level       : 1,
    'aria-label': 'Simple title',
}, {
    role     : 'heading',
    ariaLabel: 'Simple title',
});