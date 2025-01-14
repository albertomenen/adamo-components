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
    },

    station: {
      type: String,
      default: ''
    }
  }
})
export default class AformUserProfile extends Vue {
  isEditing = false

  setEditContext (): void {
    if (this.isEditing) {
      this.$emit('save')
      this.isEditing = false
    }
    else {
      this.isEditing = true
    }
  }
}
