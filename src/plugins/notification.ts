/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import _Vue from 'vue'
import ANotification from '../components/notification/ANotification.vue'
import { mutations } from '../store'
import { NotificationMessage } from '../types'

const DEFAULT_TIMEOUT = 5000

const hideNotification = () => (mutations.notification.setActive(false))

let notificationTimeout = setTimeout(hideNotification, DEFAULT_TIMEOUT)

const showNotification = (timeout?: number): void => {
  clearTimeout(notificationTimeout)
  mutations.notification.setActive(true)
  if (timeout && timeout > 0) {
    notificationTimeout = setTimeout(hideNotification, DEFAULT_TIMEOUT)
  }
}

interface Notification {
  message: NotificationMessage,
  icon: string,
  timeout?: number
}

const sendNotification = ({ message, icon, timeout = DEFAULT_TIMEOUT }: Notification): void => {
  mutations.notification.setMessage(message)
  mutations.notification.setIcon(icon)
  showNotification(timeout)
}

const NotificationPlugin = (Vue: typeof _Vue): void => {
  Vue.component('ANotification', ANotification)

  Vue.prototype.$notify = {

    show: sendNotification,
    hide: hideNotification,

    success: (message: NotificationMessage, timeout?: number) => {
      sendNotification({
        message,
        icon: 'check-circle',
        timeout
      })
    },

    error: (message: NotificationMessage, timeout?: number) => {
      sendNotification({
        message,
        icon: 'exclamation-triangle',
        timeout
      })
    },

    warning: (message: NotificationMessage, timeout?: number) => {
      sendNotification({
        message,
        icon: 'exclamation-triangle',
        timeout
      })
    },

    loading: (message: NotificationMessage, timeout?: number) => {
      sendNotification({
        message,
        icon: 'spinner',
        timeout
      })
    }
  }
}

export default NotificationPlugin
