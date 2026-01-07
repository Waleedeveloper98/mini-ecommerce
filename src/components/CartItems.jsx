import React from "react";
import CartItem from "./CartItem";
import { useOutletContext } from "react-router-dom";
import EmptyCart from "./EmptyCart";

const CartItems = ({ onPlus, onMinus,cartProducts,onDelete, }) => {
  return (
    <div className="size-full">
      {cartProducts.length > 0 ?
        cartProducts.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            onPlus={onPlus}
            onMinus={onMinus}
            onDelete={onDelete}
          />
        )):<EmptyCart />}
    </div>
  );
};

export default CartItems;
