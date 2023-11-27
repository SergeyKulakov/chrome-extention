import React from 'react';
import { Button } from '@mui/material';
import styles from './style';

const DefaultButton = ({
  type,
  text,
  disabled,
  style,
  onClick,
  ...rest
}: Button) => {
  return (
    <Button
      type={type}
      fullWidth
      disabled={disabled}
      variant="contained"
      color="primary"
      sx={{ ...styles.btn, ...style }}
      onClick={onClick}
      {...rest}
    >
      {text}
    </Button>
  );
};

export default DefaultButton;
