import { Button } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../../store/cartSlice";

const CartItems = () => {
  const dispatch = useDispatch();
  const cartItemsList = useSelector((state) => state.cart).products || [];

  const handleIncrement = (item) => {
    dispatch(increaseQuantity(item));
  };

  const handleDecrement = (item) => {
    dispatch(decreaseQuantity(item));
  };

  return (
    <div className="cart">
      {cartItemsList.map((item) => (
        <div key={item.id} className="product">
          <p>{item.title}</p>
          <p>{item.description}</p>
          <Button onClick={() => handleDecrement(item)}>-</Button>
          {item.quantity}
          <Button onClick={() => handleIncrement(item)}>+</Button>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
