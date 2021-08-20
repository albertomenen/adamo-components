import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {
    AFormPatientPersonalInfo: () => import('../patient-personal-info/AFormPatientPersonalInfo.vue'),
    AFormPatientContactInfo: () => import('../patient-contact-info/AFormPatientContactInfo.vue'),
    AFormPatientPhysicInfo: () => import('../patient-physic-info/AFormPatientPhysicInfo.vue')
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
      ? this.$emit('submit')
      : handler()
  }

  previousStep (handler: () => void): void {
    handler()
  }
}
