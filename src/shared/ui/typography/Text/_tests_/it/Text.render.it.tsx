import ComponentRenderIt from '$/_tests_/vitest/components/Component.render.it.tsx';
import Text, { TextProps } from '@/shared/ui/typography/Text/Text.tsx';


export const TextRenderIt = ComponentRenderIt<TextProps>(Text,
    {
        children: 'Any text',
    }, {
        text: 'Any text',
    },
);