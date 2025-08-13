import { expect, Page } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToBaseUrl(url: string) {
    await this.page.goto(url);
  }

  async verifyPageTitle() {
    await expect(this.page).toHaveTitle(/AG Grid/)
  }


  // Add common page methods here
}
