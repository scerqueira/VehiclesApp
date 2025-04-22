import React from 'react';
import ModalDropdown from 'react-native-modal-dropdown';

import * as S from './SelectInput.styles';
import { SelectInputProps } from './SelectInput.types';

const SelectInput = <T extends string | object>({ label, defaultValue, options, onSelect }: SelectInputProps<T>) => {
  const isObjectArray = typeof options[0] === 'object';

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <ModalDropdown
        accessible
        animated
        dropdownStyle={S.styles.dropdownStyle}
        dropdownTextStyle={S.styles.dropdownTextStyle}
        textStyle={[S.styles.textStyle]}
        defaultValue={String(defaultValue)}
        onSelect={(index: string, option: string) => {
          const numericIndex = parseInt(index, 10);
          if (!isNaN(numericIndex)) {
            if (isObjectArray) {
              const selectedOption = options[numericIndex] as { key: keyof T };
              onSelect(selectedOption.key as T extends string ? string : keyof T);
            } else {
              onSelect(option as T extends string ? string : keyof T);
            }
          }
        }}
        options={isObjectArray ? options.map((option: any) => option.label) : options}
      />
    </S.Container>
  );
};

export default SelectInput;
