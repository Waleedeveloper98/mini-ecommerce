import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const ThankyouPage = () => {
    const navigate = useNavigate()
  return (
    <div className="bg-gray-50 h-screen flex flex-col items-center justify-center gap-4">
        <div>
            <DotLottieReact src="/Delivery.lottie" autoplay loop/>
        </div>
      <div className="content max-w-md text-center space-y-4">
        <h3 className="text-gray-900 text-2xl font-semibold">Thank you for your order!</h3>
        <p className="text-gray-600 text-base leading-relaxed">Your order has been placed successfully and is on the way.</p>
        <button onClick={()=> navigate("/")} className="text-indigo-600 hover:text-indigo-700 transition-all duration-200 font-medium px-4 py-2 rounded-md cursor-pointer hover:underline">Continue Shopping</button>
      </div>
    </div>
  );
};

export default ThankyouPage;
