export interface Role {
  id_role: string
  role_name: string
  role_code: string
  login_in_station: boolean
  manage_practice_manager: boolean
  manage_mp: boolean
  manage_nmp: boolean
  manage_patient: boolean
  manage_sysadmin: boolean
  manage_dev: boolean
  get_patient: boolean
  list_patient: boolean
  detail_patient: boolean
  manage_treatment: boolean
  run_sesion: boolean
  user_logout: boolean
  app_login: boolean
  app_select_patient: boolean
  app_detail_patient: boolean
  debug_app_hmi: boolean
  manage_station: boolean
  manage_group: boolean
  manage_practice: boolean

}
