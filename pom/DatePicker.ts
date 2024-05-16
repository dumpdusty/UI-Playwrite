import {expect, Page} from '@playwright/test';
import _ from 'lodash'
import { Links, monthList } from './utils/constants'
import functions from './utils/functions'

//create class
class DatePicker {
  //declare class properties
  page: Page
  date: any

  // declare constructor for new instances
  constructor(page: Page) {
    this.page = page
    this.date = _.random(1,30)
  }

  //declare header verification method
  async verifyHeader() {
    await expect(this.page.locator(Links.header)).toContainText('Date Picker')
  }

  //declare date selection method
  async selectDate() {

    // click on date input field
    await this.page.locator(Links.fromInput).click()

    // select year by clicking 'prev' arrow random times
    for (let i = 0; i < functions.randomMonthNumber(); i++) {
      await this.page.locator(Links.prevYear).click()
    }

    // declare variables and assign value from selectors
    let year = await this.page.locator(Links.dateYear).textContent();
    let month = await this.page.locator(Links.dateMonth).locator(Links.selectedMonth).textContent();

    // select day
    await this.page.locator(Links.dateFromComponent).getByRole('link', {name: this.date, exact: true}).click()

    // assert date in field matches selected data
    expect(await this.page.locator(Links.fromInput).inputValue()).toBe(`${monthList[month]}/${functions.dateUpdated(this.date)}/${year}`)
  }

}

export default DatePicker;

