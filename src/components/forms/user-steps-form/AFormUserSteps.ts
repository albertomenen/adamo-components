import { Group } from '../../../types/resources/group.model'
import { PropType } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator'
import AFormUserPersonalInfo from '../user-personal-info/AFormUserPersonalInfo.vue'
import AFormUserRegister from '../user-register-form/AFormUserRegister.vue'
import { Role } from '../../../types/resources/role.model'
import { ValidationObserver } from 'vee-validate'

@Component({
  components: {
    AFormUserPersonalInfo,
    AFormUserRegister,
    ValidationObserver
  }
})
export default class AFormUserSteps extends Vue {

  @Prop({
    type: Object,
    default: () => ({})
  })
  formData!: Record<string, unknown>

  @Prop({
    type: Array as () => PropType<Group[]>,
    default: () => []
  })
  groups!: Group[]

  @Prop({
    type: Array as () => PropType<Role[]>,
    default: () => []
  })
  roles!: Role[]

  roleSelected: Role | null = null

  activeStep = 0

  nextStep (handler: () => void, handleSubmit: (fn: () => void) => void): void {
    this.activeStep === 1
      ? handleSubmit(() => this.$emit('submit', this.roleSelected))
      : handler()
  }

  previousStep (handler: () => void): void {
    handler()
  }
}
