import { Locator, Page } from "@playwright/test";

export class InventoryStatusPage {
    readonly page: Page;
    readonly inventoryAciveStatusButton: Locator;
    readonly inventoryOnHoldStatusButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.inventoryAciveStatusButton = page.getByRole('button', { name: 'Active' });
        this.inventoryOnHoldStatusButton = page.getByRole('button', { name: 'On Hold' });
    }

    async selectStatus(status: string) {
        await this.page.getByRole('button', { name: status }).click();
    }
}