import { Component, Vue } from 'vue-property-decorator'

@Component({
  props: {
    icon: String,
    text: String
  }
})
export default class AMenuListItem extends Vue {}
