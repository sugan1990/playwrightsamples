import {test, expect} from '@playwright/test'

test('dropdown', async ({page}) => {

await page.goto("https://testautomationpractice.blogspot.com/")
await page.locator('#country').selectOption({label: 'India'})
await page.close()

})

test('dropdown2', async ({page}) => {

await page.goto("https://demoqa.com/select-menu")
await page.locator("(//div[@class=' css-tlfecz-indicatorContainer'])[1]").click()
await page.locator("(//div[@class=' css-1uccc91-singleValue'])[1]").selectText('Group 1, option 2')

})
