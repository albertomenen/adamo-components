import { Component, Vue } from 'vue-property-decorator'
import { Month, Year } from '../../../models/dates.model'
import moment from 'moment'

@Component({
  props: {
    showModal: {
      type: Boolean,
      default: false
    }
  }
})
export default class AModalSchedule extends Vue {

  date = new Date()

  month: number = moment().month()

  months: Month[] = []

  year: number = moment().year()

  years: Year[] = []

  minDate = new Date()

  unselectableDates (day: Date): boolean {
    switch (day.getDate()) {
      case 18:
      case 26:
      case 27:
      case 30:
        return false

      default: return true
    }
  }

  created (): void {
    moment.locale(this.$i18n.locale)
    const months = moment.months()
    let year = moment().year()
    this.months = months.map((month, index) => {
      return {
        name: month.charAt(0).toUpperCase() + month.slice(1),
        value: index
      }
    })

    for (let index = 0; index < 2; index++) {
      this.years.push({
        value: year++
      })
    }
    this.years
  }

  selectMonth (value: number): void {
    console.log('selec', value)
    if (value) {
      this.date = new Date(this.date)
      this.date.setMonth(value)
    }
  }

  selectYear (value: number): void {
    if (value) {
      const date = moment(this.date).year(value)
      this.date = new Date(date.toString())
    }
  }

  nextMonth (): void {
    const month = this.month == 11 ? 0 : this.month + 1
    this.month = month
    this.date = new Date(this.date)
    this.date.setMonth(month)
  }

  prevMonth (): void {
    const month = this.month == 0 ? 11 : this.month - 1
    this.month = month
    this.date = new Date(this.date)
    this.date.setMonth(month)
  }
}
