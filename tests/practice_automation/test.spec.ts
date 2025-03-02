import {test, expect} from "@playwright/test";

test.describe('Set of tests to practice web automation (without POM and etc.)', () => {
    const HOME_PAGE = 'https://practice-automation.com';

    test('JS delays', async ({ page }) => {
        await page.goto(`${HOME_PAGE}/javascript-delays/`);
        const startButton = page.getByRole('button').filter({hasText: 'Start'});
        const input = page.locator('input#delay');

        await startButton.click();
        await expect(input).toHaveValue('Liftoff!', { timeout: 11_000 });
    });

    test('Popups', async ({ page }) => {
        await page.goto(`${HOME_PAGE}/popups/`);
        const alertPopupButton = page.locator('button#alert');
        const confirmPopupButton = page.locator('button#confirm');
        const promptPopupButton = page.locator('button#prompt');
        const confirmResult = page.locator('p#confirmResult');
        const promptResult = page.locator('p#promptResult');
        

        page.once('dialog', alert => {
            expect(alert.message()).toEqual('Hi there, pal!');
            alert.accept();
        });
        await alertPopupButton.click();

        page.once('dialog', confirm => {
            expect(confirm.message()).toEqual('OK or Cancel, which will it be?');
            confirm.accept();
        });
        await confirmPopupButton.click();
        await expect(confirmResult).toHaveText('OK it is!');
        
        
        page.once('dialog', confirm => confirm.dismiss());
        await confirmPopupButton.click();
        await expect(confirmResult).toHaveText('Cancel it is!');

        page.once('dialog', prompt => {
            expect(prompt.message()).toEqual(`Hi there, what's your name?`);
            prompt.accept('test');
        });
        await promptPopupButton.click();
        await expect(promptResult).toHaveText('Nice to meet you, test!');

        page.once('dialog', prompt => prompt.dismiss());
        await promptPopupButton.click();
        await expect(promptResult).toHaveText('Fine, be that way...');
    });

    test('Slider', async ({ page }) => {
        await page.goto(`${HOME_PAGE}/slider/`);
        const slider = page.locator('#slideMe');
        const currentValue = page.locator('span#value');
        
        const box = await slider.boundingBox();
        const x = box.x;
        const y = box.y;
        const width = box.width;

        // Click and drag the slider to a specific position
        await page.mouse.move(x, y);
        await page.mouse.down();
        await page.mouse.move(x + width * 0.75, y); // Move to 75% of slider width
        await page.mouse.up();
        

        await expect(currentValue).toHaveText('76');
    });
});