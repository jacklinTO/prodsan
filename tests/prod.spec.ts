import { test, expect } from '@playwright/test';

test('ironic pop is up', async ({ page }) => {
  await page.goto('https://ironicpop.com/');
  await expect.soft(page).toHaveTitle(/Ironic Pop/);
	await expect.soft(page.getByRole('img', { name: 'Ironic Pop' })).toBeVisible();
});

test('weberify is up', async ({ page }) => {
  await page.goto('https://weberify.com/');
	await expect.soft(page).toHaveTitle(/Welcome to Weberify/);
  await expect.soft(page.getByRole('link', { name: 'Home' })).toBeVisible();
	await expect.soft(page.getByRole('link', { name: 'Sign Up' })).toBeVisible();
  await expect.soft(page.getByRole('heading', { name: 'Taking Web Application Testing To The Next Level' })).toBeVisible();
});

test('qualstride is up', async ({ page }) => {
  await page.goto('https://qualstride.com/');
	await expect.soft(page).toHaveTitle(/Qualstride/);
  // Commented: only work on web
	// await expect.soft(page.locator('#nav-links').getByRole('link', { name: 'The Problem' })).toBeVisible();
	// await expect.soft(page.locator('#nav-links').getByRole('link', { name: 'Results' })).toBeVisible();
  // await expect.soft(page.locator('#nav-links').getByRole('link', { name: 'The Difference' })).toBeVisible();
	// await expect.soft(page.locator('#nav-links').getByRole('link', { name: 'Services' })).toBeVisible();
  // await expect.soft(page.locator('#nav-links').getByRole('link', { name: 'About' })).toBeVisible();
	// await expect.soft(page.locator('#nav-links').getByRole('link', { name: 'Work with Jack' })).toBeVisible();
	await expect.soft(page.locator('.hero-content')).toBeVisible();
});
