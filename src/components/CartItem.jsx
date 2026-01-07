import { Minus, Plus, Trash2 } from "lucide-react";
import React, { useState } from "react";

const CartItem = ({ product, onPlus, onMinus,onDelete }) => {
  const { title, price, images, quantity } = product;

 
  return (
    <div className="border-b border-gray-100 hover:bg-gray-50 transition-all duration-200 px-1 grid grid-cols-4 md:grid-cols-6 md:py-1">
      <div className="flex items-center justify-center py-2 md:py-3 px-1 h-full col-span-1">
        <div className="product-img size-10 md:size-12 bg-gray-100 rounded-md overflow-hidden shadow-sm">
          <img className="size-full object-cover" src={images[0]} alt="" />
        </div>
      </div>

      <div className="py-2 md:py-3 px-1 col-span-2">
        <h3 className="text-sm">{title}</h3>
        <h4 className="text-indigo-600 font-medium">
          ${(price * quantity).toFixed(2)}
        </h4>
      </div>

      <div className="col-span-1 hidden md:flex items-center justify-center">
        <div className="quantity-count flex gap-1">
          <button
            onClick={() => onMinus(product.id)}
            className="bg-gray-50 hover:bg-gray-100 transition-all duration-200 px-2 md:py-3 rounded-sm cursor-pointer text-gray-800"
          >
            <Minus size={14} />
          </button>
          <input
            className="w-8 flex items-center justify-center text-center rounded-sm outline-none border-none pointer-none"
            type="text"
            value={quantity}
            readOnly
          />
          <button
            onClick={() => onPlus(product.id)}
            className="bg-gray-50 hover:bg-gray-100 transition-all px-2 md:py-3 rounded-sm cursor-pointer duration-200 text-gray-800"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>
      <div className="col-span-1 hidden md:flex items-center justify-center">
        <h6 className="text-sm font-medium text-gray-900">{quantity}</h6>
      </div>

      <div className="py-2 md:py-3 px-1 col-span-1 flex items-center justify-center">
        <button onClick={()=> onDelete(title)} className="bg-red-500 text-white px-4 py-1 md:py-2 rounded-sm cursor-pointer hover:bg-red-600 transition-all duration-200">
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
