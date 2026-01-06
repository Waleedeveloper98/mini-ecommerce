import React from "react";
import CartHeaderItem from "./CartHeaderItem";

const CartHeader = () => {
  return (
    <div className="header h-14 bg-zinc-100 grid grid-cols-4 md:grid-cols-6 text-gray-900">
     <CartHeaderItem className={"col-span-1 border-gray-300"} title={"Product"}/>
     <CartHeaderItem className={"col-span-2 border-gray-300"} title={"Title"}/>
     <CartHeaderItem className={"col-span-1 text-center  border-gray-300 hidden md:flex"} title={"Qty"}/>
     <CartHeaderItem className={"col-span-1 text-center border-gray-300 hidden md:flex"} title={"Total Qty"}/>
     <CartHeaderItem className={"col-span-1 text-center border-gray-300"} title={"Delete"}/>
    </div>
  );
};

export default CartHeader;
