import {test, expect} from '@playwright/test';

test('Register new customer', async ({page})=>{
  await page.goto ('https://example.com/register');

  await page.getByPlaceholder('Full Name').fill('Taras Shevchenko');

  await page.getByLabel('Country').selectOption('Ukraine');

  await page.getByLabel('I agree to the Terms and Conditions').check();

  await page.getByRole('button', {name:'Complete Registration'});
  
  await expect(page.getByText('Welcome, Taras Shevchenko')).toBeVisible()

});