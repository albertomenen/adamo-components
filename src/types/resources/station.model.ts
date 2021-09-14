import { LocationList } from './location.model';
import { DeviceList } from './device.model';
import { Location } from '../../types/resources/location.model'

export enum StationShowEventClass {
  Mine = 'current-user',
  Other = 'other-user'
}

export interface Station {
  id_station: string
  id_location: string
  station_name: string
  placed: string
  installation_date: Date
  version: string,
  device: DeviceList[]
}

export interface StationList {
  id_station: string
  station_name: string
  location: Location
}

export interface StationSchedule {
  day: string
  from_hour: string
  id_date: string
  id_patient: string
  id_station: string
  to_hour: string
  id_medic: string
}

export interface StationShowEvent {
  to: string
  from: string
  data: {
    title: string
    id: string
    class: StationShowEventClass
  }
}

export interface StationListDevice {
  id_station: string
  station_name: string
  location: LocationList
}
