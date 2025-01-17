import { test, expect } from '@playwright/test';

test('ironic pop is up', async ({ page }) => {
  await page.goto('https://ironicpop.com/');
  await expect(page).toHaveTitle(/Ironic Pop/);
	await expect(page.getByRole('img', { name: 'Ironic Pop' })).toBeVisible();
});

test('weberify is up', async ({ page }) => {
  await page.goto('https://weberify.com/');
	await expect(page).toHaveTitle(/Welcome to Weberify/);
  await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
	await expect(page.getByRole('link', { name: 'Sign Up' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Taking Web Application Testing To The Next Level' })).toBeVisible();
});
