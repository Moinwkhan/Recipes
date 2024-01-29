import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default class ResponsiveMenu extends Component {
  render() {
    return (
      <Navbar
        expand="lg"
        className="bg-body-tertiary bootnav"
        style={{height: 80, fontSize:20}}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/010/482/797/small/kitchen-chef-logo-design-template-vector.jpg"
              alt=""
              style={{ width: 70 }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/recipes">
                Recipes
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
