import { Group } from '../../../types/resources/group.model'
import { PropType } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator'
import AFormUserPersonalInfo from '../user-personal-info/AFormUserPersonalInfo.vue'
import AFormUserRegister from '../user-register-form/AFormUserRegister.vue'
import { Role } from '../../../types/resources/role.model'

@Component({
  components: {
    AFormUserPersonalInfo,
    AFormUserRegister
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
