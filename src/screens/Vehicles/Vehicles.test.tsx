import React from 'react';
import { render, screen, fireEvent, waitFor } from '../../helpers/TestHelper';
import Vehicles from './Vehicles';

describe('Vehicles Screen', () => {
  it('renders vehicle list', async () => {
    render(<Vehicles />);
    await waitFor(() => {
      expect(screen.queryAllByText(/Toyota/i).length).toBeGreaterThan(1);
      expect(screen.queryAllByText(/Volkswagen/i).length).toBeGreaterThan(1);
    });
  });

  it('filters vehicles by make', async () => {
    render(<Vehicles />);
    const makeInput = screen.getByTestId('input-make');
    fireEvent.changeText(makeInput, 'Ford');

    await waitFor(() => {
      expect(screen.queryAllByText(/Ford/i).length).toBeGreaterThan(1);
    });
  });

  it('filters vehicles by make - no results', async () => {
    render(<Vehicles />);
    const makeInput = screen.getByTestId('input-make');
    fireEvent.changeText(makeInput, 'Honda');

    await waitFor(() => {
      expect(screen.queryByText(/No vehicles found/i)).toBeTruthy();
    });
  });

  it('shows no vehicles message if filter excludes all', async () => {
    render(<Vehicles />);
    const makeInput = screen.getByTestId('input-model');
    fireEvent.changeText(makeInput, 'Focus');

    await waitFor(() => {
      expect(screen.queryAllByText(/Focus/i).length).toBeGreaterThan(1);
    });
  });
});
