import { User } from '../../../types/resources/user.model'
import { PropType } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class AFormUserRegisterInfo extends Vue {

  @Prop({
    type: Object as () => PropType<User>
  })
  user!: User

  @Prop({
    type: Boolean,
    default: false
  })
  editContext!: Boolean
}
