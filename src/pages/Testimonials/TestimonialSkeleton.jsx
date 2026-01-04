import React from "react";

const TestimonialSkeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 animate-pulse text-center">
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mx-auto mb-4"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mx-auto mb-4"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/3 mx-auto mb-6"></div>

      <div className="flex justify-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-4 h-4 bg-gray-300 dark:bg-gray-700 rounded"
          ></div>
        ))}
      </div>

      <div className="w-16 h-16 rounded-full bg-gray-300 dark:bg-gray-700 mx-auto mb-3"></div>
      <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded mx-auto mb-2"></div>
      <div className="h-3 w-20 bg-gray-300 dark:bg-gray-700 rounded mx-auto"></div>
    </div>
  );
};

export default TestimonialSkeleton;
