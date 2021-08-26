/**
 * Tipos de tratamiento que se le puede hacer a un paciente
 */
export enum TreatmentTypes {
  Auto = 'auto',
  Manual = 'manual'
}

export enum TreatmentStatus {
  Active = 'started',
  New = 'new',
  Finished = 'finished',
  Canceled = 'canceled'
}

/**
 * Tratamientos de un paciente
 */
export interface Treatment {
  id_treatment: string
  medic_name: string
  medic: string
  name: string
  sessions_number: number
  current_session_number: number
  notes: string
  temperature: number
  ts_creation_date: Date
  heating_duration: number
  points: string
  ts_next_session: number
  ts_end: number
  weight: number
  height: number
  ppx: number
  ppy: number
  fx: number
  fy: number
  model: string
  coeff: string
  depth_scale: number
  mode: string
  extrinsics: number
  next_session_station_id: string

  // TODO: Faltan en el back
  type: TreatmentTypes
  state: TreatmentStatus
  last_session_date: Date | string
  injury: boolean
  injury_kind: string
  injury_cause: string
}

export interface TreatmentList {
  id_treatment: string
  medic_name: string
  name: string
  sessions_number: number
  current_session_number: number
}
