import { describe, it } from 'vitest';
import { TitleRenderIt } from '@/shared/ui/typography/Title/_tests_/it/Title.render.it.tsx';
import TitleRenderWithLevelIt
    from '@/shared/ui/typography/Title/_tests_/it/Title.render-with-level.it.tsx';
import { TitleRenderWithAriaIt }
    from '@/shared/ui/typography/Title/_tests_/it/Title.render-with-aria.it.tsx';


describe('Title', () => {
    it('Render', TitleRenderIt);
    it('Render with aria', TitleRenderWithAriaIt);
    it('Render with levels', TitleRenderWithLevelIt);
});