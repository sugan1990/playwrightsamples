import {test, expect} from '@playwright/test'

test('checkbox', async ({page}) =>{

    await page.goto("https://demoqa.com/automation-practice-form")
    await page.locator("//input[@id='hobbies-checkbox-1' and @type='checkbox']").scrollIntoViewIfNeeded()
    await page.locator("//input[@id='hobbies-checkbox-1' and @type='checkbox']").check()

})