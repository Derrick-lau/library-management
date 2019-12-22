import React from 'react';
import './index.scss';

const Input = ({ input, label, ...args }) => (
    <label>
      {label}
      <input onChange={input} {...args} />
    </label>
  );
  
  export default Input;