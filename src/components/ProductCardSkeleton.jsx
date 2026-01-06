import React from "react";
import Skeleton from "./Skeleton";

const ProductCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm shadow-black/5 hover:shadow-md transition-all duration-200 cursor-pointer w-75 max-w-80 md:max-w-67">
      <div className="w-full rounded-lg overflow-hidden">
        <Skeleton className={"w-full h-50 max-h-50"} />
      </div>
      <div className="px-4 py-3 pb-5 flex flex-col gap-4">
        {/* title */}
        <div className="title w-full flex flex-col gap-1.5">
          <Skeleton className={"w-full h-3.5 "} />
          <Skeleton className={"w-4/5 h-3"} />
        </div>
        {/* description */}
        <div className="title w-full flex flex-col gap-1.5 mt-5">
          <Skeleton className={"w-full h-2.5 "} />
          <Skeleton className={"w-full h-2"} />
        </div>
        {/* price & add to cart */}
        <div className="w-full flex items-center justify-between mt-4">
          <Skeleton className={"w-20 h-7"} />
          <Skeleton className={"w-30 h-9"} />
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
