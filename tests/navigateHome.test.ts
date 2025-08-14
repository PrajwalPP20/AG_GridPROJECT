import { test, expect } from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { AppHomePage } from '../pages/appHomePage';
import { AppDemosPage } from '../pages/appDemosPage';



test.describe('AG Grid Homepage Navigation', () => {
  test('should navigate to inventory page', async ({ page }) => {
    test.info().annotations.push({
      type: 'Home Navigation',
      description: 'Test to ensure navigation to inventory page works correctly'
    });
    const basePage = new BasePage(page);
    await basePage.navigateToBaseUrl();
    await test.step('Verify page title', async () => {
      await basePage.verifyPageTitle();
      const appHomePage = new AppHomePage(page);
      await appHomePage.demosModuleLink.click();
      const appDemosPage = new AppDemosPage(page);
      await appDemosPage.inventoryLink.click();

    });

  });

});
