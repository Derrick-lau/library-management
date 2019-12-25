import React, { useState, } from 'react';
import Input from '../../components/Styled-Input';
import { Button } from 'react-bootstrap';

const SignIn = ({setIsSignedIn, history}) => {

  const [admin, setAdmin] = useState({ ac: '', password: ''});

  const onAdminChange = e => {
    const { value, name } = e.target;
    setAdmin({...admin, [name]: value });
  };
  
  return (
    <div className="BlockForForm">
      <span>Library Management System</span>
        <form>
          <Input name='ac' type='text' onChange={onAdminChange} value={admin.ac} placeholder='Staff Barcode' required/>
          <Input name='password' type='password' value={admin.password} onChange={onAdminChange} placeholder='password' required/>
          <Button variant="secondary" size="sm"  onClick={async () => {await setIsSignedIn(true); history.push('home')}}> 
            Sign in 
          </Button>
        </form>
    </div>
  );
}
export default SignIn;
