import {test} from '@playwright/test'

import DatePicker from "../../pom/DatePicker";

test.describe('DATE PICKER', () => {
  test('working with date picker', async({page}) => {
    let datePicker = new DatePicker(page)

    await page.goto('https://www.lambdatest.com/selenium-playground/jquery-date-picker-demo');

    await datePicker.verifyHeader();

    await datePicker.selectDate();
  })
})
