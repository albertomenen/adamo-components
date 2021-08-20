import { Component, Vue } from 'vue-property-decorator'
import loadingAnimation from '../../../assets/loading.json'

@Component({
  components: {
    AModalContentBox: () => import('../../cards/modal-content-box/AModalContentBox.vue')
  },
  props: {
    showModal: {
      type: Boolean,
      default: false
    }
  }
})
export default class AModalCaptureImages extends Vue {
  loadingAnimation = loadingAnimation
  images = false
  percentage = 47

  created (): void {
    this.captureImage()
  }

  captureImage (): void {
    setTimeout(() => {
      this.images = true
    }, 2000)
  }

  repeatCapture (): void {
    this.images = false
    this.captureImage()
  }

  submit (): void {
    this.$emit('ok', this.images)
  }
}
