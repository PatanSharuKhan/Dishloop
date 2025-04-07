import { test, expect } from '@playwright/test'

test('get menu', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { name: 'Menu' })).toBeVisible()
})