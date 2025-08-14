
import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';
import { BasePage } from './pages/BasePage';

// This global setup will run once before all tests
async function globalSetup() {
    const baseUrl: string = 'https://www.ag-grid.com/example-inventory/';
    const albumDetailsPath = path.resolve(__dirname, 'test-data', 'album-details.json');
    if (!fs.existsSync(albumDetailsPath)) {
        const browser = await chromium.launch();
        const page = await browser.newPage();
        await page.goto(baseUrl, { waitUntil: 'networkidle' });
        const basePage = new BasePage(page);
        const albumDetails = await basePage.getAlbumDetails();
        // Store album details
        fs.mkdirSync(path.dirname(albumDetailsPath), { recursive: true });
        fs.writeFileSync(albumDetailsPath, albumDetails);
        await browser.close();
        console.log('Created album-details.json with scraped content.');
    } else {
        console.log('album-details.json already exists.');
    }
}

export default globalSetup;
