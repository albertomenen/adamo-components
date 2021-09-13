import { PropType } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { User } from '../../../types/resources/user.model'

@Component
export default class AFormUserProfileInfo extends Vue {

  @Prop({
    type: Object as () => PropType<User>
  })
  user!: User

  @Prop({
    type: Boolean,
    default: false
  })
  admin!: Boolean

  @Prop({
    type: Boolean,
    default: false
  })
  editContext!: Boolean
}
