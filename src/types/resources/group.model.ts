import { Location } from "./location.model";

export interface Group {
  id_group: string
  group_name: string
  address: string
  city: string
  town: string
  phone: string
  contact_name: string
  email: string
  logo?: string
  locations: Location[]
}

export interface GroupList {
  id_group: string
  group_name: string
}
