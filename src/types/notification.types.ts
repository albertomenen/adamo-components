import { TranslateResult } from 'vue-i18n'

export type NotificationMessage = TranslateResult | string

export interface NotificationInterface {
  message: NotificationMessage,
  icon: string
  active: boolean
}
