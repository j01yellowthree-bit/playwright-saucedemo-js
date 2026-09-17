import { test, expect } from '@playwright/test';

test('Перевірка головної сторінки та кнопки Читати спогади', async ({ page }) => {
  // 1. Переходимо на сайт
  await page.goto('https://spogad.mano.in.ua/');

  // 2. Перевіряємо заголовок (на сайті він звучить як "Спогад - Головна")
  await expect(page).toHaveTitle(/Спогад/);

  // 3. Знаходимо реальну кнопку "Читати спогади" за її текстом
  const readButton = page.locator('text=Читати спогади');

  // Перевіряємо, чи вона є на екрані
  await expect(readButton).toBeVisible();

  // Клікаємо по ній!
  await readButton.click();

  // 4. Перевіряємо, чи кнопка спрацювала і нас перекинуло на сторінку спогадів
  // У кінці адреси сайту має з'явитися слово "memories"
  await expect(page).toHaveURL(/.*memories/);

  await page.waitForTimeout(2000); // Додаємо невелику затримку для візуального підтвердження переходу
});