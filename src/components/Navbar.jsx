import { ShoppingBag } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({cartCount}) => {
  return (
    <nav className="w-full px-6 md:px-12 flex items-center justify-between h-16 bg-white text-slate-900 border-b border-slate-200 shadow-sm">
      <h2 className="font-semibold text-lg text-slate-900 md:text-2xl">
        MiniStore
      </h2>

      <div className="flex items-center gap-5 md:gap-20">
        <a className="font-medium text-sm md:text-base md:cursor-pointer" href="#">Products</a>
        <Link to={"/cart"} className="relative cursor-pointer">
        <div className="counter size-3.5 bg-indigo-600 rounded-full absolute -top-2 -right-2 flex items-center justify-center text-[8px] font-bold text-white">
          {cartCount}
        </div>
        <ShoppingBag className="text-slate-700 hover:text-indigo-600" />
      </Link>
      </div>
    </nav>
  );
};

export default Navbar;
