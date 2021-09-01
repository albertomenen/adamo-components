import { Location } from 'vue-router'
import { TranslateResult } from 'vue-i18n'

/**
 * Estructura para armar el breadcrumb
 */
export interface BreadcrumbModel {
  /**
   * Texto identificacion
   */
  label: TranslateResult

  /**
   * Objeto router vue
   */
  link?: Location
}
