import React, { useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/user";
import { clearCart } from "../redux/actions/cart";
import axios from "axios";
import { listCategories } from "../redux/actions/category";
import NavCart from "./NavCart";

function Navigation() {
  const user = useSelector((state) => state.users);
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios({
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        url: `${process.env.REACT_APP_URL}/api/v1/categories/`,
      });
      dispatch(listCategories(response.data));
      console.log(response.data);
    };
    getCategories(); //sacar populate
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbarColor"
      fixed="top"
      variant="dark"
    >
      <div className="container">
        <Navbar.Brand as={Link} to={"/"}>
          ElectroHack
        </Navbar.Brand>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown
              title="Buscar por categorías"
              id="collasible-nav-dropdown"
            >
              {categories &&
                categories.map((category) => {
                  return (
                    <NavDropdown.Item
                      as={Link}
                      to={`/categories/${category.slug}`}
                    >
                      {category.name}
                    </NavDropdown.Item>
                  );
                })}
            </NavDropdown>
            {user.admin && (
              <NavDropdown title="Administrador" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to={"/admin-product"}>
                  Productos
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to={"/admin-category"}>
                  Categorías
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to={"/admin-users"}>
                  Usuarios
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to={"/admin-orders"}>
                  Pedidos
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>

          {user && user.usertoken ? (
            <div className="d-flex ">
              <Nav>
                <NavDropdown
                  title={
                    <span>
                      <i className="fas fa-user-circle mr-1"></i> {user.name}{" "}
                      {user.lastname}
                    </span>
                  }
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item
                    onClick={() => {
                      return dispatch(logout({})), dispatch(clearCart([]));
                    }}
                  >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>{" "}
            </div>
          ) : (
            <Link to={"/login"} className="loginLink">
              Login
            </Link>
          )}
        </Navbar.Collapse>
        <Link to={"/cart"} className="ml-2">
          <NavCart />{" "}
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      </div>
    </Navbar>
  );
}

export default Navigation;
