import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartAction } from "../redux/actions";

const CartItem = ({ item }) => {
  const { id, image, title, price, quantity } = item;
  const dispatch = useDispatch();
  return (
    <div className="cart-item">
      <Link to={`/product/${id}`}>
        <img className="cart-item-img" alt="img" src={image} />
      </Link>
      <div>
        <h3>{title}</h3>
        <p>Price: ${price}</p>
        <div>
          Quantity:
          <span onClick={() => dispatch(cartAction.increase(id))}>
            <i className="add icon"></i>
          </span>
          {quantity}
          <span onClick={() => dispatch(cartAction.decrease(id))}>
            <i className="minus icon"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
