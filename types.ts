export interface Therapist {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
}

export enum ServiceType {
  INDIVIDUAL = 'Individual Therapy',
  COUPLE = 'Couple Therapy'
}

export interface BookingState {
  service: ServiceType | null;
  therapistId: number | null;
  date: string;
  name: string;
  email: string;
  phone: string;
}
