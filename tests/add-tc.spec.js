const { test, expect } = require('@playwright/test')

const serverUrl = process.env.SERVER_URL
const adminUsername = process.env.ADMIN_USERNAME
const adminPassword = process.env.ADMIN_PASSWORD

const probId = '4'
const tcCount = 2

test('add tc', async ({ page }) => {
  await page.goto(`${serverUrl}/public`)
  await page.getByRole('link', { name: ' Login' }).click()
  await page.getByPlaceholder('Username').fill(adminUsername)
  await page.getByPlaceholder('Password').fill(adminPassword)
  await page.getByRole('button', { name: 'Sign in' }).click()

  await page.goto(`${serverUrl}/jury/problems/${probId}/testcases`)
  for (let i = 1; i <= tcCount; i++) {
    await page.getByLabel('Input testdata').setInputFiles(`probs/${probId}/tc${i}.in`)
    await page.getByLabel('Output testdata').setInputFiles(`probs/${probId}/tc${i}.ans`)
    await page.getByRole('button', { name: 'Submit all changes' }).click()
  }
})
