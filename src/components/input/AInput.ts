import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { ValidationProvider } from 'vee-validate'

@Component({
  components: {
    ValidationProvider
  }
})
export default class AInput extends Vue {
  @Prop({ type: String }) vid!: string
  @Prop({ type: [Object, String], default: '' }) rules
  @Prop({ type: String }) value

    innerValue = ''

    @Watch('innerValue')
    onInnerValueChange (val: string): void {
      this.$emit('input', val)
    }

    @Watch('innerValue')
    onValueChange (val: string): void {
      this.innerValue = val
    }

    created (): void {
      if (this.value) {
        this.innerValue = this.value
      }
    }
}