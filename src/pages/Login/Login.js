import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import signinImg from "../../images/Images/signin.svg";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);

    console.log(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  return (
    <div className="container-fluid py-5">
      <div className="row">
        <div className="col-md-6 d-none d-md-flex">
          <img src={signinImg} class="img-fluid" alt="signin"></img>
        </div>
        <div className="col-md-6 bg-light">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-xl-7 mx-auto">
                  <h3 className="fs-1 fw-bold">
                    <span className="text-warning">Login</span> Now
                  </h3>
                  <p className="text-muted mb-4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </p>

                  <Form onSubmit={handleLoginSubmit}>
                    <Form.Group
                      className="mb-3 w-100"
                      controlId="formBasicEmail"
                    >
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
                    <Form.Group
                      className="mb-3 w-100"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        onBlur={handleOnBlur}
                      />
                    </Form.Group>
                    <button
                      type="submit"
                      className="btn btn-warning fw-bold btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                    >
                      Sign in
                    </button>
                    <button
                      className="btn btn-warning fw-bold btn-block text-uppercase mb-2 rounded-pill shadow-sm ms-2"
                      // onClick={signInWithGoogle()}
                    >
                      Sign In With Google
                    </button>
                    <br />
                    <NavLink to="/register">Register</NavLink> Here
                  </Form>
                  {isLoading && <Spinner animation="border" />}
                  {user?.email && (
                    <div class="w-50 alert alert-success alert-dismissible fade show">
                      <strong>Success!</strong> User Created Successfully
                    </div>
                  )}
                  {authError && (
                    <div class="w-50 alert alert-danger alert-dismissible fade show">
                      {authError}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    //         <div>
    //             <h1>Login</h1>

    //            <Form onSubmit={handleLoginSubmit}>
    //   <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control
    //     type="email"
    //      placeholder="Enter email"
    //      name="email"
    //      onBlur={handleOnBlur}
    //      />
    //     <Form.Text className="text-muted">
    //       We'll never share your email with anyone else.
    //     </Form.Text>
    //   </Form.Group>

    //   <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control
    //     type="password"
    //      placeholder="Password"
    //      name="password"
    //      onBlur={handleOnBlur}
    //      />
    //   </Form.Group>

    //   <Button variant="primary" type="submit" className="mb-3">
    //     Login
    //   </Button>
    //   <br />
    //   <NavLink to="/register">
    //       Register
    //   </NavLink> Here
    // </Form>
    // {isLoading && <Spinner animation="border" />}
    // {user?.email &&
    //   <div class="w-50 alert alert-success alert-dismissible fade show">
    //         <strong>Success!</strong> User Created Successfully
    //   </div>
    // }
    // {
    //   authError &&
    //   <div class="w-50 alert alert-danger alert-dismissible fade show">
    //    {authError}
    // </div>
    // }

    //         </div>
  );
};

export default Login;
