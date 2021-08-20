import { StationList } from './station.model'

export interface Device {
  id_device: string
  mac: string
  serial_number: string
  hw_version: string
  sw_version: string
  device_name: string
  station: StationList[]
}

export interface DeviceList {
  id_device: string
  device_name: string
}
