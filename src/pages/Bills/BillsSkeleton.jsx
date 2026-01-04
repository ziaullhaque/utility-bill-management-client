import React from "react";

const BillsSkeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden animate-pulse flex flex-col">
      {/* Image Skeleton */}
      <div className="w-full h-48 bg-gray-300 dark:bg-gray-700"></div>

      {/* Content Skeleton */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          {/* Category + Amount */}
          <div className="flex items-center justify-between mb-4">
            <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="h-4 w-12 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>

          {/* Title */}
          <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-700 rounded mb-3"></div>

          {/* Location */}
          <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>

          {/* Date */}
          <div className="h-4 w-1/3 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>

        {/* Button */}
        <div className="h-10 w-full bg-gray-300 dark:bg-gray-700 rounded mt-6"></div>
      </div>
    </div>
  );
};

export default BillsSkeleton;
