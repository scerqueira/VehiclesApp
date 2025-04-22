import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import * as S from './PaginationControls.styles';
import { PaginationControlsProps } from './PaginationControls.types';
import Icon from '@react-native-vector-icons/ant-design';
import { theme } from '../../theme/theme';

const PaginationControls = ({
  currentPage,
  setCurrentPage,
  totalItems,
  itemsPerPage,
  onChangePage,
}: PaginationControlsProps) => {
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= Math.ceil(totalItems / itemsPerPage)) {
      setCurrentPage(newPage);
      onChangePage?.(newPage);
    }
  };

  const isOnFirstPage = currentPage === 1;
  const isOnLastPage = currentPage === Math.ceil(totalItems / itemsPerPage);
  const backButtonColor = isOnFirstPage ? theme.colors.PRIMARY_100 : theme.colors.PRIMARY_500;
  const forwardButtonColor = isOnLastPage ? theme.colors.PRIMARY_100 : theme.colors.PRIMARY_500;

  return (
    <S.ControlsContainer>
      <TouchableOpacity testID="step-backward-button" onPress={() => handlePageChange(1)} disabled={isOnFirstPage}>
        <Icon name="step-backward" size={35} color={backButtonColor} />
      </TouchableOpacity>
      <TouchableOpacity
        testID="caret-left-button"
        onPress={() => handlePageChange(currentPage - 1)}
        disabled={isOnFirstPage}
      >
        <Icon name="caret-left" size={35} color={backButtonColor} />
      </TouchableOpacity>
      <S.SelectedPageNumberContainer>
        <Text>{currentPage}</Text>
      </S.SelectedPageNumberContainer>
      <Text>/</Text>
      <S.PageNumberContainer>
        <Text>{Math.ceil(totalItems / itemsPerPage)}</Text>
      </S.PageNumberContainer>
      <TouchableOpacity
        testID="caret-right-button"
        onPress={() => handlePageChange(currentPage + 1)}
        disabled={isOnLastPage}
      >
        <Icon name="caret-right" size={35} color={forwardButtonColor} />
      </TouchableOpacity>
      <TouchableOpacity
        testID="step-forward-button"
        onPress={() => handlePageChange(Math.ceil(totalItems / itemsPerPage))}
        disabled={isOnLastPage}
      >
        <Icon name="step-forward" size={35} color={forwardButtonColor} />
      </TouchableOpacity>
    </S.ControlsContainer>
  );
};

export default PaginationControls;
