export interface textFieldProps {
  value: string;
  onChange: (text: string) => void;
  title: string;
  placeholder: string;
  validation: RegExp;
  errorMessage: string;
  eye: boolean;
}
