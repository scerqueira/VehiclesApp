import { useState, useEffect, useMemo } from 'react';
import { FilterParams, UseListResult } from './useList.types';

const useList = <T>(
  data: T[],
  filterFunction: (item: T, filters: FilterParams) => boolean,
  initialItemsPerPage: number
): UseListResult<T> => {
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<FilterParams>({});
  const [sortingKey, setSortingKey] = useState<keyof T | null>(null);
  const [filteredData, setFilteredData] = useState<T[]>([]);

  const applyFilters = (newFilters: FilterParams) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const applySorting = (key: keyof T) => {
    setSortingKey(key);
  };

  const updateItemsPerPage = (value: number) => {
    setItemsPerPage(value);
  };

  useEffect(() => {
    let result = [...data];

    if (filters) {
      result = result.filter((item) => filterFunction(item, filters));
    }

    if (sortingKey) {
      result.sort((a, b) => {
        if (a[sortingKey]! < b[sortingKey]!) {
          return -1;
        }
        if (a[sortingKey]! > b[sortingKey]!) {
          return 1;
        }
        return 0;
      });
    }

    setFilteredData(result);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, filters, sortingKey]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pagedData = useMemo(() => filteredData.slice(startIndex, endIndex), [filteredData, startIndex, endIndex]);

  const totalItems = filteredData.length;

  useEffect(() => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [totalItems, currentPage, itemsPerPage]);

  return {
    filteredData: pagedData,
    currentPage,
    totalItems,
    itemsPerPage,
    applyFilters,
    applySorting,
    setCurrentPage,
    updateItemsPerPage,
  };
};

export default useList;
