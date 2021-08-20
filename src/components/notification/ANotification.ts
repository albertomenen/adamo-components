
import { NotificationMessage } from '../../types'
import { Component, Vue } from 'vue-property-decorator'
import { getters } from '../../store'

@Component
export default class ANotification extends Vue {
  /**
   * Mensaje de la notificatión
   */
  get message (): NotificationMessage {
    return getters.notification.message()
  }

  /**
   * Ícono de la notificación
   */
  get icon (): string {
    return getters.notification.icon()
  }

  /**
   * Estado actual de la notificación
   */
  get active (): boolean {
    return getters.notification.active()
  }
}
