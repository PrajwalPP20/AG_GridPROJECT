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

    async filterStatus(status: string) {
        const inventoryGridPage = new InventoryGridPage(this.page);
        await inventoryGridPage.statusFilterDropdown.click();
        const statusFilterPage = new StatusFilterPage(this.page);
        await statusFilterPage.filterSearchBar.fill(status);
        await statusFilterPage.filterSearchBar.press('Enter');
    }








}       
