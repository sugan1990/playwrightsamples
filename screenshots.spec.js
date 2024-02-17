import {test, expect} from '@playwright/test'

test('page screenshot', async ({page}) => {

await page.goto("https://demo.opencart.com/")
await page.screenshot({path: 'test/screenshots/' +Date.now() +'HomePage.png'})

})

test('full page screenshot', async ({page}) => {
    await page.goto("https://demo.opencart.com/")
    await page.screenshot({path: 'test/screenshots/' +Date.now() +'FullPage.png', fullPage : true})
})

test('Element screenshot', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator("//div[contains(@class,'oxd-sheet')]").screenshot({path:'test/screenshots/' +Date.now() +'ElementPage.png'})
})