import React from 'react';

import RNRestart from 'react-native-restart';

import * as S from './ErrorFallback.styles';
import Button from '../Button';

const ErrorFallback = () => {
  const handleReload = () => {
    RNRestart.restart();
  };

  return (
    <S.SafeArea>
      <S.MainContainer>
        <S.ContentContainerWrapper>
          <S.ContentContainer>
            <S.Title>Something went wrong</S.Title>
            <S.SubTitle>An unexpected error has occurred. You can relaunch the app to continue.</S.SubTitle>
          </S.ContentContainer>
          <Button onPress={handleReload} label="Reload" />
        </S.ContentContainerWrapper>
      </S.MainContainer>
    </S.SafeArea>
  );
};

export default ErrorFallback;
