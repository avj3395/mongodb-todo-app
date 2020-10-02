import React, { Component } from "react";
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

export default class Navbars extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="/">
        <img
        alt=""
        src="https://img.icons8.com/fluent/48/000000/tasklist.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}MongoDB TODO App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" className="nav-link">Exercises</Link>
            <Link to="/create" className="nav-link">Create Exercise Logo</Link>
            <Link to="/user" className="nav-link">Create User</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
