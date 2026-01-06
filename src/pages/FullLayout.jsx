import React from "react";
import Home from "./Home";

const FullLayout = ({ allProducts, isLoading, handleAddToCart }) => {
  return (
    <div className="w-full flex flex-col gap-8">
      <Home
        allProducts={allProducts}
        isLoading={isLoading}
        handleAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default FullLayout;
