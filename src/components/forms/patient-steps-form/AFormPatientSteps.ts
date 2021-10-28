/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Prop, Vue } from 'vue-property-decorator'
import { ValidationObserver } from 'vee-validate'

@Component({
  components: {
    AFormPatientPersonalInfo: () => import('../patient-personal-info/AFormPatientPersonalInfo.vue'),
    AFormPatientContactInfo: () => import('../patient-contact-info/AFormPatientContactInfo.vue'),
    AFormPatientPhysicInfo: () => import('../patient-physic-info/AFormPatientPhysicInfo.vue'),
    ValidationObserver
  }
})
export default class AFormPatientSteps extends Vue {

  @Prop({
    type: Object,
    default: () => ({})
  }) formData!: Record<string, unknown>

  activeStep = 0

  nextStep (handler: () => void): void {
    this.activeStep === 2
      ? this.validateAndSubmit()
      : handler()
  }

  previousStep (handler: () => void): void {
    handler()
  }

  async validateAndSubmit (): Promise<void> {
    (this.$refs.observer as any).validate()

    if (!(this.$refs.observer as any).flags.valid || !this.formData.birthdate ||this.formData.birthdate == '') {
      this.activeStep = 0
    }
    else {
      this.$emit('submit')
    }
  }
}
