import { Component, Vue } from 'vue-property-decorator'

@Component({
  props: {
    showModal: {
      type: Boolean,
      default: false
    }
  }
})
export default class AModalRecoverPass extends Vue {}
