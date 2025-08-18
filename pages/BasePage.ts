import { expect, Locator, Page } from '@playwright/test';
import { Product } from '../types/Product';

export class BasePage {
  protected page: Page;
  

  constructor(page: Page) {
    this.page = page;
    
  }

  async navigateToBaseUrl() {
    await this.page.goto('/', { waitUntil: 'networkidle' });
  }

  async verifyPageTitle() {
    await expect(this.page).toHaveTitle(/AG Grid/)
  }


  // Add common page methods here
}
