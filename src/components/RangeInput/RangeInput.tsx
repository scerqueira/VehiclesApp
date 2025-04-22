import React from 'react';
import * as S from './RangeInput.styles';
import { RangeInputProps } from './RangeInput.types';

const RangeFilter: React.FC<RangeInputProps> = ({ label, minValue, maxValue, onChangeMin, onChangeMax }) => {
  return (
    <S.RangeFilterContainer>
      <S.Label>{label}</S.Label>
      <S.Input
        placeholder="Min"
        keyboardType="numeric"
        value={String(minValue)}
        onChangeText={(text) => onChangeMin(Number(text))}
      />
      <S.Label>to</S.Label>
      <S.Input
        placeholder="Max"
        keyboardType="numeric"
        value={String(maxValue)}
        onChangeText={(text) => onChangeMax(Number(text))}
      />
    </S.RangeFilterContainer>
  );
};

export default RangeFilter;
