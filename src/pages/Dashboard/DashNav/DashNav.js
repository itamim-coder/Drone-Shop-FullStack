import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'
import './DashNav.css'

const DashNav = () => {
  const {admin, logout} = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Container>
  <Navbar.Brand href="/dashboard">Dash-Board</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavLink className="dash-nav" to="/home">Home</NavLink> 
      <NavLink className="dash-nav" to="/pay">Pay</NavLink> 
      <NavLink className="dash-nav" to="/myorder">My Order</NavLink> 
      <NavLink className="dash-nav" to="/review">Review</NavLink>
     
    </Nav>
   <Nav>
      
     { admin && <> 
      <NavLink className="dash-nav" to="/manage-order">Manage All Orders</NavLink>
      <NavLink className="dash-nav" to="/add-product">Add Product</NavLink>
      <NavLink className="dash-nav" to="/create-admin">Create Admin</NavLink>
      <NavLink className="dash-nav" to="/manage-products">Manage Products</NavLink>
     </>}
     <button className="dash-nav" onClick={logout}>logOut</button>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default DashNav;