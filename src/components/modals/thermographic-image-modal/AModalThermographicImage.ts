import { Treatment } from '../../../types/resources/treatment.model'
import { PropType } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Session } from '../../../types/resources/session.model'
import moment from 'moment'

@Component
export default class AModalThermographicImage extends Vue {
  @Prop({
    type: Boolean,
    default: false
  }) showModal!: boolean

  @Prop({
    type: Object as () => PropType<Treatment>,
    default: () => null
  }) treatment!: Treatment

  @Prop({
    type: Number,
    default: () => 1
  }) currentSession!: number

  formatDate (date: string): string {
    return moment(date).format('DD / MM / YYYY')
  }

  formatHour (date: string): string {
    return moment(date).format('HH:mm')
  }

  get thermicImage (): string {
    return `data:image/png;base64,${this.currentSessionObject.image_thermic}`
  }

  get currentSessionObject (): Session {
    return this.treatment.sessions[this.currentSession - 1]
  }
}
