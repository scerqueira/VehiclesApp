import styled from 'styled-components/native';

export const RangeFilterContainer = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
  padding-vertical: 4px;
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.paragraph.p3}px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.DARK_GRAY};
  margin-bottom: 4px;
`;

export const Input = styled.TextInput`
  padding: 10px;
  border-radius: 8px;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.surface.WHITE};
  border: 1px solid ${({ theme }) => theme.colors.border.LIGHT_GRAY};
  color: ${({ theme }) => theme.colors.text.DARK_GRAY};
  font-size: ${({ theme }) => theme.paragraph.p3}px;
  flex: 1;
`;
