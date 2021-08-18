/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import _Vue from 'vue'
import AModal from '../../components/modal/AModal.vue'
import { ModalInterface } from '../../types'
import { mutations } from '../../store'

const ModalPlugin = (Vue: typeof _Vue): void => {
  Vue.component('AModal', AModal)
  Vue.prototype.$modal = (data: ModalInterface): void => {

    const resetData = () => {
      mutations.modal.setComponent(undefined)
      mutations.modal.setProps(undefined)
      mutations.modal.setActive(false)
      mutations.modal.setOnOk(() => null)
      mutations.modal.setOnCancel(() => null)
    }

    mutations.modal.setComponent(data.component)
    mutations.modal.setProps(data.props)

    mutations.modal.setOnOk((event) => {
      data.onOk?.(event)
      resetData()
    })

    mutations.modal.setOnCancel(() => {
      data.onCancel?.()
      resetData()
    })

    mutations.modal.setActive(true)
  }
}

export default ModalPlugin
