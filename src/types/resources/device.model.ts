import { Group } from './group.model'
import { StationListDevice } from './station.model'
import { StationList } from './station.model'

export interface Device {
  id_device: string
  mac: string
  serial_number: string
  hw_version: string
  sw_version: string
  device_name: string
  station: StationList
  group: Group
}

export interface DeviceList {
  id_device: string
  device_name: string,
  group?: Group
  station?: StationListDevice
}

export interface DeviceCreate {
  group_id: string | null
  mac: string
  station_id: string| null
  serial_number: string
  hw_version: string
  sw_version: string
  device_name: string
}
