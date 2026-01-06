import React from "react";
import CartItem from "../components/CartItem";
import CartHeader from "../components/CartHeader";
import CartSummary from "../components/CartSummary";
import CartItems from "../components/CartItems";
import EmptyCart from "../components/EmptyCart";
import { useOutletContext } from "react-router-dom";

const CartPage = () => {
  const { cartProducts, cartCount,cartItemsTotal } = useOutletContext();
  return (
    <div className="w-full h-[calc(100vh-64px)] min-h-screen p-3 md:p-6 md:px-12 bg-gray-50 flex flex-col gap-4 pb-28">
      <h4 className="title text-gray-900 text-2xl md:text-3xl font-medium md:font-semibold">
        Your Cart
      </h4>
      <div className="cart-main h-full w-full grid grid-cols-1 grid-rows-3 md:grid-rows-none pb-10 md:grid-cols-3 gap-4 md:gap-3 font-medium">
        <div className="bg-white border border-gray-200 rounded-md row-span-2 md:col-span-2 overflow-hidden">
          <div className="allCartItems overflow-y-auto h-full">
            <CartHeader />
            <CartItems cartProducts={cartProducts} />
          </div>
          {/* <EmptyCart /> */}
        </div>
        <CartSummary cartProducts={cartProducts} cartCount={cartCount} cartItemsTotal={cartItemsTotal} />
      </div>
    </div>
  );
};

export default CartPage;
