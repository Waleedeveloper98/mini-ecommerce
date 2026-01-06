import React from "react";

const ProductCard = ({ product, handleAddToCart }) => {
  const { id, title, description, price, images } = product;
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm shadow-black/5 hover:shadow-md transition-all duration-200 cursor-pointer w-75 max-w-80 md:max-w-67 h-100 max-h-105">
      {/* img */}
      <div className="w-full h-1/2 rounded-lg overflow-hidden">
        <img
          className="size-full object-cover object-top"
          src={images[0]}
          alt=""
        />
      </div>
      {/* product details */}
      <div className="product-details px-4 py-3 pb-5 flex flex-col gap-6">
        <h3 className="font-semibold text-gray-900 text-lg leading-6">
          {title}
        </h3>
        <p className="text-sm line-clamp-2">{description}</p>
        <div className="w-full flex items-center justify-between">
          <h5 className="price text-2xl font-bold text-indigo-600">${price}</h5>
          <button
            onClick={() => {
            return  handleAddToCart(product);
            }}
            className="bg-indigo-600 font-semibold rounded-2xl text-white px-4 py-2 cursor-pointer hover:bg-indigo-700 transition-all duration-200 active:bg-indigo-800 active:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
