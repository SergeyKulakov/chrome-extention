export type TextInputPasswordType = {
  label?: string;
  name: string;
  placeholder?: string;
  autoComplete?: string;
  value: string;
  disabled?: boolean;
  autoFocus?: boolean;
  required?: boolean;
  helperText?: string | boolean;
  isError?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
