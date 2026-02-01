
export enum PortalStatus {
  BOOTING = 'BOOTING',
  ACTIVE = 'ACTIVE',
  INTAKE = 'INTAKE',
  BATTLE = 'BATTLE',
  MEMBERSHIP = 'MEMBERSHIP',
  ABOUT = 'ABOUT'
}

export interface IntelReport {
  id: string;
  headline: string;
  timestamp: string;
  severity: 'LOW' | 'MED' | 'HIGH';
}

export interface ProductAsset {
  id: string;
  name: string;
  color: string;
  price: string;
  description: string;
  specs: string[];
}
