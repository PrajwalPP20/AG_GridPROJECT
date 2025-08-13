import {test, expect} from "@playwright/test";
import { AppDemosPage } from "../pages/appDemosPage";   

test.describe('Inventory Status Tests', () => {
    test('should display inventory status correctly', async ({ page }) => {
        const appDemosPage = new AppDemosPage(page);
        await appDemosPage.goToInventoryPage();
        await page.getByRole('button', { name: 'Active' }).click();
      
    });
}); 