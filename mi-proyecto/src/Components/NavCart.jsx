import React, { useEffect, useState } from "react";
import "../App.css";

const NavCart = () => {
  return (
    <>
      <div className="cartStyle">
        <div className="cartNumber">
          <span>1</span>
        </div>
        <i className="fas fa-shopping-cart"></i>
      </div>
    </>
  );
};

export default NavCart;
