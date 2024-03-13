import { describe, it } from 'vitest';
import { IconMRenderIt } from '@/shared/ui/icons/IconM/_tests_/it/IconM.render.it.tsx';
import { IconMRenderWithAriaIt }
    from '@/shared/ui/icons/IconM/_tests_/it/IconM.render-with-aria.it.tsx';
import IconMRenderWithSizesIt
    from '@/shared/ui/icons/IconM/_tests_/it/IconM.render-with-sizes.it.tsx';


describe('IconM', () => {
    it('Render', IconMRenderIt);
    it('Render with aria', IconMRenderWithAriaIt);
    it('Render with sizes', IconMRenderWithSizesIt);
});