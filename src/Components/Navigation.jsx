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
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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
            <div className="mediaLogoutSmall">
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
              <button className="btn btn-light mediaLogoutSmall">Login</button>
            </Link>
          )}
        </Navbar.Collapse>
        <Link to={"/cart"}>
          <NavCart />{" "}
        </Link>
        {user && user.usertoken ? (
          <div className="mediaLogout">
            <span className="userIcon">
              <i class="fas fa-user-circle"></i> {user.name} {user.lastname}
            </span>
            <button
              className="btn btn-light"
              onClick={() => {
                return dispatch(logout({})), dispatch(clearCart([]));
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to={"/login"}>
            <button className="btn btn-light mediaLogout ml-5">Login</button>
          </Link>
        )}
      </div>
    </Navbar>
  );
}

export default Navigation;
