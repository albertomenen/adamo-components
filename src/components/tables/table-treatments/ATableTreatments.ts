import { Treatment, TreatmentStatus } from '../../../types/resources/treatment.model'
import moment from 'moment'
import { PropType } from 'vue'
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component
export default class ATableTreatments extends Vue {
  /**
   * Array de tratamientos de un paciente
   */
  @Prop({
    type: Array as () => PropType<Treatment[]>,
    default: () => []
  }) private readonly data!: Treatment[]

  /**
   * Fila seleccionada con el Radio Button
   */
  selectedTreatment: Treatment | null = null

  @Watch('selectedTreatment')
  onSelectedTreatmentUpdate (val: Treatment): void {
    this.$emit('update:selected', val)
  }

  /**
   * Obtiene el color del bocadillo de status
   * @param status Status del tratamiento
   * @returns nombre del color a aplicar
   */
  getStatusColor (status: TreatmentStatus): string {
    switch (status) {
      case TreatmentStatus.Active: return 'green'
      case TreatmentStatus.New: return 'light-orange'
      case TreatmentStatus.Finished: return 'dark-gray'
      case TreatmentStatus.Canceled: return 'red'
    }
  }

  /**
   * Obtiene el icono del bocadillo de status
   * @param status Status del tratamiento
   * @returns nombre del ícono FontAwesome
   */
  getStatusIcon (status: TreatmentStatus): string {
    switch (status) {
      case TreatmentStatus.Active: return 'walking'
      case TreatmentStatus.New: return 'calendar-plus'
      case TreatmentStatus.Finished: return 'check-circle'
      case TreatmentStatus.Canceled: return 'times-circle'
    }
  }

  /**
   * Da formato de Dias, mes, Año a la fecha que retorna el sistema
   * @param date fecha del sistema
   */
  getDate (date: string): string {
    return date
      ? moment(date).format('DD-MM-YYYY')
      : this.$t('treatments.withoutScheduling').toString()
  }

  /**
   * Selecciona un tratamiento, marcando su radio box
   * @param treatment Tratamiento a ser seleccionado
   */
  setSelectedTreatment (treatment: Treatment): void {
    this.selectedTreatment = treatment
  }

  /**
   * Verifica si un tratamiento está seleccionado
   * @param treatmentId ID del tratamiento a verificar
   * @returns {boolean} Si está seleccionado o no
   */
  isTreatmentSelected (treatmentId: string): boolean {
    return this.selectedTreatment?.id_treatment === treatmentId
  }

  /**
   * Emite evento de vista de tratamiento
   * @param patient Data del tratamiento
   */
  showTreatment (treatment: Treatment): void {
    this.$emit('treatment:show', treatment.id_treatment)
  }

  /**
   * Emite evento de edición de tratamiento
   * @param treatment Data del tratamiento
   */
  editTreatment (treatment: Treatment): void {
    this.$emit('treatment:edit', treatment.id_treatment)
  }

  /**
   * Emite evento de borrado de tratamiento
   * @param treatment Data del tratamiento
   */
  deleteTreatment (treatment: Treatment): void {
    this.$emit('treatment:delete', treatment.id_treatment)
  }

  canShowMenu (treatment: Treatment): boolean {
    return treatment.state !== TreatmentStatus.Canceled
  }
}
