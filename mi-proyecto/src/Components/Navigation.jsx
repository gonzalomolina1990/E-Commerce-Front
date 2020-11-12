import React from "react";
import "../App.css";
import { Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/actions";

function Navigation() {
  const user = useSelector((state) => state.users);

  const dispatch = useDispatch();

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbarColor"
      fixed="top"
      variant="dark"
    >
      <Navbar.Brand href="/">ElectroHack</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="search">Buscar</Nav.Link>
          <Nav.Link href="About">Sobre Nosotros</Nav.Link>
          <Nav.Link href="Contact">Contacto</Nav.Link>
        </Nav>
        {user.usertoken ? <span>Online</span> : <span>Offline</span>}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
