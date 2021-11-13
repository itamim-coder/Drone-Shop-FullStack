import React , { useState } from 'react';
import { Form , Button, Spinner } from 'react-bootstrap';
import {  NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const history = useHistory();
    const {user, registerUser, isLoading, authError} = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)

        console.log(newLoginData)

    }

    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert('didnt match');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);    
        e.preventDefault();
    }
    return (
        <div>
            <h2>Register</h2>
           
           {!isLoading &&
           <Form onSubmit={handleLoginSubmit}>
  <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
    <Form.Label>Your Name</Form.Label>
    <Form.Control 
    type="text"
     placeholder="Enter email"
     name="name"
     onBlur={handleOnBlur}
     />
      </Form.Group>
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

  <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
    <Form.Label>Re-Type Password</Form.Label>
    <Form.Control
    type="password"
     placeholder="Password"
     name="password2"
     onBlur={handleOnBlur}
     />
  </Form.Group>
 
  <Button variant="primary" type="submit" className="mb-3">
    Register
  </Button> 
  <br />
  al Readey registered ? please
  <NavLink to="/login">
      Login
  </NavLink> Here
</Form>}
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

export default Register;<h2>register</h2>