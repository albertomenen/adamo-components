import { UserCreate } from '../../../types/resources/user.model'
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { Group } from '../../../types/resources/group.model'
import { PropType } from 'vue'
import { Location } from '../../../types/resources/location.model'
import { Role } from '../../../types/resources/role.model'

@Component
export default class AFormUserPersonalInfo extends Vue {

  locations: Location[] = []

  role: Role | null = null

  blockedByRol = true

  @Prop({
    type: Object,
    default: () => ({})
  })
  formData!: UserCreate

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

  handleBlockedByRol (role_code: string ): void {
    switch (role_code) {
      case 'sys_admin':
      case 'dev':
      case 'master':
        this.blockedByRol = true
        break

      default:
        this.blockedByRol = false
        break
    }
  }

  @Watch('formData.id_group')
  onChangeIdGroup (value: string): void {
    const group = this.groups.find(g => g.id_group === value)
    this.locations = group?.locations ?? []
  }

  @Watch('role')
  onChangeRole (role: Role): void {
    this.formData.role_id = role.id_role
    this.$emit('roleSelected', role)
    this.handleBlockedByRol(role.role_code)
  }
}
