import { PatientFormInterface } from '../../../models/patient.model'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class AFormPatientContactInfo extends Vue {
  @Prop({
    type: Object,
    default: () => ({})
  }) formData!: PatientFormInterface
}
