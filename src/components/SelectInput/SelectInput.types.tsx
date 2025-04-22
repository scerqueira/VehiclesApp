export type SelectInputProps<T extends string | object> = {
  label: string;
  options: T[];
  defaultValue: T extends string ? string : string | keyof T;
  onSelect: (value: T extends string ? string : keyof T) => void;
};
