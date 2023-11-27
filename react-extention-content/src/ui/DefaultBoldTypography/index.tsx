import React from 'react';
import { Typography } from '@mui/material';
import globalStyles from '../../globalStyles';

const DefaultBoldTypography = ({ text }: Typography) => {
  return (
    <Typography
      sx={{ ...globalStyles.defaultText, ...globalStyles.defaultTextBold }}
    >
      {text}
    </Typography>
  );
};

export default DefaultBoldTypography;
