import { expect, Page } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToBaseUrl() {
    await this.page.goto('/');
  }

  async verifyPageTitle() {
    await expect(this.page).toHaveTitle(/AG Grid/)
  }


  // Add common page methods here
}
