/* eslint-disable @typescript-eslint/no-unused-vars */
import Vue from 'vue'
import { NotificationMessage, NotificationInterface } from './notification-data'

declare module 'vue/types/vue' {
  interface Vue {
    $notify: {
      show: (notification: NotificationInterface) => void;
      success: (message: NotificationMessage) => void;
      error: (message: NotificationMessage) => void;
      warning: (message: NotificationMessage) => void;
      loading: (message: NotificationMessage) => void;
    }
  }
}
