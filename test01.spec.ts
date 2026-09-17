import { test, expect } from "@playwright/test";

test('Susses login user', async ({page})) => {
  await page.goto ('https://example.com/login');


}
