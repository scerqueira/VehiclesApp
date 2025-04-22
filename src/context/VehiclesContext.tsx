import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import vehiclesData from '../data/vehicles_dataset.json';
import type { Vehicle } from '../types/vehicles';
import { getVehiclePhotoUrl } from '../utils/vehicles';

type VehiclesContextType = {
  vehicles: Vehicle[];
  toggleFavourite: (id: number) => void;
};

const VehiclesContext = createContext<VehiclesContextType | undefined>(undefined);

export const VehiclesProvider = ({ children }: { children: ReactNode }) => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    const vehiclesFormatted = vehiclesData.map((vehicle, index) => ({
      ...vehicle,
      id: index,
      photoUrl: getVehiclePhotoUrl(vehicle.make),
    }));
    setVehicles(vehiclesFormatted);
  }, []);

  const toggleFavourite = (id: number) => {
    setVehicles((prev) => prev.map((v) => (v.id === id ? { ...v, favourite: !v.favourite } : v)));
  };

  return <VehiclesContext.Provider value={{ vehicles, toggleFavourite }}>{children}</VehiclesContext.Provider>;
};

export const useVehiclesContext = () => {
  const context = useContext(VehiclesContext);
  if (!context) {
    throw new Error('useVehiclesContext must be used within a VehiclesProvider');
  }
  return context;
};
