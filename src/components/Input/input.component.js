import React from 'react';
import { InputStyle } from './input.style';

const Input = props => (
  <InputStyle value={props.value} placeholder={props.placeholder} onChange={props.onChange} />
);

export default Input;
