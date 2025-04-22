export type VehicleOwnership = {
  logBook: string;
  numberOfOwners: number;
  dateOfRegistration: string;
};

export type VehicleSpecification = {
  vehicleType: string;
  colour: string;
  fuel: string;
  transmission: string;
  numberOfDoors: number;
  co2Emissions: string;
  noxEmissions: number;
  numberOfKeys: number;
};

export type VehicleDataSet = {
  make: string;
  model: string;
  engineSize: string;
  fuel: string;
  year: number;
  mileage: number;
  auctionDateTime: string;
  startingBid: number;
  favourite: boolean;
  details?: {
    specification: VehicleSpecification;
    ownership: VehicleOwnership;
    equipment: string[];
  };
};

export type Vehicle = VehicleDataSet & { id: number; photoUrl: string | null };
