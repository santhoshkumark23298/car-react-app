const carBrandList = [
  {
    id: 1,
    name: "Maruti Suzuki",
    logoPath: "/assets/maruti suzuki.png",
  },
  {
    id: 2,
    name: "Hyundai",
    logoPath: "/assets/hyundai.png",
  },
  {
    id: 3,
    name: "Renault",
    logoPath: "/assets/renault.png",
  },
  {
    id: 4,
    name: "Honda",
    logoPath: "/assets/honda.png",
  },
  {
    id: 5,
    name: "Tata",
    logoPath: "/assets/tata.png",
  },
  {
    id: 6,
    name: "Ford",
    logoPath: "/assets/ford.png",
  },
  {
    id: 7,
    name: "Volkswagen",
    logoPath: "/assets/volkswagen.png",
  },
  {
    id: 8,
    name: "Mahindra",
    logoPath: "/assets/mahindra.png",
  },
  {
    id: 9,
    name: "Toyota",
    logoPath: "/assets/toyota.png",
  },
  {
    id: 10,
    name: "BMW",
    logoPath: "/assets/bmw.png",
  },
  {
    id: 11,
    name: "Mercedes-Benz",
    logoPath: "/assets/benz.png",
  },
];

const budgetOptions = [
  {
    to: 200000,
    name: "Less than 2L",
  },
  {
    from: 200000,
    to: 400000,
    name: "2L - 4L",
  },
  {
    from: 400000,
    to: 600000,
    name: "4L - 6L",
  },
  {
    from: 600000,
    name: "More than 6L",
  },
];

const fuelTypeOptions = [
  {
    value: "petrol",
    name: "Petrol",
  },
  {
    value: "diesel",
    name: "Diesel",
  },
  {
    value: "cng",
    name: "CNG",
  },
];

const transmissionOptions = [
  {
    value: "automatic",
    name: "Automatic",
  },
  {
    value: "manual",
    name: "Manual",
  },
];

const ownerOptions = [
  {
    value: "1",
    name: "1st Owner",
  },
  {
    value: "2",
    name: "2st Owner",
  },
  {
    value: "3",
    name: "3st Owner",
  },
];

const dummyData = [
  {
    brandId: 1,
    model: "Model 1",
    color: "Black",
    manufactureYear: 1994,
    insuranceValidUpto: "12-02-2010",
    kilometerDriven: 1000,
    location: "Puducherry",
    noOfOwners: 1,
    transmission: "manual",
    externalFitments: "Fitment one",
    photo: "",
    bodyType: "Body one",
    price: 500000,
    fuelType: "petrol",
  },
  {
    brandId: 1,
    model: "Model 2",
    color: "Black",
    manufactureYear: 1995,
    insuranceValidUpto: "12-02-2010",
    kilometerDriven: 100,
    location: "Puducherry",
    noOfOwners: 2,
    transmission: "manual",
    externalFitments: "Fitment two",
    photo: "",
    bodyType: "Body two",
    price: 400000,
    fuelType: "petrol",
  },
  {
    brandId: 1,
    model: "Model 3",
    color: "Green",
    manufactureYear: 1998,
    insuranceValidUpto: "12-02-2010",
    kilometerDriven: 2000,
    location: "Bangaluru",
    noOfOwners: 3,
    transmission: "manual",
    externalFitments: "Fitment three",
    photo: "",
    bodyType: "Body three",
    price: 100000,
    fuelType: "petrol",
  },
  {
    brandId: 2,
    model: "Model 4",
    color: "Pink",
    manufactureYear: 1994,
    insuranceValidUpto: "12-01-2010",
    kilometerDriven: 10000,
    location: "Chennai",
    noOfOwners: 1,
    transmission: "manual",
    externalFitments: "Fitment three",
    photo: "",
    bodyType: "Body four",
    price: 300000,
    fuelType: "diesel",
  },
  {
    brandId: 2,
    model: "Model 5",
    color: "Black",
    manufactureYear: 1994,
    insuranceValidUpto: "12-06-2010",
    kilometerDriven: 1000,
    location: "Puducherry",
    noOfOwners: 1,
    transmission: "automatic",
    externalFitments: "Fitment five",
    photo: "",
    bodyType: "Body five",
    price: 500000,
    fuelType: "diesel",
  },
];

export {
  carBrandList,
  fuelTypeOptions,
  transmissionOptions,
  budgetOptions,
  ownerOptions,
  dummyData,
};
