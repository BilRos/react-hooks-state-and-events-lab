import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, notInCart] = useState(false)

  const liClass = inCart? 'in-cart':"";

  function handleCart(){
    notInCart(!inCart)
  }

  const addToCart = !inCart?'Add to Cart':'Remove from Cart'

  return (
    <li className={liClass} onClick={handleCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" >{addToCart}</button>
    </li>
  );
}

export default Item;
