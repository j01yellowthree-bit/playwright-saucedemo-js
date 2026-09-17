import {test, expect} from '@playwright/test';
import {LoginPage} from './LoginPage';

test('User can Sign In', async({page})=> {
const loginPage = new LoginPage(page);

await page.goto('https://example.com/login');

await loginPage.login('user@test.com');

await expect(page.getByText('Welcome')).toBeVisible();
});