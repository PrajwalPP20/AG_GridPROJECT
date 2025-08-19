import { Locator, Page } from "@playwright/test";
import { InventoryGridPage } from "./inventoryGridPage";
export class StatusFilterPage {

    readonly page: Page;
    readonly filterSearchBar: Locator;
    readonly activeStatus: string = 'Active';
    readonly onHoldStatus: string = 'On Hold';
    readonly outOfStock: string = 'Out of Stock';

    constructor(page: Page) {
        this.page = page;
        this.filterSearchBar = page.getByPlaceholder("Search...");
    }

    async filterAlbumStatus(status: string) {
        const inventoryGridPage = new InventoryGridPage(this.page);
        await inventoryGridPage.statusFilterDropdown.click();
        const statusFilterPage = new StatusFilterPage(this.page);
        await statusFilterPage.filterSearchBar.fill(status);
        await statusFilterPage.filterSearchBar.press('Enter', { delay: 1000 });
        await this.page.keyboard.press('Escape'); // Close the filter dropdown
        // Validate the status in the inventory grid
        if (this.activeStatus === status || this.onHoldStatus === status || this.outOfStock === status) {
            const inventoryGrdPage = new InventoryGridPage(this.page);
            await inventoryGrdPage.validateAlbumStatus(status);
        } else {
            throw new Error(`Invalid status: ${status}. Valid statuses are: ${this.activeStatus}, ${this.onHoldStatus}, ${this.outOfStock}`);
        }
    }
}       
