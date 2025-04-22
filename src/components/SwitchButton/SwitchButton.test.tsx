import React from 'react';
import { render, screen, fireEvent } from '../../helpers/TestHelper';
import SwitchButton from './SwitchButton';

describe('SwitchButton', () => {
  const defaultProps = {
    label: 'Favourites',
    value: false,
    onChange: jest.fn(),
  };

  it('renders the label and switch correctly', () => {
    render(<SwitchButton {...defaultProps} />);

    expect(screen.getByText('Favourites')).toBeTruthy();
  });

  it('triggers onChange when the switch is toggled', () => {
    const onChangeMock = jest.fn();
    render(<SwitchButton {...defaultProps} onChange={onChangeMock} />);

    const switchElement = screen.getByTestId('switch-button');
    fireEvent(switchElement, 'valueChange', true);

    expect(onChangeMock).toHaveBeenCalledWith(true);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

  it('renders the switch with correct value (true)', () => {
    render(<SwitchButton {...defaultProps} value={true} />);

    const switchElement = screen.getByTestId('switch-button');
    expect(switchElement.props.value).toBe(true);
  });
});
