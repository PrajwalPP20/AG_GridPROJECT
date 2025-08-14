import { test } from '@playwright/test';
import { AppDemosPage } from '../pages/appDemosPage';
import { InventoryGridPage } from '../pages/inventoryGridPage';

test.describe('AG Grid Inventory Page', () => {

    test('Verify extraction of album, artist, inventory and others info', async ({ page }) => {
        test.info().annotations.push({
            type: 'verification',
            description: 'Test to ensure album, artist, inventory and other details are extracted correctly from the inventory grid'
        });
        const appDemosPage = new AppDemosPage(page);
        await appDemosPage.goToInventoryPage();
        const inventoryGridPage = new InventoryGridPage(page);
        const albumDetails: string = await inventoryGridPage.getAlbumDetails();
        await inventoryGridPage.storeAlbumDetails(albumDetails);
    });

});

