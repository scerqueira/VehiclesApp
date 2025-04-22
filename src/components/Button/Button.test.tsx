import React from 'react';
import { render, screen, fireEvent } from '../../helpers/TestHelper';
import Button from './Button';

describe('Button', () => {
  it('renders the Button correctly with label', () => {
    const mockLabel = 'Test Button';

    render(<Button label={mockLabel} onPress={() => {}} />);

    expect(screen.getByText(mockLabel)).toBeTruthy();
  });

  it('fires the onPress function when clicked', () => {
    const mockOnPress = jest.fn();
    const mockLabel = 'Clickable Button';

    render(<Button label={mockLabel} onPress={mockOnPress} />);

    const button = screen.getByText(mockLabel);
    fireEvent.press(button);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('does not fire onPress when button is disabled', () => {
    const mockOnPress = jest.fn();
    const mockLabel = 'Disabled Button';

    render(<Button label={mockLabel} onPress={mockOnPress} disabled />);

    const button = screen.getByText(mockLabel);
    fireEvent.press(button);

    expect(mockOnPress).not.toHaveBeenCalled();
  });
});
