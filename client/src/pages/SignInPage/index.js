import React, { useState, } from 'react';
import Input from '../../components/Input';
import { Button } from 'react-bootstrap';

const SignIn = ({setIsSignedIn, history}) => {

  const [admin, setAdmin] = useState({ ac: '', password: ''});

  const newValue = e => {
    const { value, name } = e.target;
    setAdmin({...admin, [name]: value });
  };
  
  return (
    <div className="BlockForForm">
      <span>Library Management System</span>
        <form>
          <Input name='ac' type='text' input={newValue} value={admin.ac} placeholder='Staff Barcode' required/>
          <Input name='password' type='password' value={admin.password} input={newValue} placeholder='password' required/>
          <Button variant="secondary" size="sm"  onClick={async () => {await setIsSignedIn(true); history.push('home')}}> 
            Sign in 
          </Button>
        </form>
    </div>
  );
}
export default SignIn;
