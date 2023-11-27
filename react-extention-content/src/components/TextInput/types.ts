import { TextFieldProps } from '@mui/material';
export type TextInputType = Pick<
  TextFieldProps,
  'multiline' | 'rows' | 'value'
> & {
  label?: string;
  name: string;
  type?: 'text' | 'password';
  placeholder?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  required?: boolean;
  helperText?: string | boolean;
  isError?: boolean;
  InputProps?: object;
  style?: object;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
