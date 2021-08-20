import { Role } from './role.model'

export interface User {
  id_user: string
  id_group: string
  user_name: string
  phone: string
  email: string
  name: string
  last_name: string
  role: Role[]
}

export interface UserCreate {
  id_group: string
  user_name: string
  phone: string
  email: string
  password: string
  name: string
  last_name: string
  role_id: string
}

export interface UserList {
  id_user: string
  user_name: string
  email: string
  name: string
  last_name: string
  id_group: string
}
