import { describe, it } from 'vitest';
import SiteMenuRenderIt from '@/widget/pages/ui/SiteMenu/_tests_/SiteMenu.render.it.tsx';
import SiteMenuRenderWithDesktopSizeIt
    from '@/widget/pages/ui/SiteMenu/_e2e_/SiteMenu.render-with-desktop-size.e2e-test.tsx';
import SiteMenuRenderWithMobileSizeIt
    from '@/widget/pages/ui/SiteMenu/_e2e_/SiteMenu.render-with-mobile-size.e2e-test.tsx';


describe('SiteMenu', () => {
    it('Render', SiteMenuRenderIt);
    it('Render on desktop size (1300 width)', SiteMenuRenderWithDesktopSizeIt);
    it('Render on mobile size (320 width)', SiteMenuRenderWithMobileSizeIt);
});