import React from "react";
import ProductsGrid from "../components/ProductsGrid";
import Banner from "../components/Banner";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const { allProducts, isLoading, handleAddToCart } = useOutletContext();
  return (
    <div className="w-full flex flex-col gap-8 py-10">
      <Banner />
      <ProductsGrid
        allProducts={allProducts}
        isLoading={isLoading}
        handleAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default Home;
