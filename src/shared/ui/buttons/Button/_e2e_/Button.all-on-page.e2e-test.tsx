import { expect, test } from '@playwright/experimental-ct-react';
import { delay } from '$/_tests_/vitest/helpers/delay.ts';
import Button from '@/shared/ui/buttons/Button/Button.tsx';


test.use({ viewport: { width: 500, height: 800 } });

test('Menu with burger on mobile size', async ({ mount, page }) => {
    // Mount a component. Returns locator pointing to the component.
    const component = await mount(
        <div style={ { display: 'flex', flexDirection: 'column', gap: 40 } }>
            <Button>Empty</Button>
            <Button quad>Q</Button>
            <Button className="button_clear">Clear</Button>
            <Button styleType="primary">Primary</Button>
            <Button styleType="second">Second</Button>
            <Button styleType="light">Light</Button>
            <Button styleType="border">Border</Button>
        </div>,
    );

    await expect(component).toContainText('Empty');
    await expect(component).toContainText('Q');
    await expect(component).toContainText('Clear');
    await expect(component).toContainText('Primary');
    await expect(component).toContainText('Second');
    await expect(component).toContainText('Light');
    await expect(component).toContainText('Border');

    await delay(100);

    await expect(page).toHaveScreenshot();
});