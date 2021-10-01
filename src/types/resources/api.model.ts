/* eslint-disable @typescript-eslint/no-explicit-any */
type FilterOperation = 'equal' | '<' | '>' | '<=' | '>=' | 'contains'

export interface Filter<T = any> {
  field: keyof T,
  op: FilterOperation,
  value: any
}


export interface ApiFilter {
  field: string,
  op: string
}

export interface ApiRequest {
  page?: number,
  size?: number,
  filters: Filter[]
}

export interface PaginationInterface {
  currentPage: number
  hasNext: boolean
  hasPrev: boolean
  pages: number
  size: number
  totalElements: number
}

export interface ApiListResponse<T> {
  data: T[],
  pagination: PaginationInterface
}

export enum ApiRoutes {
  Group = 'group',
  Patients = 'patient',
  Treatments = 'treatments',
  Location = 'location',
  Station = 'station',
  Users = 'users',
  Device = 'device',
  Role = 'role',
  SysAdmin = 'system_admin',
  Developer = 'developer',
  PracticeManager = 'practice_manager',
  MP = 'mp',
  NMP = 'nmp'
}
