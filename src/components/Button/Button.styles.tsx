import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';

export const Button = styled(TouchableOpacity)<{ disabled?: boolean }>`
  background-color: ${({ theme, disabled }) => (disabled ? theme.colors.PRIMARY_50 : theme.colors.PRIMARY_500)};
  padding: 12px 24px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

export const ButtonText = styled(Text)`
  color: white;
  font-size: ${({ theme }) => theme.paragraph.p2}px;
  font-weight: bold;
`;
