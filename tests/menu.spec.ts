import { test, expect } from '@playwright/test'

test('should display menu items', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { name: 'Menu' })).toBeVisible()
    const menuItems = await page.locator('[data-testid="menu-list"] li').count()
    expect(menuItems).toBeGreaterThan(0)
})
