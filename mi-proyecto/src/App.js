import "./App.css";
import Login from "./Components/Login";
import Home from "./Components/Home";
import AdminView from "./Components/AdminView";
import AdminProductView from "./Components/AdminProductView";
import AdminCategoryView from "./Components/AdminCategoryView";

import CreateProduct from "./Components/CreateProduct";
import UpdateProduct from "./Components/UpdateProduct";

import { BrowserRouter as Router, Switch } from "react-router-dom";
import PublicRoute from "./Components/PublicRoute";
import PrivateRoute from "./Components/PrivateRoute";
import Register from "./Components/Register";
import Categories from "./Components/Categories";
import CreateCategory from "./Components/CreateCategory";
import UpdateCategory from "./Components/UpdateCategory";

import Category from "./Components/Category";

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
            component={Categories}
            path="/categories"
          />
          <PrivateRoute component={AdminView} path="/adminview" exact />
          <PrivateRoute component={AdminProductView} path="/admin-product" />
          <PrivateRoute component={AdminCategoryView} path="/admin-category" />

          <PrivateRoute component={CreateProduct} path="/create-product" />
          <PrivateRoute component={UpdateProduct} path="/update-product/:id" />

          <PrivateRoute component={CreateCategory} path="/create-category" />
          <PrivateRoute
            component={UpdateCategory}
            path="/update-category/:slug"
          />
        </Switch>
        {/* <PrivateRoute component={Home} path="/home" exact />
        <PrivateRoute component={User} path="/user" exact />
        <PrivateRoute component={Profile} path="/profile/:username" exact />
        <PrivateRoute component={User} path="/username/:username" exact /> */}
      </div>
    </Router>
  );
}

export default App;
