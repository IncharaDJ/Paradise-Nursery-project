import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity + 1,
      })
    );
  };

  const decreaseQuantity = () => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity - 1,
      })
    );
  };

  const handleRemove = () => {
    dispatch(removeItem(item.name));
  };

  return (
    <div>
      <h3>{item.name}</h3>

      <p>Price: ₹{item.price}</p>

      <div>
        <button onClick={decreaseQuantity}>−</button>

        <span> {item.quantity} </span>

        <button onClick={increaseQuantity}>+</button>
      </div>

      <p>
        Total: ₹{item.price * item.quantity}
      </p>

      <button onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
