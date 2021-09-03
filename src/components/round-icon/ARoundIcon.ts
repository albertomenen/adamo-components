import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class ARoundIcon extends Vue {
    /**
   * Nombre del ícono
   */
  @Prop({ type: String, default: '' })
  private readonly icon!: string
}
