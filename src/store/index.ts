/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { ModalComponent, ModalDataInterface, ModalProps, NotificationInterface, NotificationMessage } from '../types'
import Vue from 'vue'

interface StateInterface {
  modal: ModalDataInterface,
  notification: NotificationInterface
}

const state = Vue.observable<StateInterface>({
  modal: {
    active: false,
    component: undefined,
    onOk: () => null,
    onCancel: () => null,
    props: {}
  },

  notification: {
    message: '',
    active: false,
    icon: ''
  }
})

export const getters = {
  modal: {
    active: (): boolean => state.modal.active,
    component: (): ModalComponent => state.modal.component,
    onOk: (): unknown => state.modal.onOk,
    onCancel: (): unknown => state.modal.onCancel,
    props: (): ModalProps => state.modal.props
  },

  notification: {
    message: (): NotificationMessage => state.notification.message,
    icon: (): string => state.notification.icon,
    active: (): boolean => state.notification.active
  }
}

export const mutations = {
  modal: {
    setActive: (active: boolean) => state.modal.active = active,
    setComponent: (component: ModalComponent) => state.modal.component = component,
    setOnOk: (onOk: (event: any) => unknown) => state.modal.onOk = onOk,
    setOnCancel: (onCancel: () => unknown) => state.modal.onCancel = onCancel,
    setProps: (props: ModalProps) => state.modal.props = props
  },

  notification: {
    setMessage: (message: NotificationMessage) => state.notification.message = message,
    setIcon: (icon: string) => state.notification.icon = icon,
    setActive: (active: boolean) => state.notification.active = active
  }
}
