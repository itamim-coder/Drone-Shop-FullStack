import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'

const DashNav = () => {
  const {admin} = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavLink to="/home">Home</NavLink> 
      <NavLink to="/myorder">My Order</NavLink> 
      <NavLink to="/review">Review</NavLink>
     
    </Nav>
   <Nav>
      
     { admin && <> 
      <NavLink to="/manage-order">Manage All Orders</NavLink>
      <NavLink to="/add-product">Add Product</NavLink>
      <NavLink to="/create-admin">Create Admin</NavLink>
      <NavLink to="/manage-products">Manage Products</NavLink>
     </>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default DashNav;