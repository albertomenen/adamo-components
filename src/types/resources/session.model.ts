import { Station } from './station.model'

export interface Session {
  id_session: string
  medic_name: string
  session_number: number
  notes: string
  temperature: number
  ts_creation_date: Date
  heating_duration: number
  points: string
  station: Station,
  pressure: number,
  image_thermic: string,
  image_thermic_data: string
}

export interface SessionList {
  id_session: string
  medic_name: string
  session_number: number
}
