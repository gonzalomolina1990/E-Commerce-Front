import React from "react";
import "../App.css";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>HOME</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
