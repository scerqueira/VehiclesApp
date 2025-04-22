import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.surface.LIGHT_GRAY};
  align-items: center;
`;

export const styles = StyleSheet.create({
  dropdownStyle: { width: '20%', alignItems: 'center' },
  dropdownTextStyle: { alignSelf: 'center', fontSize: 18 },
  textStyle: {
    marginHorizontal: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 14,
    borderRadius: 8,
    backgroundColor: 'white',
  },
});

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.paragraph.p3}px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.DARK_GRAY};
  margin-bottom: 4px;
`;
