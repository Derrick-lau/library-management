import React, { useState } from 'react';
import SignInForm from '../../components/SignInForm';

const SignIn = ({setIsSignedIn, history}) => {

  const [admin, setAdmin] = useState({ ac: '', password: ''});

  const onAdminChange = e => {
    const { value, name } = e.target;
    setAdmin({...admin, [name]: value });
  };
  
  return (
    <SignInForm setIsSignedIn={setIsSignedIn} history={history} onAdminChange={onAdminChange} admin={admin} />
  )
}

export default SignIn;
