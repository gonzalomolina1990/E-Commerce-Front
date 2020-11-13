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
          <Nav.Link href="/categories">Categorias</Nav.Link>
          {user.admin && (
            <Nav.Link href="/admin-product">AdminProduct</Nav.Link>
          )}
          {user.admin && (
            <Nav.Link href="/admin-category">AdminCategory</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
      {user && user.usertoken ? (
        <div>
          <span className="userIcon">
            <i class="fas fa-user-circle"></i> {user.name} {user.lastname}
          </span>
          <button
            className="btn btn-light"
            onClick={() => dispatch(logout({}))}
          >
            Logout
          </button>
        </div>
      ) : (
        <Link to={"/login"}>
          <button className="btn btn-light">Login</button>
        </Link>
      )}
    </Navbar>
  );
}

export default Navigation;
