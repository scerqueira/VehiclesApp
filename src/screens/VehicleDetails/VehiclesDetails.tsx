import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigation';
import Icon from '@react-native-vector-icons/ant-design';
import LabelRow from '../../components/LabelRow';

import * as S from './VehiclesDetails.styles';

import { useTheme } from 'styled-components/native';
import { useVehiclesContext } from '../../context/VehiclesContext';
import { useMemo } from 'react';
import { FORMAT_DATE_TIME, formatDate, getMonthsAndDaysLeft, isDateInPast } from '../../utils/dates';

const VehiclesDetails = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'VehicleDetails'>>();
  const { id } = route.params;

  const theme = useTheme();
  const { vehicles, toggleFavourite } = useVehiclesContext();

  const vehicle = useMemo(() => vehicles.find((v) => v.id === id), [vehicles, id]);

  if (!vehicle) {
    return null;
  }

  const { make, model, favourite, year, mileage, engineSize, fuel, startingBid, auctionDateTime, details, photoUrl } =
    vehicle;

  const isPastAuction = isDateInPast(auctionDateTime);

  return (
    <S.SafeArea>
      <S.MainContainer alwaysBounceVertical={false}>
        <S.TitleRow>
          <S.Title>
            {make} {model}
          </S.Title>

          <S.FavouriteButton onPress={() => toggleFavourite(id)}>
            <Icon
              name={'heart'}
              size={30}
              color={favourite ? theme.colors.SECONDARY_500 : theme.colors.SECONDARY_100}
            />
          </S.FavouriteButton>
        </S.TitleRow>
        {photoUrl && <S.Photo source={{ uri: photoUrl }} />}
        <LabelRow title="Year:" value={year} />
        <LabelRow title="Mileage:" value={`${mileage} miles`} />
        <LabelRow title="Engine Size:" value={engineSize} />
        <LabelRow title="Fuel:" value={fuel} />
        <LabelRow title="Starting Bid:" value={`$${startingBid}`} />
        <LabelRow title="Auction Date:" value={formatDate(auctionDateTime, FORMAT_DATE_TIME)} />
        <LabelRow
          valueColor={isPastAuction ? theme.colors.SECONDARY_500 : theme.colors.PRIMARY_500}
          title="Time to Expire:"
          value={isPastAuction ? 'Expired' : getMonthsAndDaysLeft(auctionDateTime)}
        />

        <S.Section>
          <S.SectionTitle>Specification</S.SectionTitle>
        </S.Section>

        {details && (
          <>
            <LabelRow title="Vehicle Type:" value={details.specification.vehicleType} />
            <LabelRow title="Colour:" value={details.specification.colour} />
            <LabelRow title="Transmission:" value={details.specification.transmission} />
            <LabelRow title="Number of Doors:" value={details.specification.numberOfDoors} />
            <LabelRow title="CO2 Emissions:" value={`${details.specification.co2Emissions}`} />
            <LabelRow title="NOx Emissions:" value={details.specification.noxEmissions} />
            <LabelRow title="Number of Keys:" value={details.specification.numberOfKeys} />

            <S.Section>
              <S.SectionTitle>Ownership</S.SectionTitle>
              <LabelRow title="Log Book:" value={details.ownership.logBook} />
              <LabelRow title="Number of Owners:" value={details.ownership.numberOfOwners} />
              <LabelRow
                title="Date of Registration:"
                value={formatDate(details.ownership.dateOfRegistration, FORMAT_DATE_TIME)}
              />
            </S.Section>

            <S.Section>
              <S.SectionTitle>Equipment</S.SectionTitle>
              {details.equipment.map((item, index) => (
                <S.EquipmentItem key={index}>- {item}</S.EquipmentItem>
              ))}
            </S.Section>
          </>
        )}
      </S.MainContainer>
    </S.SafeArea>
  );
};

export default VehiclesDetails;
