import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class APagination extends Vue {
  @Prop({
    type: Number,
    default: 7
  }) perPage!: number
}
