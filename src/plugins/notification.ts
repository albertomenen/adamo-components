/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import _Vue from 'vue'
import ANotification from '../../components/notification/ANotification.vue'
import { mutations } from '../store'
import { NotificationMessage } from '../types'

const hideNotification = () => (mutations.notification.setActive(false))

let notificationTimeout = setTimeout(hideNotification, 5000)

const showNotification = (): void => {
  clearTimeout(notificationTimeout)
  mutations.notification.setActive(true)
  notificationTimeout = setTimeout(hideNotification, 5000)
}

interface Notification {
  message: NotificationMessage,
  icon: string
}

const sendNotification = ({ message, icon }: Notification): void => {
  mutations.notification.setMessage(message)
  mutations.notification.setIcon(icon)
  showNotification()
}

const NotificationPlugin = (Vue: typeof _Vue): void => {
  Vue.component('ANotification', ANotification)
  Vue.prototype.$notify = {

    show: sendNotification,

    success: (message: NotificationMessage) => {
      sendNotification({
        message,
        icon: 'check-circle'
      })
    },

    error: (message: NotificationMessage) => {
      sendNotification({
        message,
        icon: 'exclamation-triangle'
      })
    },

    warning: (message: NotificationMessage) => {
      sendNotification({
        message,
        icon: 'exclamation-triangle'
      })
    },

    loading: (message: NotificationMessage) => {
      sendNotification({
        message,
        icon: 'spinner'
      })
    }
  }
}

export default NotificationPlugin
