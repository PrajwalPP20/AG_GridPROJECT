import {test, expect} from "@playwright/test";
import { AppDemosPage } from "../pages/appDemosPage";   
import { InventoryStatusPage } from "../pages/inventoryStatusPage";

test.describe('Inventory Status Tests', () => {
    test('should display inventory of Active status correctly', async ({ page }) => {
        const appDemosPage = new AppDemosPage(page);
        await appDemosPage.goToInventoryPage();
        const inventoryStatusPage = new InventoryStatusPage(page);
        await inventoryStatusPage.inventoryAciveStatusButton.click();
    });

    test('should display inventory of On-hold status correctly', async ({ page }) => {
        const appDemosPage = new AppDemosPage(page);
        await appDemosPage.goToInventoryPage();
        const inventoryStatusPage = new InventoryStatusPage(page);
        await inventoryStatusPage.inventoryOnHoldStatusButton.click();
    });
}); 