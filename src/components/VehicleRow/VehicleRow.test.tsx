import React from 'react';
import { render, screen, fireEvent } from '../../helpers/TestHelper';

import VehicleRow from './VehicleRow';
import { Vehicle } from '../../types/vehicles';

const mockVehicle: Vehicle = {
  id: 1,
  make: 'Test Make',
  model: 'Test Model',
  engineSize: '2.0L',
  fuel: 'Petrol',
  year: 2020,
  mileage: 15000,
  auctionDateTime: 'date',
  startingBid: 10000,
  favourite: false,
  photoUrl: null,
};

describe('VehicleRow', () => {
  it('renders the VehicleRow correctly', () => {
    const onPressMock = jest.fn();
    render(<VehicleRow vehicle={mockVehicle} onPress={onPressMock} />);

    const vehicleRow = screen.getByTestId('vehicle-row');
    expect(vehicleRow).toBeTruthy();

    expect(screen.getByText('Test Make Test Model')).toBeTruthy();

    fireEvent.press(vehicleRow);
    expect(onPressMock).toHaveBeenCalled();
  });
});
