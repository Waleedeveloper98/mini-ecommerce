import React from "react";

const ProductCard = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm shadow-black/5 hover:shadow-md transition-all duration-200 cursor-pointer w-75 max-w-80 md:max-w-67">
      {/* img */}
      <div className="w-full rounded-lg overflow-hidden">
        <img
          className="size-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW1yhlTpkCnujnhzP-xioiy9RdDQkKLMnMSg&s"
          alt=""
        />
      </div>
      {/* product details */}
      <div className="product-details px-4 py-3 pb-5 flex flex-col gap-4">
        <h3 className="font-semibold text-gray-900 text-lg leading-6">
          Wireless Noise Cancelling Headphones
        </h3>
        <p className="text-sm">
          High-quality sound with active noise cancellation.
        </p>
        <div className="w-full flex items-center justify-between">
          <h5 className="price text-2xl font-bold text-indigo-600">$129.99</h5>
          <button className="bg-indigo-600 font-semibold rounded-2xl text-white px-4 py-2 cursor-pointer hover:bg-indigo-700 transition-all duration-200 active:bg-indigo-800 active:scale-95">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
