import React from "react";

const CartHeaderItem = ({ title,className }) => {
  return (
    <div className={`border-r ${className} h-full flex justify-start items-center pl-4`}>
      <h2>{title}</h2>
    </div>
  );
};

export default CartHeaderItem;
