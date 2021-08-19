/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import NotificationPlugin from './src/plugins/notification'
import ModalPlugin from './src/plugins/modal'

export default {
  install (Vue) {
    NotificationPlugin(Vue)
    ModalPlugin(Vue)
  }
}
