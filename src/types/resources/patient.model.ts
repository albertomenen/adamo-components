import { Treatment } from './treatment.model'
import { User } from './user.model'

export interface Patient {
  id_patient: string
  address: string
  city: string
  town: string
  phone: string
  profession: string
  observations: string
  birthdate: string
  identification: string
  email: string
  name: string
  last_name: string
  active_treatments: number
  user: User

  // TODO: Back
  treatments: Treatment[]
  id_type: string
  country: string
  gender: string
  race: string
  complexity: string
  height: number
  weight: number
  allergies: string
  medication: string
}

export interface PatientCreate {
  id_user?: string
  address: string
  city: string
  town: string
  phone: string
  email: string
  birthdate: string
  name: string
  last_name: string
  identification: string
  profession: string
  observations: string

  // TODO: Back
  id_type: string
  country: string
  gender: string
  race: string
  complexity: string
  height: number
  weight: number
  allergies: string
  medication: string
}

export interface PatientList {
  id_patient: string
  email: string
  name: string
  last_name: string
  active_treatments: number
  id_user: string
}
