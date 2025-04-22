import { Switch } from 'react-native';
import * as S from './SwitchButton.styles';
import { useTheme } from 'styled-components/native';
import { SwitchButtonProps } from './SwitchButton.types';

const SwitchButton = ({ label, value, onChange }: SwitchButtonProps) => {
  const theme = useTheme();

  return (
    <S.SwitchContainer>
      <S.Label>{label}</S.Label>
      <Switch
        trackColor={{ false: theme.colors.surface.LIGHT_GRAY, true: theme.colors.PRIMARY_500 }}
        thumbColor={value ? theme.colors.SECONDARY_500 : theme.colors.SECONDARY_50}
        ios_backgroundColor={theme.colors.PRIMARY_50}
        onValueChange={onChange}
        value={value}
      />
    </S.SwitchContainer>
  );
};

export default SwitchButton;
