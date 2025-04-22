export type FilterParams = Record<string, any>;

export interface UseListResult<T> {
  filteredData: T[];
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  applyFilters: (newFilters: FilterParams) => void;
  applySorting: (sortingKey: keyof T) => void;
  setCurrentPage: (page: number) => void;
  updateItemsPerPage: (value: number) => void;
}
