import React from "react";
import "./styles.css";
import AllItems from "./AllItems";
import CartItems from "./Cart";

const CartRedux = () => {
  return (
    <div className="cart-wrapper">
      <AllItems />
      <CartItems />
    </div>
  );
};

export default CartRedux;
