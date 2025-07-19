export type Option = {
  label: string;
  value: string;
};

export type DropdownComponentProps = {
  options: Option[];
  placeholder: string;
  onSelect: (value: string) => void;
};
