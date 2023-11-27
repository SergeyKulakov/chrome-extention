import React from 'react';
import { Typography } from '@mui/material';
import globalStyles from '../../globalStyles';

const ErrorTypography = ({ text }: Typography) => {
  return <Typography sx={{ ...globalStyles.defaultText, ...globalStyles.defaultErrorText }}>{text}</Typography>;
};

export default ErrorTypography;
