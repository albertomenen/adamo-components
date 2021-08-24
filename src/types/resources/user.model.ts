import { Role } from './role.model'

export interface User {
  id_user: string
  id_group: string
  user_name: string
  phone: string
  email: string
  name: string
  last_name: string
  role: Role[],
  id_location: string
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
  role: Role[]
}

export interface AuthResponse {
  Authorization: string
  message: string
  status: string
  user: AuthUser
}
