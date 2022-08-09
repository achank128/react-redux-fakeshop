import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { amountSelector } from "../redux/selectors";

const Header = () => {
  const amount = useSelector(amountSelector);

  return (
    <div className="ui fixed menu">
      <div className="ui container center header">
        <Link to="/">
          <h2>FakeShop</h2>
        </Link>
        <Link to="/cart">
          <span className="cart-icon">
            <i className="shop icon"></i>
            {amount}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
