import {test} from '@playwright/test'
// @ts-ignore
import colors = require('colors')

test.beforeEach(async({page}) => {
  await page.goto('localhost:4200/pages/forms/layouts')
})

test.describe.only('PAGE LAYOUTS', () => {
  test('inline form', async ({page}) => {
    await page.locator('[placeholder="Jane Doe"]').fill('Jack Sparrow')
    await page.locator('[type="text"][placeholder="Email"]').fill('jacksparrow@pirate.com')
    // await page.getByRole('checkbox').nth(0).check()
  })

  test('using the grid', async ({page}) => {
    await page.locator('#inputEmail1').fill('weird@playwright.com')
    await page.locator('#inputPassword2').fill('simple123')
    await page.getByText('Option 2').click();


  })

  test('basic form', async ({page}) => {
    await page.locator('#exampleInputEmail1').fill('another@email.com')
    await page.locator('#inputPassword2').fill('simple123')
    // await page.getByRole('checkbox').nth(1).click();
  })

  test('Form without labels', async ({page}) => {
  })
})
