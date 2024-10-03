export type EnergyClass = 'A' | 'B' | 'C';

export type Capacity = 8 | 9 | 10.5;

export type Features =
  | 'Drzwi AddWash™'
  | 'Panel AI Control'
  | 'Silnik inwerterowy'
  | 'Wyświetlacz elektroniczny';

interface IPrice {
  value: number;
  currency: string;
  installment: {
    value: number;
    period: number;
  };
  validFrom: Date;
  validTo: Date;
};

export interface IProduct {
  image: string;
  code: string;
  name: string;
  color: string;
  capacity: Capacity;
  dimensions: string;
  features: Features[];
  energyClass: EnergyClass;
  price: IPrice;
}

export interface IProductResponse {
  image: string;
  code: string;
  name: string;
  color: string;
  capacity: Capacity;
  dimensions: string;
  features: Features[];
  energyClass: EnergyClass;
  price: IPrice & {
    validFrom: string;
    validTo: string;
  };
}