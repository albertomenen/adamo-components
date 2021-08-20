import { PatientCreate } from '../../../types/resources/patient.model'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class PatientPhysicInfo extends Vue {
  @Prop({
    type: Object,
    default: () => ({})
  }) formData!: PatientCreate
}
