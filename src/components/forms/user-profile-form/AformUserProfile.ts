import { Component, Vue } from 'vue-property-decorator'
import { PropType } from 'vue'
import { User } from '../../../types/resources/user.model'

@Component({
  props: {
    user: {
      type: Object as () => PropType<User>
    },

    scroll: {
      type: Boolean,
      default: false
    }
  }
})
export default class AformUserProfile extends Vue {}
