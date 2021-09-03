// type Operation = '>' | '<' | '>=' | '<='

export interface ApiFilter {
  field: string,
  op: string
}

export interface ApiRequest {
  page?: number,
  size?: number
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
  Station = 'station'
}
