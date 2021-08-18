/* eslint-disable @typescript-eslint/no-unused-vars */
import Vue from 'vue'
import { ModalInterface } from './modal-data'

declare module 'vue/types/vue' {
  interface Vue {
    $modal: (data: ModalInterface) => void
  }
}
