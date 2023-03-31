import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';
import  "./styles.css"

export const Header = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <NavLink className={(link) => link.isActive ? "active" : ""}  to="/"  style={{color:"#fff", marginLeft: 30}}>Home</NavLink >
        <NavLink  to="/courses" style={{color:"#fff", marginLeft: 30}}>Courses</NavLink >
        <NavLink  to="/about" style={{color:"#fff", marginLeft: 30}}>About</NavLink >
        <NavLink  to="/panel" style={{color:"#fff", marginLeft: 30}}>Panel</NavLink >
      </Nav>
    </Container>
  </Navbar>
  </>
  )
}
