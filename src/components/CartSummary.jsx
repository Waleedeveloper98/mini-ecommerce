import React from "react";
import { useNavigate } from "react-router-dom";

const CartSummary = ({
  cartProducts,
  setCartProducts,
  cartCount,
  cartItemsTotal,
}) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white h-fit rounded-md row-span-1 md:col-span-1 border border-gray-200 shadow-sm p-3 mb-10">
      <h3 className="text-gray-900 font-semibold text-xl pb-3">
        Order Summary
      </h3>
      <div className="details">
        <div className="flex justify-between items-center border-t border-gray-200 py-3">
          <h4 className="text-gray-600">Items</h4>
          <p className="text-gray-900">{cartCount}</p>
        </div>
        <div className="flex justify-between items-center border-t border-gray-200 py-3">
          <h4 className="text-gray-600">Subtotal</h4>
          <p className="text-gray-900">${cartItemsTotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between items-center border-t border-gray-200 py-3">
          <h4 className="text-gray-600 text-xl font-semibold">Total</h4>
          <p className="text-gray-900 font-semibold">
            ${cartItemsTotal.toFixed(2)}
          </p>
        </div>
        <button
          disabled={`${cartProducts.length <= 0 ? true : false}`}
          onClick={() => {
            navigate("/order-success");
            setCartProducts([]);
          }}
          className={`bg-indigo-500 ${
            cartProducts.length > 0
              ? "opacity-100 cursor-pointer"
              : "opacity-50 cursor-not-allowed"
          } text-white px-4 py-2 rounded-md shadow-sm`}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
