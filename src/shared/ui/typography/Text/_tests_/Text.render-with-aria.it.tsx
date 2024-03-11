import ComponentRenderWithAriaIt
    from '$/_tests_/components/Component.render-with-aria.it.tsx';
import Text, { TextProps } from '@/shared/ui/typography/Text/Text.tsx';


export const TextRenderWithAriaIt = ComponentRenderWithAriaIt<TextProps>(Text, {
    children    : 'Simple',
    'aria-label': 'Simple text',
}, {
    text     : 'Simple',
    ariaLabel: 'Simple text',
});