import { UserCreate } from '../../../types/resources/user.model'
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { Group } from '../../../types/resources/group.model'
import { PropType } from 'vue'
import { Location } from '../../../types/resources/location.model'
import { Role } from '../../../types/resources/role.model'

@Component
export default class AFormUserPersonalInfo extends Vue {

  locations: Location[] = []

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

  @Watch('formData.id_group')
  onChangeIdGroup (value: string): void {
    const group = this.groups.find(g => g.id_group === value)
    this.locations = group?.locations ?? []
  }
}
