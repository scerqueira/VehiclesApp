import React from 'react';
import { render, screen, fireEvent } from '../../helpers/TestHelper';
import LabelInput from './LabelInput';

describe('LabelInput', () => {
  const setup = () => {
    const onChange = jest.fn();
    render(<LabelInput label="Make" placeholder="Enter make" value="Toyota" onChange={onChange} />);
    return { onChange };
  };

  it('renders label and input with correct props', () => {
    setup();

    expect(screen.getByText('Make')).toBeTruthy();
    expect(screen.getByPlaceholderText('Enter make')).toBeTruthy();
    expect(screen.getByDisplayValue('Toyota')).toBeTruthy();
  });

  it('calls onChange when input value changes', () => {
    const { onChange } = setup();
    const input = screen.getByPlaceholderText('Enter make');

    fireEvent.changeText(input, 'Honda');

    expect(onChange).toHaveBeenCalledWith('Honda');
  });
});
