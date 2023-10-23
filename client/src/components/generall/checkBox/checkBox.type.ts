export interface checkBoxType {
  optionList: string[];
  update: (value: string) => void;
  activeItems: string[];
  horizontal: boolean;
}
