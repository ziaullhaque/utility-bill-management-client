import React from "react";

const RecentBillsSkeleton = () => {
  return (
    <div className="animate-pulse bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
      <div className="h-64 bg-gray-300 dark:bg-gray-700"></div>

      <div className="p-6 space-y-3">
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/3"></div>
        <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
        <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded mt-4"></div>
      </div>
    </div>
  );
};

export default RecentBillsSkeleton;
