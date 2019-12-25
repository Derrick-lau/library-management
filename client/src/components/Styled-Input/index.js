import React from 'react';
import './index.scss';

const Input = ({ ...args }) => (
    <label>
      <input {...args} />
    </label>
  );
  
  export default Input;