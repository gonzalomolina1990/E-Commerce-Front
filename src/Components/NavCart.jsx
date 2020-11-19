import React, { useEffect, useState } from "react";
import "../App.css";
import { useSelector } from "react-redux";

const NavCart = () => {
  const cart = useSelector((state) => state.cart);

  const totalProduct = cart.map((item) => {
    const totalUnit = item.quantity;
    return totalUnit;
  });

  const total = totalProduct.reduce((a, b) => a + b, 0);

  return (
    <>
      <div className="cartStyle">
        {cart.length !== 0 && (
          <div className="cartNumber">
            <span>{cart && total}</span>
          </div>
        )}
        <i className="fas fa-shopping-cart"></i>
      </div>
    </>
  );
};

export default NavCart;
