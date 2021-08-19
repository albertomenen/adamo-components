/* eslint-disable @typescript-eslint/no-unused-vars */

import Vue from 'vue'
import { ModalInterface } from './src/types/modal.types'
import { NotificationInterface, NotificationMessage } from './src/types/notification.types'

interface Notify {
  show: (notification: NotificationInterface) => void;
  success: (message: NotificationMessage) => void;
  error: (message: NotificationMessage) => void;
  warning: (message: NotificationMessage) => void;
  loading: (message: NotificationMessage) => void;
}

type Modal = (data: ModalInterface) => void

declare module 'adamo-components' {
  import { PluginFunction } from 'vue'
  export const install: PluginFunction<unknown>
}

declare module 'vue/types/vue' {
  interface Vue {
    $notify: Notify
    $modal: Modal
  }
}
