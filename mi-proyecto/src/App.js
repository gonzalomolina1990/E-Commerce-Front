import "./App.css";
import Login from "./Components/Login";
import Home from "./Components/Home";

import { BrowserRouter as Router } from "react-router-dom";
import PublicRoute from "./Components/PublicRoute";
import Register from "./Components/Register";

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

        {/* <PrivateRoute component={Home} path="/home" exact />
        <PrivateRoute component={User} path="/user" exact />
        <PrivateRoute component={Profile} path="/profile/:username" exact />
        <PrivateRoute component={User} path="/username/:username" exact /> */}
      </div>
    </Router>
  );
}

export default App;
