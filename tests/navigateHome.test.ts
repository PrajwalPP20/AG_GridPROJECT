import { test, expect } from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { AppHomePage} from '../pages/appHomePage';
import { AppDemosPage } from '../pages/appDemosPage';



test.describe('AG Grid Homepage Navigation', () => {
  test('should navigate to inventory page', async ({ page }) => {
    const basePage = new BasePage(page);
    await basePage.navigate('/');
    await expect(page).toHaveTitle(/AG Grid/);
    const appHomePage = new AppHomePage(page);
    await appHomePage.demosModuleLink.click();
    const appDemosPage = new AppDemosPage(page);
    await appDemosPage.inventoryLink.click();
  });

});
