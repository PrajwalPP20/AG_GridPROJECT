import {Locator, Page} from '@playwright/test';
import { BasePage } from './BasePage';
import { AppHomePage } from './appHomePage';

export class AppDemosPage {

    readonly page: Page;
    readonly inventoryLink:Locator;

    constructor(page: Page) {
        this.page = page;
        this.inventoryLink = page.locator("//a[@href='/example-inventory/']");
    }

    async goToInventoryPage() {
        const basePage = new BasePage(this.page);
              await basePage.navigateToBaseUrl();
              const appHomePage = new AppHomePage(this.page);
              await appHomePage.demosModuleLink.click();
              const appDemosPage = new AppDemosPage(this.page);
              await appDemosPage.inventoryLink.click();
              await this.page.waitForLoadState('networkidle');
    }

  
}   