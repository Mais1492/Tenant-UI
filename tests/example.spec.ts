import { test, expect } from '@playwright/test';

test('add tenant and verify in burger menu popup', async ({ page }) => {
  await page.goto('http://localhost:4200');
  await page.getByLabel('Tenant Name').fill('Hochschule Burgenland');
  await page.getByRole('button', { name: 'Add Tenant' }).click();
  await expect(page.locator('#success-popup')).toContainText('Hochschule Burgenland');
});