import React from 'react';
import { LabelRowProps } from './LabelRow.types';

import * as S from './LabelRow.styles';

const LabelRow = ({ title, value, valueColor }: LabelRowProps) => {
  return (
    <S.Row>
      <S.LabelTitle>{title}</S.LabelTitle>
      <S.LabelValue color={valueColor}>{value}</S.LabelValue>
    </S.Row>
  );
};

export default LabelRow;
