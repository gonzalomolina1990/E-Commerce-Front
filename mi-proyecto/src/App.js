import "./App.css";
import Login from "./Components/Login";
import Home from "./Components/Home";
import AdminView from "./Components/AdminView";
import AdminProductView from "./Components/AdminProductView";
import AdminCategoryView from "./Components/AdminCategoryView";

import CreateProduct from "./Components/CreateProduct";
import UpdateProduct from "./Components/UpdateProduct";

import { BrowserRouter as Router } from "react-router-dom";
import PublicRoute from "./Components/PublicRoute";
import PrivateRoute from "./Components/PrivateRoute";
import Register from "./Components/Register";
import Categories from "./Components/Categories";
import CreateCategory from "./Components/CreateCategory";
import eachCategory from "./Components/EachCategory";

function App() {
  return (
    <Router>
      <div className="App">
        <PublicRoute restricted={false} component={Home} path="/" exact />
        <PublicRoute
          restricted={false}
          component={eachCategory}
          path="/categories/:slug"
          exact
        />
        <PublicRoute restricted={true} component={Login} path="/login" exact />
        <PublicRoute
          restricted={true}
          component={Register}
          path="/register"
          exact
        />
        <PublicRoute
          restricted={false}
          component={Categories}
          path="/categories"
        />
        <PrivateRoute component={AdminView} path="/adminview" exact />
        <PrivateRoute
          component={AdminProductView}
          path="/admin-product"
          exact
        />
        <PrivateRoute
          component={AdminCategoryView}
          path="/admin-category"
          exact
        />

        <PrivateRoute component={CreateProduct} path="/create-product" exact />
        <PrivateRoute component={UpdateProduct} path="/update-product" exact />

        <PrivateRoute
          component={CreateCategory}
          path="/create-category"
          exact
        />
        {/* <PrivateRoute component={Home} path="/home" exact />
        <PrivateRoute component={User} path="/user" exact />
        <PrivateRoute component={Profile} path="/profile/:username" exact />
        <PrivateRoute component={User} path="/username/:username" exact /> */}
      </div>
    </Router>
  );
}

export default App;
