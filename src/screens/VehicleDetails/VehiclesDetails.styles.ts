import styled from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.surface.WHITE};
`;

export const MainContainer = styled.ScrollView`
  flex: 1;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.surface.WHITE};
`;

export const TitleRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const FavouriteButton = styled.TouchableOpacity`
  padding: 4px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.heading.h5}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.PRIMARY_500};
`;

export const Section = styled.View`
  margin-top: 16px;
`;

export const SectionTitle = styled.Text`
  font-size: ${({ theme }) => theme.heading.h6}px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.PRIMARY_500};
  margin-bottom: 8px;
`;

export const EquipmentItem = styled.Text`
  font-size: ${({ theme }) => theme.paragraph.p3}px;
  color: ${({ theme }) => theme.colors.text.PRIMARY};
  margin-left: 12px;
  margin-bottom: 2px;
`;

export const Photo = styled.Image`
  height: 100px;
  width: 100px;
  resize-mode: contain;
  margin-bottom: 20px;
`;
