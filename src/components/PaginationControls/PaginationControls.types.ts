export type PaginationControlsProps = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalItems: number;
  itemsPerPage: number;
  onChangePage?: (newPage: number) => void;
};
