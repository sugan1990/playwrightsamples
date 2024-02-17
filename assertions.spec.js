//import{test,expect} from '@playwright/test';

const {test, expect} = require('@playwright/test')

test('Assertions', async ({page}) => {

    await page.goto('https://demo.nopcommerce.com/register');
    //HardAssertions
    //toHaveURL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    //toHaveTitle
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //toBeVisible
    const logo = await page.locator('.header-logo');
    await expect(logo).toBeVisible();

    //SoftAssertions
    await expect.soft(page).toHaveURL('https://demo.nopcommerce.com/register');
    await expect.soft(page).toHaveTitle('nopCommerce demos store. Register')
    await expect.soft(page.locator('.header-logo')).toBeVisible();
})

