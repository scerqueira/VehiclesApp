export type RangeInputProps = {
  label: string;
  minValue: number | string;
  maxValue: number | string;
  onChangeMin: (value: number) => void;
  onChangeMax: (value: number) => void;
};
