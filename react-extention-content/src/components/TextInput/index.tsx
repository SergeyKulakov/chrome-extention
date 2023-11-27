import React from 'react';
import { Container, TextField, FormHelperText } from '@mui/material';
import { DefaultBoldTypography, ErrorBoldTypography } from '../../ui';
import globalStyles from '../../globalStyles';
import { TextInputType } from './types';
import styles from './style';

const TextInput = ({
  label = '',
  name,
  type = 'text',
  placeholder,
  autoComplete,
  autoFocus,
  required,
  isError,
  helperText,
  InputProps,
  value,
  style,
  onChange,
  ...rest
}: TextInputType) => {
  return (
    <>
      <Container disableGutters={true} sx={styles.container}>
        <DefaultBoldTypography text={label} />
        {required && <ErrorBoldTypography text="*" />}
      </Container>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        autoFocus={autoFocus}
        required={required}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={value}
        InputProps={{
          ...InputProps,
          sx: { ...globalStyles.defaultText, ...style },
        }}
        onChange={onChange}
        sx={
          isError
            ? { ...styles.textField, ...styles.textFieldError }
            : styles.textField
        }
        {...rest}
      />
      {isError && (
        <FormHelperText
          error
          sx={{ ...globalStyles.defaultText, ...globalStyles.defaultErrorText }}
        >
          {helperText}
        </FormHelperText>
      )}
    </>
  );
};

export default TextInput;
