/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Component, Vue } from 'vue-property-decorator'
import { getters, mutations } from '../../store'

@Component
export default class AModal extends Vue {
  /**
   * Estado actual del modal
   */
  get active (): boolean {
    return getters.modal.active()
  }

  set active (value: boolean) {
    mutations.modal.setActive(value)
  }

  get component (): Vue.Component | undefined {
    return getters.modal.component()
  }

  get modalProps (): Record<string, unknown> | undefined {
    return getters.modal.props()
  }

  get onCancel () {
    return getters.modal.onCancel()
  }

  get onOk () {
    return getters.modal.onOk()
  }

  closeModal (): void {
    mutations.modal.setActive(false)
  }
}
