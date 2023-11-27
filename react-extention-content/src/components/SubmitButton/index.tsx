import React from 'react';
import { Box } from '@mui/material';
import { Loader, RoundDefaultButton } from '../../ui';
import { SubmitButtonType } from './types';
import styles from './style';

const SubmitButton = ({
  text,
  isLoading,
  disabled,
  style,
  ...rest
}: SubmitButtonType) => {
  return (
    <Box sx={{ ...styles.btnWrapper, ...style }}>
      <RoundDefaultButton
        type="submit"
        text={text}
        disabled={disabled || isLoading}
        {...rest}
      />
      {isLoading && <Loader style={styles.loaderPosition} />}
    </Box>
  );
};

export default SubmitButton;
