import { test, expect } from "@playwright/test";
import { AppDemosPage } from "../pages/appDemosPage";
import { InventoryStatusPage } from "../pages/inventoryStatusPage";

test.describe('Inventory Status Tests', () => {

    let appDemosPage: AppDemosPage;

    test.beforeEach(async ({ page }) => {
        appDemosPage = new AppDemosPage(page);
        await appDemosPage.goToInventoryPage();
    })

    test('should display inventory of Active status correctly', async ({ page }) => {

        test.info().annotations.push({
            type: 'Sorting Album',
            description: 'Test to ensure Active status inventory is displayed correctly'
        });

        const inventoryStatusPage = new InventoryStatusPage(page);
        await inventoryStatusPage.selectStatus('Active');
    });

    test('should display inventory of On-hold status correctly', async ({ page }) => {

        test.info().annotations.push({
            type: 'Sorting Album',
            description: 'Test to ensure On-Hold status inventory is displayed correctly'
        });

        const inventoryStatusPage = new InventoryStatusPage(page);
        await inventoryStatusPage.selectStatus('On Hold');
    });
}); 