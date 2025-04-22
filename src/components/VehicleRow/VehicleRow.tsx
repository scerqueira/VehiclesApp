import React from 'react';
import { View } from 'react-native';
import { VehicleRowProps } from './VehicleRow.types';
import Icon from '@react-native-vector-icons/ant-design';

import * as S from './VehicleRow.styles';
import { useTheme } from 'styled-components/native';
import { FORMAT_DATE, FORMAT_TIME, formatDate, getMonthsAndDaysLeft, isDateInPast } from '../../utils/dates';

const VehicleRow = ({ vehicle, onPress }: VehicleRowProps) => {
  const theme = useTheme();
  const { make, model, engineSize, fuel, year, mileage, auctionDateTime, startingBid, favourite, photoUrl } =
    vehicle || {};

  if (!vehicle) {
    return null;
  }

  const date = formatDate(auctionDateTime, FORMAT_DATE);
  const time = formatDate(auctionDateTime, FORMAT_TIME);

  const isPastAuction = isDateInPast(auctionDateTime);

  return (
    <S.RowPressable onPress={onPress}>
      <S.Container testID="vehicle-row">
        {photoUrl ? (
          <S.Photo source={{ uri: photoUrl }} resizeMode="contain" />
        ) : (
          <S.ImagePlaceholder source={require('../../assets/placeholder.png')} />
        )}

        <S.LeftContainer>
          <S.InfoContainer>
            <S.MakeModel>
              {make} {model}
            </S.MakeModel>
            <S.Details>
              {year} | {mileage} miles
            </S.Details>
            <S.Details capitalize>
              {engineSize} | {fuel}
            </S.Details>
          </S.InfoContainer>
          <S.Bid>Starting Bid: ${startingBid}</S.Bid>
          {isPastAuction ? (
            <S.ExpiredLabel>Expired</S.ExpiredLabel>
          ) : (
            <S.TimeLeftLabel>{getMonthsAndDaysLeft(auctionDateTime)}</S.TimeLeftLabel>
          )}
        </S.LeftContainer>
        <S.RightContainer>
          {favourite ? <Icon name="heart" size={20} color={theme.colors.SECONDARY_500} /> : <View />}
          <View>
            <S.Details alignRight>{date}</S.Details>
            <S.Details alignRight>{time}</S.Details>
          </View>
        </S.RightContainer>
      </S.Container>
    </S.RowPressable>
  );
};

export default VehicleRow;
