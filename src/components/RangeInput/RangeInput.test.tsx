import React from 'react';
import { render, screen, fireEvent } from '../../helpers/TestHelper';
import RangeInput from './RangeInput';

describe('RangeFilter', () => {
  it('renders the RangeFilter correctly', () => {
    const mockLabel = 'Price Range';
    const mockMinValue = 10;
    const mockMaxValue = 100;

    render(
      <RangeInput
        label={mockLabel}
        minValue={mockMinValue}
        maxValue={mockMaxValue}
        onChangeMin={() => {}}
        onChangeMax={() => {}}
      />
    );

    expect(screen.getByText(mockLabel)).toBeTruthy();
    expect(screen.getByPlaceholderText('Min')).toBeTruthy();
    expect(screen.getByPlaceholderText('Max')).toBeTruthy();
  });

  it('fires onChangeMin when Min input changes', () => {
    const mockOnChangeMin = jest.fn();
    const mockOnChangeMax = jest.fn();
    const mockMinValue = 10;
    const mockMaxValue = 100;

    render(
      <RangeInput
        label="Price Range"
        minValue={mockMinValue}
        maxValue={mockMaxValue}
        onChangeMin={mockOnChangeMin}
        onChangeMax={mockOnChangeMax}
      />
    );

    const minInput = screen.getByPlaceholderText('Min');
    fireEvent.changeText(minInput, '20');

    expect(mockOnChangeMin).toHaveBeenCalledWith(20);
  });

  it('fires onChangeMax when Max input changes', () => {
    const mockOnChangeMin = jest.fn();
    const mockOnChangeMax = jest.fn();
    const mockMinValue = 10;
    const mockMaxValue = 100;

    render(
      <RangeInput
        label="Price Range"
        minValue={mockMinValue}
        maxValue={mockMaxValue}
        onChangeMin={mockOnChangeMin}
        onChangeMax={mockOnChangeMax}
      />
    );

    const maxInput = screen.getByPlaceholderText('Max');
    fireEvent.changeText(maxInput, '150');

    expect(mockOnChangeMax).toHaveBeenCalledWith(150);
  });
});
