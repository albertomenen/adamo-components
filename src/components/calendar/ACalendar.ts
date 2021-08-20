import { Component, Vue, Watch } from 'vue-property-decorator'
import { Month, Year } from '../../models/dates.model'
import moment from 'moment'
import { Kalendar } from 'kalendar-vue'


@Component({
  components: {
    Kalendar
  }
})
export default class ACalendar extends Vue {

  date = new Date()

  dateSelected = new Date()

  month: Month = {
    name: '',
    value: 0
  }

  months: Month[] = []

  year: number = moment().year()

  years: Year[] = []

  calendar_settings = {
    style: 'material_design',
    scrollToNow: false,
    current_day: new Date().toISOString(),
    read_only: true,
    day_starts_at: 0,
    day_ends_at: 24,
    overlap: false,
    past_event_creation: false,
    start_day: ''
  }

  events = [
    {
      from: '2021-08-12T10:00:00Z',
      to: '2021-08-12T10:30:00Z',
      data: {
        title: 'Event 1',
        description: '',
        id: 'asdasdas1',
        class: 'current-user'
      }
    },
    {
      from: '2021-08-13T11:00:00Z',
      to: '2021-08-13T11:30:00Z',
      data: {
        title: 'Olive & Friends',
        description: '',
        id: 'asdasdas2',
        class: 'other-user'
      }
    }
  ]

  /**
   * Valor para poder refrescar el conponente Kalendar
   */
  componentKey = 0

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

    this.month = this.months[moment().month()]

    for (let index = 0; index < 2; index++) {
      this.years.push({
        value: year++
      })
    }
    this.years
  }

  nextMonth (): void {
    const month = this.month.value == 11 ? 0 : this.month.value + 1
    const year = this.month.value == 11 ? this.year++ : this.year

    this.changeDate(month, year)
  }

  prevMonth (): void {
    const month = this.month.value == 0 ? 11 : this.month.value - 1
    const year = this.month.value == 0 ? this.year-- : this.year

    this.changeDate(month, year)
  }

  handleEventSelected (value: string): void {
    this.$emit('selectedEvent', value)
  }

  changeDate (month: number, year: number): void {
    this.month = this.months[month]
    this.date = new Date(this.date)
    this.date.setMonth(month)
    this.date.setFullYear(year)
    if (this.date.getMonth() === this.dateSelected.getMonth()) {
      this.date.setDate(this.dateSelected.getDate())
    }
    else {
      this.date.setDate(1)
    }
    this.changeDayKalendar(this.date.toISOString())
  }

  changeDayKalendar (value: string): void {
    this.calendar_settings.start_day = value.slice(0, 10)
    this.componentKey++
  }

  @Watch('dateSelected')
  onValueChange (value: string): void {
    this.changeDayKalendar(new Date(value).toISOString())
    this.$emit('dateSelected', this.dateSelected)
  }
}
