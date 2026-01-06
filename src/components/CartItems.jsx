import React from "react";
import CartItem from "./CartItem";
import { useOutletContext } from "react-router-dom";

const CartItems = () => {
  const { cartProducts } = useOutletContext();
  return (
    <div>
      {cartProducts.length > 0 && cartProducts.map((product) => <CartItem key={product.id} product={product}/>)}
    </div>
  );
};

export default CartItems;
