import * as S from './LabelInput.styles';
import type { LabelInputProps } from './LabelInput.types';

const LabelInput = ({ label, placeholder, value, onChange }: LabelInputProps) => {
  return (
    <S.Container>
      <S.InputLabel>{label}</S.InputLabel>
      <S.Input placeholder={placeholder} value={value} onChangeText={onChange} />
    </S.Container>
  );
};

export default LabelInput;
