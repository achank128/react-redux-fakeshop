import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { cartSelector, totalSelector } from "../redux/selectors";

const Cart = () => {
  const cart = useSelector(cartSelector);
  const total = useSelector(totalSelector);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="cart ui container">
      {cart.length > 0 ? (
        cart.map((item) => <CartItem item={item} />)
      ) : (
        <div>Your cart is currently empty.</div>
      )}
      <div className="cart-bottom">
        <h2 className="cart-total">Total: ${total}</h2>
      </div>
    </div>
  );
};

export default Cart;
