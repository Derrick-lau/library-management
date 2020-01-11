import React, { useState } from 'react';
import SignInForm from '../../components/SignInForm';
import SignInRequest from '../../api/SignInRequest';

const SignIn = ({setIsSignedIn, history}) => {

  const [admin, setAdmin] = useState({ barcode: '', password: ''});

  const onAdminChange = e => {
    const { value, name } = e.target;
    setAdmin({...admin, [name]: value });
  };

  const SignIn = (event) => {
    event.preventDefault();
    SignInRequest('http://127.0.0.1:5000/signin', admin, setIsSignedIn)
  }

  return (
    <SignInForm setIsSignedIn={setIsSignedIn} history={history} onAdminChange={onAdminChange} admin={admin} SignIn={SignIn} />
  )
}

export default SignIn;
