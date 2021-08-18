/* eslint-disable @typescript-eslint/no-unused-vars */
import Vue from 'vue'
import { ModalInterface } from './modal.types'
import { NotificationInterface, NotificationMessage } from './notification.types'

export * from './modal.types'
export * from './notification.types'
declare module 'vue/types/vue' {
  interface Vue {
    $notify: {
      show: (notification: NotificationInterface) => void;
      success: (message: NotificationMessage) => void;
      error: (message: NotificationMessage) => void;
      warning: (message: NotificationMessage) => void;
      loading: (message: NotificationMessage) => void;
    }

    $modal: (data: ModalInterface) => void
  }
}
