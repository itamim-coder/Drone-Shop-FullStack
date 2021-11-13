import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css'


const Navigation = () => {
  const {user, logout} = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/home">Drone-Shop</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <NavLink to="/shop">
        <button className="p-2 m-1 nav-btn">Shop</button>
    </NavLink>
    <NavLink to="/dashboard">
        <button className="p-2 m-1 nav-btn">Dashboard</button>
    </NavLink>
      
    
    </Nav>
    <Nav>
     
    {user?.email ?     
 <>
   <p className="text-light m-2"> {user.email}</p>
    <button className="log-nav" onClick={logout}>LogOut</button>  
 </>  
    :
    <NavLink to="/login">
        <button className="log-nav">Login</button>
    </NavLink>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Navigation;