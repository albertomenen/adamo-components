import { Component, Vue } from 'vue-property-decorator'
import Lottie from 'vue-lottie'

@Component({
  components: {
    Lottie
  },
  props: {
    animationData: {
      type: Object,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    width: {
      type: Number,
      required: true
    }
  }
})
export default class ALottie extends Vue {

  animationSpeed = 1

  get options (): unknown {
    return {
      animationData: this.$props.animationData,
      autoplay: true
    }
  }
}
