import React from 'react';
import { IconButton } from '@mui/material';
import CopyIcon from '../../assets/Copy';

type Typography = {
  align?: 'left' | 'right' | 'center' | 'inherit' | 'justify';
  text: string;
  style?: object;
};

type CopyBtn = Typography & {
  fill?: string;
};

const CopyBtn = ({ text, fill = '#161C24' }: CopyBtn) => {
  return (
    <IconButton
      aria-label="copy"
      sx={{
        paddingRight: 0,
      }}
      onClick={() => navigator.clipboard.writeText(text)}
    >
      <CopyIcon fill={fill} />
    </IconButton>
  );
};

export default CopyBtn;
