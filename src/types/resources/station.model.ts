export interface Station {
  id_station: string
  id_location: string
  station_name: string
  placed: string
  installation_date: Date
  version: string
}

export interface StationList {
  id_station: string
  station_name: string
}
