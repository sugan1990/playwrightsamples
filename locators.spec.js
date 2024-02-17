import {test, expect} from '@playwright/test'

test('locators', async ({page}) => {

    await page.goto("https://demoqa.com/automation-practice-form");

    //Use property
    await expect(await page.locator('//input[@id="firstName"]')).toBeVisible();
    await expect(await page.locator('//input[@id="firstName"]')).toBeEditable();
    await expect(await page.locator('//input[@id="firstName"]')).toBeEmpty();
    await expect(await page.locator('//input[@id="firstName"]')).toBeEnabled();
    await page.fill('id=firstName', "Suganya")
    
    //Use xpath
    await page.locator('//input[@id="lastName"]').fill("Srinivasan");

    //Use CSS
    await page.locator('#userEmail').fill("suganya@gmail.com");
    
    await page.waitForTimeout(3000);
   
})