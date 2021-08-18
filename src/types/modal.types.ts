/* eslint-disable @typescript-eslint/no-explicit-any */

import Vue from 'vue'

export interface ModalDataInterface {
  active: boolean;
  component?: Vue.Component;
  onOk?: (event: any) => unknown;
  onCancel?: () => unknown;
  props?: Record<string, unknown>
}

export interface ModalInterface {
  component?: Vue.Component;
  onOk?: (event: any) => unknown;
  onCancel?: () => unknown;
  props?: Record<string, unknown>
}

export type ModalComponent = Vue.Component | undefined
export type ModalProps = Record<string, unknown> | undefined

