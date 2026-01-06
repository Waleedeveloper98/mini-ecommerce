import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";

const NoProductFound = () => {
  return (
    <div className="w-full bg-gray-50 h-[calc(100vh-64px)] flex flex-col items-center justify-center md:justify-start gap-3">
      <div className="w-full md:w-1/2">
        <DotLottieReact src="/Empty-box.lottie" loop autoplay />
      </div>

      <div className="flex flex-col items-center justify-center text-center gap-1">
        <h3 className="font-semibold text-2xl text-gray-800">
          No Product Found
        </h3>
        <p className="text-gray-500 text-lg">Please try again later</p>
        <button className="bg-indigo-600 px-4 py-2 rounded-lg font-medium mt-3 hover:bg-indigo-700 text-white shadow-sm cursor-pointer">
          Refresh
        </button>
      </div>
    </div>
  );
};

export default NoProductFound;
