import React, { useState } from 'react';
import SignInForm from '../../components/SignInForm';
import axios from "axios";



const SignIn = ({setIsSignedIn, history}) => {

  const [admin, setAdmin] = useState({ barcode: '', password: ''});

  const onAdminChange = e => {
    const { value, name } = e.target;
    setAdmin({...admin, [name]: value });
  };

  const SaveTokenToSession = (token) => {
    window.sessionStorage.setItem('token', token)
  }

  const SignInRequest = async () => {
    try {  
        const res = await axios({
          url: 'http://localhost:5000/signin',
          method: 'post',
          data: admin
      });
        if(res.status===200 && res.data){
          await setIsSignedIn(true);
          const token = res.data;
          SaveTokenToSession(token);
        } else {console.error()};
    } catch {console.error()}
  }

  return (
    <SignInForm setIsSignedIn={setIsSignedIn} history={history} onAdminChange={onAdminChange} admin={admin} SignInRequest={SignInRequest} />
  )
}

export default SignIn;
