import { Component, Vue, Watch } from 'vue-property-decorator'
import { BreadcrumbModel } from '../../types/resources/breadcrumb.model'
import { TranslateResult } from 'vue-i18n'

@Component({
  props: {
    textColor: {
      type: String,
      required: true
    }
  }
})
export default class ABreadcrumb extends Vue {

  paths: BreadcrumbModel[] = []

  created (): void {
    this.buildPaths()
  }

  buildPaths (): void {
    this.paths = this.$route.meta?.breadcrumb.map(bread => {
      if (!bread.link) {
        return {
          label: this.formatLabel(bread.label)
        }
      }
      else {
        return {
          label: this.formatLabel(bread.label),
          link: bread.link
        }
      }
    })
  }

  formatLabel (label: string | [string, number]): TranslateResult {
    let labelFormat = ''
    switch (typeof label) {
      case 'object':
        labelFormat = this.$i18n.tc(label[0], label[1])
        break

      case 'string':
        labelFormat = this.$i18n.t(label).toString()
        break
    }

    return labelFormat
  }

  @Watch('$route')
  onChangeValue (): void {
    this.buildPaths()
  }
}
