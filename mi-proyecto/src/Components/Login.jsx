import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/actions";
import { useHistory } from "react-router-dom";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const handleLogin = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      url: "http://localhost:8000/api/v1/users/find",
      data: {
        password: password,
        email: email,
      },
    })
      .then((res) => {
        dispatch(login(res.data));
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setPassword(event.target.value);
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="mt-4">Iniciar Sesión</h3>
            <form className={classes.margin} noValidate autoComplete="off">
              <div className="form-group mt-5">
                <InputLabel htmlFor="email">E-mail</InputLabel>
                <Input
                  type="text"
                  id="email"
                  name="email"
                  placeholder=" Ej: tunombre@mail.com"
                  startAdornment={
                    <InputAdornment>
                      <AccountCircle />
                    </InputAdornment>
                  }
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  id="password"
                  name="password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </div>

              <Button
                type="button"
                className="mt-3"
                variant="contained"
                color="primary"
                onClick={(e) => {
                  handleLogin(e);
                }}
              >
                Iniciar sesión
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
