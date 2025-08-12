import {test} from '@playwright/test';
import { AppDemosPage } from '../pages/appDemosPage';

test.describe('AG Grid Inventory Page', () => {

  test('Verify different coloumn in Inventory Page', async ({page}) => {
      const appDemosPage = new AppDemosPage(page);
      await appDemosPage.goToInventoryPage();

});

});

