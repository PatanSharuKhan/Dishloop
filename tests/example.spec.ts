import { test, expect } from '@playwright/test';

test('get title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await expect(page.getByRole('heading', { name: 'DishLoop' })).toBeVisible();
});

test('get Menu', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await expect(page.getByRole('heading', { name: 'Menu' })).toBeVisible();
});
