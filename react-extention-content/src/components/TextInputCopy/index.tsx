import React from 'react';
import { InputAdornment } from '@mui/material';
import TextInput from '../TextInput';
import { CopyBtn } from '../../ui';
import { TextInputPasswordType } from './types';

const TextInputCopy = (properties: TextInputPasswordType) => {
  return (
    <div style={{ width: '262px', marginRight: '8px', overflow: 'hidden', }}>
      <TextInput
        {...properties}
        style={{
          width: '100%',
          overflow: 'hidden',
          borderRadius: '8px',
          '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #DFE3E8 !important',
          },
          '& .Mui-disabled': {
            textFillColor: '#222a32 !important',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <CopyBtn text={properties.value} />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default TextInputCopy;
