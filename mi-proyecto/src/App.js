import "./App.css";
import Login from "./Components/Login";
import Home from "./Components/Home";
import AdminView from "./Components/AdminView";

import { BrowserRouter as Router } from "react-router-dom";
import PublicRoute from "./Components/PublicRoute";
import PrivateRoute from "./Components/PrivateRoute";
import Register from "./Components/Register";
import Categories from "./Components/Categories";

function App() {
  return (
    <Router>
      <div className="App">
        <PublicRoute restricted={false} component={Home} path="/" exact />
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
          exact
        />
        <PrivateRoute component={AdminView} path="/adminview" exact />

        {/* <PrivateRoute component={Home} path="/home" exact />
        <PrivateRoute component={User} path="/user" exact />
        <PrivateRoute component={Profile} path="/profile/:username" exact />
        <PrivateRoute component={User} path="/username/:username" exact /> */}
      </div>
    </Router>
  );
}

export default App;
