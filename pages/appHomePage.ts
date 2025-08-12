import {Locator, Page} from '@playwright/test';

export class AppHomePage {

    readonly page: Page;
    readonly demosModuleLink:Locator;

    constructor(page: Page) {
        this.page = page;
        this.demosModuleLink = page.locator("//div[@class='_mainNav_qzfa5_191']/nav/ul/li/a//span[text()='Demos']");
    }



  
}   