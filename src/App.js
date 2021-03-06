import "./App.css";
import Login from "./Components/Login";
import Home from "./Components/Home";

import AdminProductView from "./Components/AdminProductView";
import AdminCategoryView from "./Components/AdminCategoryView";

import CreateProduct from "./Components/CreateProduct";
import UpdateProduct from "./Components/UpdateProduct";
import Product from "./Components/Product";
import Cart from "./Components/Cart";

import { BrowserRouter as Router, Switch } from "react-router-dom";
import PublicRoute from "./Components/PublicRoute";
import PrivateRoute from "./Components/PrivateRoute";
import Register from "./Components/Register";

import CreateCategory from "./Components/CreateCategory";
import UpdateCategory from "./Components/UpdateCategory";
import AdminUserView from "./Components/AdminUserView";
import AdminOrdersView from "./Components/AdminOrdersView";

import Category from "./Components/Category";
import SuccessfulBought from "./Components/SuccessfulBought";
import AboutUs from "./Components/AboutUs";
import PasswordReset from "./Components/PasswordReset";
import Settings from "./Components/Settings";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PublicRoute restricted={false} component={Home} path="/" exact />
          <PublicRoute
            restricted={false}
            component={Category}
            path="/categories/:slug"
          />
          <PublicRoute restricted={true} component={Login} path="/login" />
          <PublicRoute
            restricted={true}
            component={Register}
            path="/register"
          />
          <PublicRoute
            restricted={false}
            component={Product}
            path="/product/:slug"
          />
          <PublicRoute restricted={false} component={Cart} path="/cart" />
          <PublicRoute
            restricted={false}
            component={SuccessfulBought}
            path="/successful-purchase"
          />

          <PublicRoute
            restricted={false}
            component={Settings}
            path="/settings"
          />
          <PublicRoute
            restricted={false}
            component={AboutUs}
            path="/about-us"
          />

          <PublicRoute
            restricted={false}
            component={PasswordReset}
            path="/reset-password"
          />

          <PrivateRoute component={AdminProductView} path="/admin-product" />
          <PrivateRoute component={AdminCategoryView} path="/admin-category" />

          <PrivateRoute component={AdminUserView} path="/admin-users" />
          <PrivateRoute component={AdminOrdersView} path="/admin-orders" />

          <PrivateRoute component={CreateProduct} path="/create-product" />
          <PrivateRoute component={UpdateProduct} path="/update-product/:id" />

          <PrivateRoute component={CreateCategory} path="/create-category" />
          <PrivateRoute
            component={UpdateCategory}
            path="/update-category/:slug"
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
