import { Locator, Page } from "@playwright/test";
import { Product } from "../types/Product";
import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

export class InventoryGridPage {

    readonly page: Page;
    readonly albumsDetails: Product[] = [];
    readonly albumNameLocator: Locator;
    readonly artistLocator: Locator;
    readonly yearLocator: Locator;
    readonly statusLocator: Locator;
    readonly albumPriceLocator: Locator;
    readonly inventoryLocator: Locator;
    readonly incomingLocator: Locator;
    readonly albumSoldLocator: Locator;
    readonly estimatedProfitLocator: Locator;
    readonly actionsLocator: Locator;
    readonly albumRows : Locator;

    constructor(page: Page) {
        this.page = page;
        this.albumNameLocator = page.locator("//span[@class='ag-group-value']/div/div[2]/div[1]");
        this.artistLocator = page.locator('[col-id="artist"]');
        this.yearLocator = page.locator('[col-id="year"]');
        this.statusLocator = page.locator('[col-id="status"]');
        this.albumPriceLocator = page.locator("//div[@col-id='price']/div/span[1]");
        this.inventoryLocator = page.locator('[col-id="inventory"]');
        this.incomingLocator = page.locator('[col-id="incoming"]');
        this.albumSoldLocator = page.locator('[col-id="sold"]');
        this.estimatedProfitLocator = page.locator('[col-id="profit"]');
        this.actionsLocator = page.locator('[col-id="actions"]');
        this.albumRows = page.locator('.ag-center-cols-container').getByRole('row');
    }

    async getAlbumDetails(): Promise<string> {
        const albumRowsCount = await this.albumRows.count();

        for (let i = 1; i <= albumRowsCount; i++) {
            this.albumsDetails.push({
                albumName: await this.albumNameLocator.nth(i-1).textContent() ?? '',
                artist: await this.artistLocator.nth(i).textContent() ?? '',
                year: Number(await this.yearLocator.nth(i).textContent()) ?? 0,
                status: await this.statusLocator.nth(i).textContent() ?? '',
                inventory: await this.inventoryLocator.nth(i).textContent() ?? '',
                incoming: Number(await this.incomingLocator.nth(i).textContent()) ?? 0,
                price: (await this.albumPriceLocator.nth(i-1).textContent()) ?? '',
                sold: Number(await this.albumSoldLocator.nth(i).textContent()) ?? 0,
                estimatedProfit: await this.estimatedProfitLocator.nth(i).textContent() ?? '',
                actions: await this.actionsLocator.nth(i).textContent() ?? ''
            })
        }
        return JSON.stringify(this.albumsDetails, null, 2);
    }

    async storeAlbumDetails(albumsDetails : string): Promise<void> {
        const dirPath : string = 'test-data';
        const filePath: string = join(dirPath, 'album-details.json');
        mkdirSync(dirPath, { recursive: true });
        writeFileSync(filePath, albumsDetails);
    }


}