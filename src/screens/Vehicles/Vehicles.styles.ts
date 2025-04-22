import styled from 'styled-components/native';

export const MainContainer = styled.SafeAreaView`
  flex: 1;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.surface.WHITE};
`;

export const FiltersContainer = styled.View`
  flex-direction: column;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.surface.LIGHT_GRAY};
`;

export const FilterContainer = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  margin-vertical: 4px;
`;

export const Input = styled.TextInput`
  padding: 10px;
  border-radius: 8px;
  width: 50%;
  background-color: ${({ theme }) => theme.colors.surface.WHITE};
  border: 1px solid ${({ theme }) => theme.colors.border.LIGHT_GRAY};
  color: ${({ theme }) => theme.colors.text.DARK_GRAY};
  font-size: ${({ theme }) => theme.paragraph.p3}px;
  flex: 1;
`;

export const VehicleList = styled.FlatList`
  flex: 1;
`;
export const NoResultsContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.surface.WHITE};
  padding: 20px;
`;

export const NoResults = styled.Text`
  font-size: ${({ theme }) => theme.paragraph.p2}px;
  color: ${({ theme }) => theme.colors.text.DARK_GRAY};
  text-align: center;
  margin-top: 20px;
  font-weight: 500;
  padding: 20px;
`;
