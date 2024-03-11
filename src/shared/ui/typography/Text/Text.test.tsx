import { describe, it } from 'vitest';
import { TextRenderIt } from '@/shared/ui/typography/Text/_tests_/Text.render.it.tsx';
import {
    TextRenderWithAriaIt,
} from '@/shared/ui/typography/Text/_tests_/Text.render-with-aria.it.tsx';


describe('Text', () => {
    it('Render', TextRenderIt);
    it('Render with aria', TextRenderWithAriaIt);
});