import {test, expect} from '@playwright/test'

test('inputboxes', async ({page}) => {

    await page.goto("https://demoqa.com/automation-practice-form");
    await expect(await page.locator('//input[@id="firstName"]')).toBeVisible();
    await expect(await page.locator('//input[@id="firstName"]')).toBeEditable();
    await expect(await page.locator('//input[@id="firstName"]')).toBeEmpty();
    await expect(await page.locator('//input[@id="firstName"]')).toBeEnabled();
    await page.locator('//input[@id="firstName"]').fill("Suganya");
    await page.fill("//input[@id='lastName']",'Srinivasan');
    //await page.type("//input[@id='lastName']",'Srinivasan');
    await page.waitForTimeout(3000);

})