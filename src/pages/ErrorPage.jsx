import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";

const ErrorPage = () => {
  return (
    <div className="fixed inset-0 w-full max-w-7xl m-auto text-center h-screen px-4 bg-gray-50 flex items-center justify-center flex-col space-y-4">
      <div className="rounded-full overflow-hidden">
        <DotLottieReact src="/404.lottie" loop autoplay />
      </div>
      <h3 className="text-gray-900 text-2xl font-semibold">
        Something went wrong
      </h3>
      <p className="text-gray-600 text-base max-w-md mx-auto">
        We couldn't load the products right now. This might be a temporary
        issue.
      </p>
      <div className="btns">
        <button className="cursor-pointer text-gray-600 hover:text-gray-900 text-sm hover:underline transition-all duration-200 px-6 py-2 rounded-lg font-semibold">
          Go Back
        </button>
        <button className="bg-red-600 cursor-pointer text-white hover:bg-red-700 active:bg-red-800 px-6 py-2 rounded-lg font-semibold">
          Retry
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
