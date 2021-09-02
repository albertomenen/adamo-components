import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class AModalConfirmation extends Vue {

  /**
   * Muestra el modal
   */
  @Prop({
    type: Boolean
  }) showModal!: boolean

  /**
   * Título del modal
   */
  @Prop({
    type: String
  }) title!: string

  /**
   * Descripción del modal
   */
  @Prop({
    type: String
  }) description!: string

  /**
   * Cancela el modal
   */
  cancelModal (): void {
    this.$emit('cancel')
  }

  /**
   * Confirma la acción
   */
  confirmModal (): void {
    this.$emit('ok')
  }
}
