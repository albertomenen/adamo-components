import { Component, Vue } from 'vue-property-decorator'

@Component({
  props: {
    showModal: {
      type: Boolean,
      default: false
    }
  }
})
export default class AModalRecoverPass extends Vue {
  email = ''

  recoverPass (): void {
    this.$emit('submit', this.email)
  }
}
