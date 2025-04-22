import styled from 'styled-components/native';

export const Row = styled.View`
  flex-direction: row;
  margin-bottom: 2px;
  flex-wrap: wrap;
  gap: 4px;
`;

export const LabelTitle = styled.Text`
  font-size: ${({ theme }) => theme.paragraph.p3}px;
  color: ${({ theme }) => theme.colors.text.DARK_GRAY};
`;

export const LabelValue = styled.Text<{
  color?: string;
}>`
  font-size: ${({ theme }) => theme.paragraph.p3}px;
  font-weight: 500;
  color: ${({ theme, color }) => (color ? color : theme.colors.text.PRIMARY)};
  margin-left: 4px;
`;
