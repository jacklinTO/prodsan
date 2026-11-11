import fs from 'fs';
import path from 'path';
import { test, expect } from '@playwright/test';

test('ironic pop is up', async ({ page }) => {
	await page.goto('https://ironicpop.com/');
	await expect.soft(page).toHaveTitle(/Ironic Pop/);
	await expect.soft(page.getByRole('img', { name: 'Ironic Pop' })).toBeVisible();
});

const urlMap: Record<string, string> = {
	'https://qualstride.com/': 'Qualstride',
	'https://qualstride.com/stride.html': 'STRIDE'
};

for (const [url, title] of Object.entries(urlMap)) {
	test(`qualstride - ${url} is up`, async ({ page, isMobile }) => {
		const titleRegex = new RegExp(`^${title}`);
		const yamlPath = path.resolve(__dirname, `../test-data/${title.toLowerCase()}-nav.yml`);
		const expectedYaml = fs.readFileSync(yamlPath, 'utf8');
		await page.goto(url);
		await expect.soft(page).toHaveTitle(titleRegex);
		if (isMobile) {
			await page.locator('#nav-toggle').click();
		}
		await expect.soft(page).toMatchAriaSnapshot(expectedYaml);
	})
}
