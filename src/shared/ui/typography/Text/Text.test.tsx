import { describe, it } from 'vitest';
import { TextRenderIt } from '@/shared/ui/typography/Text/_tests_/Text.render.it.tsx';
import {
    TextRenderWithAriaIt,
} from '@/shared/ui/typography/Text/_tests_/Text.render-with-aria.it.tsx';
import TextRenderWithColorsIt
    from '@/shared/ui/typography/Text/_tests_/Text.render-with-colors.it.tsx';
import TextRenderWithSizesIt
    from '@/shared/ui/typography/Text/_tests_/Text.render-with-sizes.it.tsx';


describe('Text', () => {
    it('Render', TextRenderIt);
    it('Render with aria', TextRenderWithAriaIt);
    it('Render with colors', TextRenderWithColorsIt);
    it('Render with sizes', TextRenderWithSizesIt);
});