import { test } from '@playwright/test'
// @ts-ignore
import colors = require('colors')

test.describe('FORM PAGE', () => {
  test.beforeAll(() => {
    console.log('beforeAll'.red)
  })
  test.beforeEach(() => {
    console.log('beforeEach'.blue)
  })
  test.afterEach(() => {
    console.log('afterEach'.yellow)
  })
  test.afterAll(() => {
    console.log('afterAll'.green)
  })

  test('Test-1', () => {
    console.log('Test-1'.bgBlack)
  })

  test('Test-2', () => {
    console.log('Test-2'.bgBlack)
  })
})

test.describe.only('FORM PAGE TYPE', () => {
  test('Fill all fields', async ({page}) => {
       await page.goto('https://www.lambdatest.com/selenium-playground/input-form-demo')

    await page.locator('#name').fill('Dusty')

    await page.locator('[type="email"][placeholder="Email"]').pressSequentially('jacksparrow@pirate.com', {delay: 500})

    await page.locator('input[placeholder="Password"]').fill('Qwerty1234')

    await page.locator('[for="companyname"] ~ input[name="company"]').fill('BlackPearl')

    await page.selectOption('select[name="country"]', {label: 'Azerbaijan'})

    await page.locator('label:has-text("City*") ~ input#inputCity').fill('Baku')

    await page.getByPlaceholder('Address 1').fill('under the bridge')

    await page.getByRole('textbox', {name: 'Address 2'}).fill('same shit')

    await page.getByRole('textbox', {name: 'Zip code'}).fill('000 007')
  })
})
