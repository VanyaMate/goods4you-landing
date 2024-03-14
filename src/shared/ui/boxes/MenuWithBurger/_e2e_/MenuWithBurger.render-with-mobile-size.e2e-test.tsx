import { test, expect } from '@playwright/experimental-ct-react';
import { delay } from '$/_tests_/vitest/helpers/delay.ts';
import MenuWithBurger from '@/shared/ui/boxes/MenuWithBurger/MenuWithBurger.tsx';
import React from 'react';


test.use({ viewport: { width: 320, height: 500 } });

test('Menu with burger on mobile size', async ({ mount, page }) => {
    // Mount a component. Returns locator pointing to the component.
    const component = await mount(
        <MenuWithBurger
            extra={ <div>extra</div> }
            items={ [
                {
                    text: 'Link 1',
                    href: '#',
                },
                {
                    text: 'Link 2',
                    href: '#',
                },
                {
                    text: 'Link 3',
                    href: '#',
                },
                {
                    text: 'Link 4',
                    href: '#',
                },
            ] }
            siteLogo={
                <h1>Large logo size</h1>
            }
        />,
    );

    await expect(component).toContainText('Large logo size');
    await expect(component).toContainText('Link 1');
    await expect(component).toContainText('Link 2');
    await expect(component).toContainText('Link 3');
    await expect(component).toContainText('Link 4');
    await expect(component).toContainText('extra');

    await delay(100);

    await expect(page).toHaveScreenshot();
    const openBurgerMenuButtonIsHidden = await component.getByRole('button').isHidden();
    expect(openBurgerMenuButtonIsHidden).toBe(false);
});