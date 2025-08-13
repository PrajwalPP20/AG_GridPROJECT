import { test } from '@playwright/test';
import { AppDemosPage } from '../pages/appDemosPage';
import { InventoryGridPage } from '../pages/inventoryGridPage';
import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

test.describe('AG Grid Inventory Page', () => {


    test('Verify extraction of album, artist, inventory and others info', async ({ page }) => {
        const appDemosPage = new AppDemosPage(page);
        await appDemosPage.goToInventoryPage();
        const inventoryGridPage = new InventoryGridPage(page);
        const albumDetails: string = await inventoryGridPage.getAlbumDetails();
        await inventoryGridPage.storeAlbumDetails(albumDetails);
    });

});

