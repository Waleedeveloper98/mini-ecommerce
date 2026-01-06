import React from "react";
import ProductCard from "./ProductCard";
import Skeleton from "./Skeleton";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductsGrid = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 md:py-12 bg-gray-50 flex flex-col gap-4">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 leading-none tracking-tight">
        All Products
      </h2>
      <div className="allproducts grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center md:justify-items-start">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        {/* <ProductCardSkeleton /> */}
      </div>
    </div>
  );
};

export default ProductsGrid;
