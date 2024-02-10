interface CarInfo {
  id?: number;
  brandId?: number;
  model: string;
  color: string;
  manufactureYear: number;
  insuranceValidUpto: string;
  kilometerDriven: number;
  location: string;
  noOfOwners: number;
  transmission: string;
  externalFitments: string;
  photo: string;
  bodyType: string;
  price: number;
  fuelType: string;
}

interface CarBrandList {
  id: number;
  name: string;
  logoPath: string;
}

interface Options {
  name: string;
  value: string;
}

export { CarInfo, CarBrandList, Options };
