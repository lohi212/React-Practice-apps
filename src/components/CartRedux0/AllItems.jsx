import React from "react";
import { items } from "./utils";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

const AllItems = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="all-items-wrapper">
      {items.map((item) => (
        <div key={item.id} className="product">
          <p>{item.title}</p>
          <p>{item.description}</p>
          <Button
            onClick={() => {
              handleAddToCart(item);
            }}
          >
            Add to Cart
          </Button>
        </div>
      ))}
    </div>
  );
};

export default AllItems;
