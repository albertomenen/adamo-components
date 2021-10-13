import { Role } from './role.model'

export interface User {
  id_user: string
  id_group: string
  user_name: string
  phone: string
  email: string
  name: string
  last_name: string
  role?: Role,
  id_location: string
}

export interface AuthRole {
  app_detail_patient: boolean
  app_login: boolean
  app_select_patient: boolean
  debug_app_hmi: boolean
  detail_patient: boolean
  get_patient: boolean
  id_role: string
  list_patient: boolean
  login_in_station: boolean
  manage_dev: boolean
  manage_group: boolean
  manage_mp: boolean
  manage_nmp: boolean
  manage_patient: boolean
  manage_practice_manager: boolean
  manage_station: boolean
  manage_sysadmin: boolean
  manage_treatment: boolean
  role_code: string
  role_name: string
  run_sesion: boolean
  user_logout: boolean
}

export interface UserCreate {
  id_group: string | null
  user_name: string
  phone: string
  email: string
  name: string
  last_name: string
  role_id: string | null
  id_location: string | null
  country: string
}

export interface UserList {
  id_user: string
  user_name: string
  email: string
  name: string
  last_name: string
  id_group: string
  role: Role
  id_location: string
}

export interface AuthUser {
  country: string
  email: string
  id_group: string
  id_location: string
  id_user: string
  last_name: string
  name: string
  phone: string
  user_name: string
  role: AuthRole
}

export interface AuthResponse {
  Authorization: string
  message: string
  status: string
  user: AuthUser
  logo: string
}
