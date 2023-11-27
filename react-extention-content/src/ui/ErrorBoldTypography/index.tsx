import React from 'react';
import { Typography } from '@mui/material';
import globalStyles from '../../globalStyles';


const ErrorBoldTypography = ({ text }: Typography) => {
  return (
    <Typography sx={{ ...globalStyles.defaultText, ...globalStyles.defaultErrorText, ...globalStyles.defaultErrorTextBold }}>
      {text}
    </Typography>
  );
};

export default ErrorBoldTypography;
