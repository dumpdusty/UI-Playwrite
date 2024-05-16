import _ from 'lodash'


class Functions{
  randomMonthNumber = (): any => {_.random(1, 5)}

  dateUpdated = (num: number) => (num < 10) ? '0' + num : num;
}




export default new Functions
