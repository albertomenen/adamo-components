import { Component, Vue } from 'vue-property-decorator'

@Component({
  props: {
    title: {
      type: String,
      required: true
    },
    image: String,
    customClass: {
      type: String,
      required: false
    }
  }
})
export default class AModalContentBox extends Vue {}
