import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  props: {
    showModal: {
      type: Boolean,
      default: false
    }
  }
})
export default class AModalObservations extends Vue {
  @Prop({
    type: String,
    default: ''
  }) observations!: string
}
