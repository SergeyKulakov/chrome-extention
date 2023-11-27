import React from 'react';
import { CircularProgress } from '@mui/material';
import { LoaderType } from './types';

const Loader = ({ style }: LoaderType) => {
  return <CircularProgress color="success" size={24} sx={style} />;
};

export default Loader;
