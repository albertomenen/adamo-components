import { Component, Vue } from 'vue-property-decorator'
import { PatientCreate } from '../../../types/resources/patient.model'

@Component({
  props: {
    showModal: {
      type: Boolean,
      default: false
    }
  }
})
export default class AModalPatientForm extends Vue {

  /**
   * Datos del formulario de paciente
   */
  formData: PatientCreate = {
    name: '',
    last_name: '',
    id_type: '',
    identification: '',
    birthdate: null,
    profession: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    address: '',
    gender: '',
    race: '',
    complexity: '',
    height: '',
    weight: '',
    allergies: '',
    medication: '',
    town: '',
    observations: '',
    specialist: '',
    user_name: '',
    password: ''
  }

  handleSubmit (): void {
    this.$emit('cancel')
    this.$emit('ok', this.formData)
  }
}
