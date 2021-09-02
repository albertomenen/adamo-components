import { PropType } from 'vue'
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Patient } from '../../../types/resources/patient.model'

@Component
export default class ATablePatients extends Vue {
  /**
   * Array de pacientes
   */
  @Prop({
    type: Array as () => PropType<Patient[]>,
    default: () => []
  }) private readonly data!: Patient[]

  /**
   * Emite evento de vista de paciente
   * @param patient Data del paciente
   */
  showPatient (patient: Patient): void {
    this.$emit('patient:show', patient.id_patient)
  }

  /**
   * Emite evento de edición de paciente
   * @param patient Data del paciente
   */
  editPatient (patient: Patient): void {
    this.$emit('patient:edit', patient.id_patient)
  }

  /**
   * Emite evento de borrado de paciente
   * @param patient Data del paciente
   */
  deletePatient (patient: Patient): void {
    this.$emit('patient:delete', patient.id_patient)
  }
}
