import { test } from '@playwright/test';
import { AppDemosPage } from '../pages/appDemosPage';
import { InventoryGridPage } from '../pages/inventoryGridPage';

test.describe('AG Grid Inventory Page', () => {

    test('Verify extraction of album, artist, inventory and others info', async ({ page }) => {
        const appDemosPage = new AppDemosPage(page);
        await appDemosPage.goToInventoryPage();
        await page.waitForTimeout(5000)
        const inventoryGridPage = new InventoryGridPage(page);
        const productsDetailsString: string = await inventoryGridPage.getAlbumDetails();
        console.log(productsDetailsString);
    });

});

