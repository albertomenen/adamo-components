import { UserCreate } from '../../../types/resources/user.model'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class AFormUserRegister extends Vue {

  @Prop({
    type: Object,
    default: () => ({})
  })
  formData!: UserCreate
}
