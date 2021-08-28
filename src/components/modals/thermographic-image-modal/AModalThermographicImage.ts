import { Treatment } from '../../../types/resources/treatment.model';
import { PropType } from 'vue';
import { Component, Vue } from 'vue-property-decorator'
import { Session } from '../../../types/resources/session.model';
import moment from 'moment';

@Component({
  props: {
    showModal: {
      type: Boolean,
      default: false
    },
    treatment: {
      type: Object as () => PropType<Treatment>,
      default: () => null
    }
  }
})
export default class AModalThermographicImage extends Vue {

  carousels: Session[] | [] = []

  created (): void {
    this.carousels = this.$props.treatment.sessions
  }

  formatDate (date: string): string {
    return moment(date).format('DD / MM / YYYY')
  }

  formatHour (date: string): string {
    return moment(date).format('HH:mm')
  }
}
