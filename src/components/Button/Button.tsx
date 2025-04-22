import React from 'react';

import * as S from './Button.styles';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({ label, onPress, disabled = false }) => {
  return (
    <S.Button onPress={onPress} disabled={disabled}>
      <S.ButtonText>{label}</S.ButtonText>
    </S.Button>
  );
};

export default Button;
