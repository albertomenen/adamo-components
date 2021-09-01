import { Component, Vue } from 'vue-property-decorator'
import AMenuListItem from '../menu-list-item/AMenuListItem.vue'
import ASelectLanguage from '../select-language/ASelectLanguage.vue'
import { namespace } from 'vuex-class'

const auth = namespace('auth')

@Component({
  components: {
    AMenuListItem,
    ASelectLanguage
  },
  props: {
    showAgenda: {
      type: Boolean,
      default: true
    }
  }
})
export default class AMenuUser extends Vue {

  /**
   * Metodo de storage para cerrar sesion
   */
  @auth.Action action_logout!: () => Promise<void>

  @auth.Getter getUser

  get getUserName (): string {
    return this.getUser?.name ?? ''
  }

  async handleLogout (): Promise<void> {
    try {
      await this.action_logout()

      this.$router.push({ name: 'login' })
    } catch (error) {
    }
  }
}
