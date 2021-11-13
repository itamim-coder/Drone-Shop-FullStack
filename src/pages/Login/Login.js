import React, { useState } from 'react';
import { Form , Button, Spinner } from 'react-bootstrap';
import {  NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const {user, loginUser, isLoading, authError} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)

        console.log(newLoginData)

    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }
    return (
        <div>
            <h1>Login</h1>
          
           <Form onSubmit={handleLoginSubmit}>
  <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control 
    type="email"
     placeholder="Enter email"
     name="email"
     onBlur={handleOnBlur}
     />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control
    type="password"
     placeholder="Password"
     name="password"
     onBlur={handleOnBlur}
     />
  </Form.Group>
 
  <Button variant="primary" type="submit" className="mb-3">
    Login
  </Button> 
  <br />
  <NavLink to="/register">
      Register
  </NavLink> Here
</Form>
{isLoading && <Spinner animation="border" />}
{user?.email &&   
  <div class="w-50 alert alert-success alert-dismissible fade show">
        <strong>Success!</strong> User Created Successfully
  </div> 
}
{
  authError && 
  <div class="w-50 alert alert-danger alert-dismissible fade show">
   {authError} 
</div>
}

        
           
        </div>
    );
};

export default Login;