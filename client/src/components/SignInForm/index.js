import React from 'react';
import Input from '../../components/Styled-Input';
import { Button } from 'react-bootstrap';
import "./index.scss"

const SignInForm = ({admin, onAdminChange, SignIn }) => 
      
    <div className="BlockForForm">
      <span>Library Management System</span>
        <form  onSubmit={SignIn}>
          <Input name='barcode' type='text' onChange={onAdminChange} value={admin.barcode} placeholder='Staff Barcode' required/>
          <Input name='password' type='password' value={admin.password} onChange={onAdminChange} placeholder='password' autoComplete="off" required/>
          <Button variant="secondary" size="sm"  type='submit' > 
            Sign in 
          </Button>
        </form>
    </div>

export default SignInForm;