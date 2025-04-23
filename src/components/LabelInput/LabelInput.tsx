import * as S from './LabelInput.styles';
import type { LabelInputProps } from './LabelInput.types';

const LabelInput = ({ label, placeholder, value, testID, onChange }: LabelInputProps) => {
  return (
    <S.Container>
      <S.InputLabel>{label}</S.InputLabel>
      <S.Input testID={testID} placeholder={placeholder} value={value} onChangeText={onChange} />
    </S.Container>
  );
};

export default LabelInput;
