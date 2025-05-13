
export interface CareType {
  title: string;
  total: number;
  vacant: number;
  rate: number;
  color: string;
  has_mappings?: boolean;
}

export interface Hospital {
  id: number;
  name: string;
  total: number;
  occupied: number;
  vacant: number;
  rate: number;
  color: string;
  careTypes: CareType[];
  status_codes?: {
    vacant: string[];
    occupied: string[];
  };
}

export interface CareTypeTotals {
  [key: string]: {
    total: number;
    vacant: number;
    rate: number;
    color: string;
  };
}

export interface GrandTotal {
  total_beds: number;
  occupied: number;
  vacant: number;
  rate: number;
  color: string;
}

export interface HospitalData {
  grand_total: GrandTotal;
  care_type_totals: CareTypeTotals;
  hospitals: Hospital[];
}
