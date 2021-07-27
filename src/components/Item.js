import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);
  const checkingCart = () => {
    setInCart((prevCart) => !prevCart);
  };
  const cart = inCart ? "in-cart" : "";
  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={checkingCart}>
        Add to Cart
      </button>
    </li>
  );
}

export default Item;
