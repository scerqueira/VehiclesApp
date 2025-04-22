import React from 'react';
import { render, screen, fireEvent } from '../../helpers/TestHelper';
import Vehicles from './Vehicles';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: jest.fn() }),
}));

describe('Vehicles', () => {
  it('renders filter inputs and vehicle list', () => {
    render(<Vehicles />);

    expect(screen.getByPlaceholderText('Filter by Make')).toBeTruthy();
    expect(screen.getByPlaceholderText('Filter by Model')).toBeTruthy();
  });

  it('filters vehicles by make', () => {
    render(<Vehicles />);

    const makeInput = screen.getByPlaceholderText('Filter by Make');
    fireEvent.changeText(makeInput, 'Toyota');

    expect(screen.queryByText(/Toyota/i)).toBeTruthy();
    expect(screen.queryByText(/Honda/i)).toBeNull();
  });

  it('filters vehicles by favourite', () => {
    render(<Vehicles />);

    const favSwitch = screen.getByText('Favourites');
    fireEvent.press(favSwitch);

    expect(screen.queryByText(/Toyota/i)).toBeTruthy();
    expect(screen.queryByText(/Honda/i)).toBeNull();
  });

  it('shows "no results" when filter returns none', () => {
    render(<Vehicles />);

    const makeInput = screen.getByPlaceholderText('Filter by Make');
    fireEvent.changeText(makeInput, 'Tesla');

    expect(screen.getByText('No vehicles found')).toBeTruthy();
  });

  it('updates items per page', () => {
    render(<Vehicles />);

    const itemsPerPageDropdown = screen.getByLabelText('Items per page');
    fireEvent.press(itemsPerPageDropdown);
    fireEvent.press(screen.getByText('5'));
    fireEvent.press(screen.getByText('10'));
    fireEvent.press(screen.getByText('20'));

    expect(itemsPerPageDropdown.props.value).toBe('5');
  });

  it('changes sorting method', () => {
    render(<Vehicles />);

    const sortDropdown = screen.getByLabelText('Sorted by');
    fireEvent.press(sortDropdown);
    fireEvent.press(screen.getByText('Make'));

    expect(screen.queryByText(/Toyota/i)).toBeTruthy();
  });
});
