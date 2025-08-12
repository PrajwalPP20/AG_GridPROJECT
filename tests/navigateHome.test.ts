import { test, expect } from '@playwright/test';
import { BasePage } from '../pages/BasePage';

// Test: Navigate to AG Grid homepage

test.describe('AG Grid Homepage Navigation', () => {
  test('should navigate to homepage and verify title', async ({ page }) => {
    const basePage = new BasePage(page);
    await basePage.navigate('/');
    await expect(page).toHaveTitle(/AG Grid/);
  });
});
