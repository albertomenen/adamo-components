/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import NotificationPlugin from './src/plugins/notification'
import ModalPlugin from './src/plugins/modal'
import Buefy from 'buefy'

export default {
  install (Vue) {
    Vue.use(Buefy)

    NotificationPlugin(Vue)
    ModalPlugin(Vue)
  }
}
