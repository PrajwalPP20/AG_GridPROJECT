import { test, expect } from "@playwright/test";
import { AppDemosPage } from "../pages/appDemosPage";
import { InventoryStatusPage } from "../pages/inventoryStatusPage";
import { AppHomePage } from "../pages/appHomePage";
import { BasePage } from "../pages/basePage";
import { InventoryGridPage } from "../pages/inventoryGridPage";
import { StatusFilterPage } from "../pages/statusFilterPage";

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

    test.only('should sort the albums based on album status on search bar', async ({ page }) => {

        test.info().annotations.push({
            type: 'Sorting Album',
            description: 'Test to ensure Sold status inventory is displayed correctly'
        });

        const inventoryGridPage = new InventoryGridPage(page);
        await inventoryGridPage.statusFilterDropdown.click();
        //const statusOptions: String[] = await page.getByRole('listbox').getByRole('option').allTextContents();
        // const allStatus : String[] = statusOptions.map(opt => opt.trim());
        const allStatusOptions: String[] = await page.locator('//div[text()="(Select All)"]/../../../following-sibling::div').allTextContents();
        // const allStatusArray: String[] = allStatusOptions.map(opt => opt.trim());

                const statusFilterPage = new StatusFilterPage(page);
                await statusFilterPage.filterStatus('Out of Stock');
        
        


    });

});