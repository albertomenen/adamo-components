/* eslint-disable @typescript-eslint/no-unused-vars */

import Vue from 'vue'
import { ModalInterface } from './src/types/modal.types'
import { NotificationInterface, NotificationMessage } from './src/types/notification.types'

interface Notify {
  show: (notification: NotificationInterface) => void;
  success: (message: NotificationMessage, timeout?: number) => void;
  error: (message: NotificationMessage, timeout?: number) => void;
  warning: (message: NotificationMessage, timeout?: number) => void;
  loading: (message: NotificationMessage, timeout?: number) => void;
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
