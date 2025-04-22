import styled from 'styled-components/native';

export const SwitchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-vertical: 4px;
`;

export const SwitchLabel = styled.Text`
  font-size: ${({ theme }) => theme.paragraph.p3}px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.DARK_GRAY};
  margin-bottom: 4px;
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.paragraph.p3}px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.DARK_GRAY};
  margin-bottom: 4px;
  margin-left: 4px;
`;
