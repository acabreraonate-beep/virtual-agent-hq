
const { test, expect } = require('@playwright/test');

test('Laboratorio Virtual Agent HQ', async ({ page }) => {
  await page.goto('file://' + process.cwd() + '/laboratorio.html');

  await expect(page.locator('body')).toBeVisible();

  await page.screenshot({
    path: 'laboratorio-test.png',
    fullPage: true
  });
});
