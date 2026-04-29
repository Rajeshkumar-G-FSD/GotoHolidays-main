import { LucideIcon } from 'lucide-react';

export type View = 'home' | 'visas' | 'flights' | 'packages' | 'dashboard';

export interface Destination {
  id: string;
  name: string;
  region: string;
  duration: string;
  description: string;
  imageUrl: string;
  visaType?: string;
  price?: string;
}

export interface Flight {
  id: string;
  airline: string;
  airlineLogo: string;
  flightNumber: string;
  departureTime: string;
  arrivalTime: string;
  origin: string;
  destination: string;
  duration: string;
  stops: string;
  price: number;
  tag?: string;
}

export interface NavItem {
  label: string;
  view: View;
  icon?: LucideIcon;
}
