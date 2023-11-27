import React from 'react';
import DefaultButton from '../DefaultButton';
import styles from './style';

const RoundDefaultButton = ({ style, ...properties }: Button) => {
  return <DefaultButton {...properties} style={{ ...styles, ...style }} />;
};

export default RoundDefaultButton;
