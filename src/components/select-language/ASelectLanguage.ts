import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    ASelectLanguageItem: () => import('../select-language-item/ASelectLanguageItem.vue')
  }
})
export default class ASelectLanguage extends Vue {

  handleChangeLocale (locale: string): void {
    this.$i18n.locale = locale
  }
}
