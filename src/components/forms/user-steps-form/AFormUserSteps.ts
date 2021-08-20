import { Component, Vue } from 'vue-property-decorator'
import AFormUserPersonalInfo from '../user-personal-info/AFormUserPersonalInfo.vue'
import AFormUserRegister from '../user-register-form/AFormUserRegister.vue'

@Component({
  components: {
    AFormUserPersonalInfo,
    AFormUserRegister
  }
})
export default class AFormUserSteps extends Vue {

  activeStep = 0

  nextStep (handler: () => void): void {
    this.activeStep === 1
      ? this.$emit('submit')
      : handler()
  }

  previousStep (handler: () => void): void {
    handler()
  }
}
