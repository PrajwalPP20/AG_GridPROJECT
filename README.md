# AG_GridPROJECT

This project uses Playwright for end-to-end testing of AG Grid demo pages.

## Features
- Playwright test automation for AG Grid web pages
- Global setup to fetch and store album details before running tests
- Environment-based configuration using `.env.development`

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm

### Installation
1. Clone the repository:
	 ```sh
	 git clone <repo-url>
	 cd AG_GridPROJECT
	 ```
2. Install dependencies:
	 ```sh
	 npm install
	 ```

### Environment Variables
Edit `.env.development` to set your base URL and inventory path:
```
BASE_URL=https://www.ag-grid.com/
INVENTORY_PATH=/example-inventory/
```

### Running Tests
- To run all tests:
	```sh
	npx playwright test
	```
- To view the HTML report after tests:
	```sh
	npx playwright show-report
	```

### Project Structure
- `pages/` - Page Object Model classes
- `tests/` - Test files
- `test-data/` - Test data (e.g., album-details.json)
- `global-setup.ts` - Global setup script to fetch album details
- `.env.development` - Environment variables

### Customization
- Update selectors and URLs in the page objects as needed for your AG Grid instance.
- Add more tests in the `tests/` directory.

### Notes
- The global setup will only fetch album details if `test-data/album-details.json` does not exist.
- Environment variables are loaded using `dotenv`.

---

For more information, see the Playwright documentation: https://playwright.dev/