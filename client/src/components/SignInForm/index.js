import React from 'react';
import Input from '../../components/Styled-Input';
import { Button } from 'react-bootstrap';
import "./index.scss"

const SignInForm = ({setIsSignedIn, history, admin, onAdminChange, SignInRequest }) => 
      
    <div className="BlockForForm">
      <span>Library Management System</span>
        <form>
          <Input name='barcode' type='text' onChange={onAdminChange} value={admin.barcode} placeholder='Staff Barcode' required/>
          <Input name='password' type='password' value={admin.password} onChange={onAdminChange} placeholder='password' required/>
          <Button variant="secondary" size="sm"  onClick={ SignInRequest}> 
            Sign in 
          </Button>
        </form>
    </div>

export default SignInForm;