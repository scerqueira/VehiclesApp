import React from 'react';
import { render, screen } from '../../helpers/TestHelper';
import PaginationControls from './PaginationControls';

describe('PaginationControls', () => {
  it('renders pagination UI', () => {
    render(
      <PaginationControls
        currentPage={1}
        setCurrentPage={jest.fn()}
        totalItems={20}
        itemsPerPage={5}
        onChangePage={() => {}}
      />
    );

    expect(screen.getByText('1')).toBeTruthy();
  });
});
