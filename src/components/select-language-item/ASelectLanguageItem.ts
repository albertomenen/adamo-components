import { Component, Vue } from 'vue-property-decorator'

@Component({
  props: {
    label: String,
    image: String
  }
})
export default class ASelectLanguageItem extends Vue {}
