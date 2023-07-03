const { test, expect } = require('@playwright/test')

const serverUrl = process.env.SERVER_URL
const adminUsername = process.env.ADMIN_USERNAME
const adminPassword = process.env.ADMIN_PASSWORD

const probId = '4'

test('del tc', async ({ page }) => {
  await page.goto(`${serverUrl}/public`)
  await page.getByRole('link', { name: ' Login' }).click()
  await page.getByPlaceholder('Username').fill(adminUsername)
  await page.getByPlaceholder('Password').fill(adminPassword)
  await page.getByRole('button', { name: 'Sign in' }).click()

  await page.goto(`${serverUrl}/jury/problems/${probId}/testcases`)
  const tcCount = await page.locator('//a[contains(@title,"delete")]').count()
  for (let i = 1; i <= tcCount; i++) {
    await page.locator('//a[contains(@title,"delete")]').first().click()
  }
})
