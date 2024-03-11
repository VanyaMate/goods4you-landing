import { describe, it } from 'vitest';
import { ButtonRenderIt }
    from '@/shared/ui/buttons/Button/_tests_/Button.render.it.tsx';
import ButtonRenderWithStylesIt
    from '@/shared/ui/buttons/Button/_tests_/Button.render-with-css.it.tsx';
import ButtonRenderWithStyletypesIt
    from '@/shared/ui/buttons/Button/_tests_/Button.render-with-styletypes.it.tsx';
import ButtonOnclickWordsAndDataIt
    from '@/shared/ui/buttons/Button/_tests_/Button.onclick-words-and-data.it.tsx';
import { ButtonRenderWithAriaIt }
    from '@/shared/ui/buttons/Button/_tests_/Button.render-with-aria.it.tsx';


describe('Button', () => {
    it('Render', ButtonRenderIt);
    it('Render with styles', ButtonRenderWithStylesIt);
    it('Render with styleTypes', ButtonRenderWithStyletypesIt);
    it('Render with aria', ButtonRenderWithAriaIt);
    it('OnClick and OnClickAsync works + data', ButtonOnclickWordsAndDataIt);
});