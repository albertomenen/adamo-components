import { Treatment } from './treatment.model'

export interface Patient {
  /**
   * ID del paciente
   */
  id: string;

  /**
   * Nombre del paciente
   */
  name: string;

  /**
   * Número de teléfono del paciente
   */
  phone: string;

  /**
   * Correo del paciente
   */
  email: string;

  /**
   * Número de tratamientos activos
   */
  active_treatments: number;

  treatments?: Treatment[];
  firstname?: string;
  lastname?: string;
  id_type?: string;
  id_number?: string;
  birthdate?: Date | string;
  age?: string | number;
  ocupation?: string;
  country?: string;
  city?: string;
  address?: string;
  gender?: string;
  race?: string;
  complexity?: string;
  height?: string | number;
  weight?: string | number;
  allergies?: string;
  medication?: string;
  specialist?: string;
}

export interface PatientFormInterface {
  id?: string;
  active_treatments?: number;
  firstname?: string;
  lastname?: string;
  id_type?: string;
  id_number?: string;
  birthdate?: Date | string;
  age?: string | number;
  ocupation?: string;
  email?: string;
  phone?: string;
  country?: string;
  city?: string;
  address?: string;
  gender?: string;
  race?: string;
  complexity?: string;
  height?: string | number;
  weight?: string | number;
  allergies?: string;
  medication?: string;
  specialist?: string;
}
