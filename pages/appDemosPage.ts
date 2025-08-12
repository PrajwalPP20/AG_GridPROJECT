import {Locator, Page} from '@playwright/test';

export class AppDemosPage {

    readonly page: Page;
    readonly inventoryLink:Locator

    constructor(page: Page) {
        this.page = page;
        this.inventoryLink = page.locator("//a[@href='/example-inventory/']");
    }

  
}   