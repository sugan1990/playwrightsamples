 /*

    page.getByAltText() - to locate an element, usually image, by its text alternatives.
    page.getByPlaceholder() - to locate an input by placeholder.
    page.getByRole() - to locate by explicit and inplicit accessibility attributes.
    page.getByText() - to locate by text content.
    page.getByLabel() - to locate a form control by associated label's text.
    page.getByTitle() - to locate an element by its title attribute.
    page.getByTestId() - to locate an element based on its data-testid attribute 

*/
import {test, expect} from '@playwright/test';

test('builtin-locators', async ({page}) => {

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
const logo = await page.getByAltText('company-branding');
await expect(logo).toBeVisible();
await page.getByPlaceholder('Username').fill("Admin");
await page.getByPlaceholder('Password').fill("admin123");
await page.getByRole('button', {type: 'submit'}).click();



})








