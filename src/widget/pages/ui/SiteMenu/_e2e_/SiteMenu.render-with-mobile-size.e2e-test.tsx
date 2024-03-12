import { test, expect } from '@playwright/experimental-ct-react';
import SiteMenu from '@/widget/pages/ui/SiteMenu/SiteMenu.tsx';
import { delay } from '$/_tests_/vitest/helpers/delay.ts';


test.use({ viewport: { width: 320, height: 500 } });

test('Site menu on mobile size', async ({ mount, page }) => {
    // Mount a component. Returns locator pointing to the component.
    const component = await mount(
        <SiteMenu
            items={ [
                <div key="1" style={ { width: 100 } }>Item 1</div>,
                <div key="2" style={ { width: 100 } }>Item 2</div>,
                <div key="3" style={ { width: 100 } }>Item 3</div>,
                <div key="4" style={ { width: 100 } }>Item 4</div>,
            ] }
            siteLogo={ <div style={ { width: 150 } }>Large logo size</div> }
        />,
    );

    await expect(component).toContainText('Large logo size');
    await expect(component).toContainText('Item 1');
    await expect(component).toContainText('Item 2');
    await expect(component).toContainText('Item 3');
    await expect(component).toContainText('Item 4');

    await delay(100);

    await expect(page).toHaveScreenshot();
    const burgerMenuHidden = await component.getByRole('button').isHidden();
    expect(burgerMenuHidden).toBe(false);
});