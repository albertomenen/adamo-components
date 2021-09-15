import { Component, Vue } from 'vue-property-decorator'
import { PropType } from 'vue'
import { User } from '../../../types/resources/user.model'

@Component({
  props: {
    user: {
      type: Object as () => PropType<User>
    }
  }
})
export default class AformUserProfile extends Vue {}
