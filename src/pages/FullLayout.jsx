import React from "react";
import Home from "./Home";

const FullLayout = ({ allProducts, isLoading, handleAddToCart,cartProducts }) => {
  return (
    <div className="w-full flex flex-col gap-8">
      <Home
        allProducts={allProducts}
        isLoading={isLoading}
        handleAddToCart={handleAddToCart}
        cartProducts={cartProducts}
      />
    </div>
  );
};

export default FullLayout;
