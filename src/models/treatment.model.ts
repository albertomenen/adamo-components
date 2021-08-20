/**
 * Tipos de tratamiento que se le puede hacer a un paciente
 */
export enum TreatmentTypes {
  Auto = 'auto',
  Manual = 'manual'
}

export enum TreatmentStatus {
  Active = 'active',
  New = 'new',
  Finished = 'finished'
}

/**
 * Tratamientos de un paciente
 */
export interface Treatment {
  /**
   * ID del tratamiento
   */
  id: string;

  /**
   * Nombre del tratamiento
   */
  name: string;

  /**
   * Tipo de tratamiento
   */
  type: TreatmentTypes;

  /**
   * Sesión actual del tratamiento
   */
  current_session: number;

  /**
   * Número total de sesiones del tratamiento
   */
  total_sessions: number;

  /**
   * Estado actual del tratamiento
   */
  status: TreatmentStatus;

  /**
   * Fecha del último tratamiento
   */
  last_session_date: string;

  /**
   * Observaciones del paciente
   */
  observations: string;

}
