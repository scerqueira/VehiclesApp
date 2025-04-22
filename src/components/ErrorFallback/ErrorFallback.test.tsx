import React from 'react';
import { render, screen, fireEvent } from '../../helpers/TestHelper';
import ErrorFallback from './ErrorFallback';

jest.mock('react-native-restart', () => ({
  restart: jest.fn(),
}));

describe('ErrorFallback', () => {
  it('renders the error messages and reload button', () => {
    render(<ErrorFallback />);

    expect(screen.getByText('Something went wrong')).toBeTruthy();
    expect(screen.getByText('An unexpected error has occurred. You can relaunch the app to continue.')).toBeTruthy();
    expect(screen.getByText('Reload')).toBeTruthy();
  });

  it('calls RNRestart.restart when reload button is pressed', () => {
    const RNRestart = require('react-native-restart');
    render(<ErrorFallback />);

    const button = screen.getByText('Reload');
    fireEvent.press(button);

    expect(RNRestart.restart).toHaveBeenCalledTimes(1);
  });
});
