import { test, expect } from '@playwright/test';

test('get title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expects page to have a heading with the name of Amazon Clone.
  await expect(page.getByRole('heading', { name: 'Amazon Clone' })).toBeVisible();
});

test('get products', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Products' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Table' })).toBeVisible();
});

test('get first product', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expects page to have a heading with the name of Table.
  await expect(page.getByRole('heading', { name: 'Amazon Clone' })).toBeVisible();
})