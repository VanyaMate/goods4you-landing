import { describe, it } from 'vitest';
import { LinkRenderIt } from '@/shared/ui/links/Link/_tests_/Link.render.it.tsx';
import {
    LinkRenderWithAriaIt,
} from '@/shared/ui/links/Link/_tests_/Link.render-with-aria.it.tsx';
import LinkHrefIt from '@/shared/ui/links/Link/_tests_/Link.href.it.tsx';


describe('Link', () => {
    it('Render', LinkRenderIt);
    it('Render with aria', LinkRenderWithAriaIt);
    it('Render href', LinkHrefIt);
});