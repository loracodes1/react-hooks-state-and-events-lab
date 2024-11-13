// Item.js
import React, { useState } from "react";

function Item({ name, category }) {
  // State to track if the item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // Toggle function for cart state
  const handleAddToCart = () => {
    setIsInCart((prevState) => !prevState);
  };

  // Dynamic class based on whether the item is in the cart
  const itemClass = isInCart ? "in-cart" : "";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCart} className="add">
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
