import React from 'react';
import { render, screen } from '../../helpers/TestHelper';
import LabelRow from './LabelRow';

describe('LabelRow', () => {
  it('renders the LabelRow correctly', () => {
    const mockTitle = 'Test Title';
    const mockValue = 'Test Value';

    render(<LabelRow title={mockTitle} value={mockValue} />);

    expect(screen.getByText(mockTitle)).toBeTruthy();
    expect(screen.getByText(mockValue)).toBeTruthy();
  });

  it('renders with the correct styles', () => {
    const mockTitle = 'Styled Title';
    const mockValue = 'Styled Value';

    render(<LabelRow title={mockTitle} value={mockValue} />);

    const labelTitle = screen.getByText(mockTitle);
    const labelValue = screen.getByText(mockValue);

    expect(labelTitle).toBeTruthy();
    expect(labelValue).toBeTruthy();
  });

  it('does not render a row with missing props', () => {
    const { queryByText } = render(<LabelRow title="Test Title" />);

    expect(queryByText('Test Value')).toBeNull();
  });
});
