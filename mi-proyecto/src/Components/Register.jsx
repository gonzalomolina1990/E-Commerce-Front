import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { createUser } from "../redux/actions/actions";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  //  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      url: "http://localhost:8000/api/v1/users/create",
      data: {
        name: name,
        lastname: lastname,
        password: password,
        address: address,
        email: email,
        phone: phone,
      },
    })
      .then((res) => {
        dispatch(createUser(res.data));
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="topcontainer">
        <div className="topbar">
          <i className="fab fa-twitter logocenter" aria-hidden="true"></i>
        </div>

        <div className="AppContent wrapper wrapper-signup" id="page-container">
          <link
            rel="stylesheet"
            href="https://abs.twimg.com/a/1511833274/css/t1/t1_signup.bundle.css"
          />
          <div className="page-canvas">
            <div className="signup-wrapper">
              <h1>Sign up on Twitter.</h1>
              <div className="t1-form signup" id="phx-signup-form">
                <form className="" onSubmit={handleSubmit}>
                  <div className="textbox">
                    <div className="prompt name">
                      <div data-fieldname="name" className="field">
                        <div className="sidetip">
                          <p
                            id="nameerror"
                            role="alert"
                            className="blank invalid error"
                          >
                            What's your name?
                          </p>
                        </div>
                        <input
                          type="text"
                          placeholder="Firstname"
                          aria-required="true"
                          maxLength="50"
                          name="name"
                          id="name"
                          className=""
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="prompt name">
                      <div data-fieldname="name" className="field">
                        <div className="sidetip">
                          <p
                            id="nameerror"
                            role="alert"
                            className="blank invalid error"
                          >
                            What's your lastname?
                          </p>
                        </div>
                        <input
                          type="text"
                          placeholder="Lastname"
                          aria-required="true"
                          maxLength="50"
                          name="lastname"
                          id="lastname"
                          className=""
                          onChange={(e) => setLastname(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="prompt email">
                      <div data-fieldname="email" className="field">
                        <div className="sidetip">
                          <p
                            id="emailerror"
                            role="alert"
                            className="invalid error"
                          >
                            Please enter a valid email.
                          </p>
                        </div>
                        <input
                          type="text"
                          placeholder="Email"
                          aria-required="true"
                          className="email-input"
                          id="email"
                          name="email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    {/*                     <div className="prompt name">
                      <div data-fieldname="name" className="field">
                        <div className="sidetip">
                          <p
                            id="uiderror"
                            role="alert"
                            className="blank invalid error"
                          >
                            Write a username
                          </p>
                        </div>
                        <input
                          type="text"
                          placeholder="User name"
                          aria-required="true"
                          maxLength="20"
                          id="uid"
                          className=""
                          name="username"
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                    </div> */}
                    <div className="prompt password">
                      <div data-fieldname="password" className="field">
                        <div className="sidetip">
                          <p
                            id="passerror"
                            role="alert"
                            className="blank error"
                          >
                            Please enter a password.
                          </p>
                        </div>
                        <input
                          type="password"
                          placeholder="Password"
                          aria-required="true"
                          id="password"
                          name="password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="prompt name">
                      <div data-fieldname="name" className="field">
                        <div className="sidetip">
                          <p
                            id="nameerror"
                            role="alert"
                            className="blank invalid error"
                          >
                            Put your address
                          </p>
                        </div>
                        <input
                          type="text"
                          placeholder="Put your description"
                          aria-required="true"
                          maxLength="20"
                          name="address"
                          id="address"
                          className=""
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="prompt name">
                      <div data-fieldname="name" className="field">
                        <div className="sidetip">
                          <p
                            id="nameerror"
                            role="alert"
                            className="blank invalid error"
                          >
                            Put your Phone
                          </p>
                        </div>
                        <input
                          type="text"
                          placeholder="Put your phone"
                          aria-required="true"
                          maxLength="50"
                          name="phone"
                          id="phone"
                          className=""
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="doit">
                    <div>
                      <input
                        type="submit"
                        value="Sign up"
                        name="button"
                        id="submit_button"
                        className="signup EdgeButton EdgeButton--primary EdgeButton--large submit"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
