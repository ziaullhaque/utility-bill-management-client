import React from "react";

const AddBillSkeleton = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-[#E8E4FF] via-[#F4F2FF] to-[#FCFBFF] dark:from-[#111827] dark:via-[#1F2937] dark:to-[#111827] p-6 mt-16">
      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8 w-full max-w-3xl animate-pulse">
        <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-2/3 mx-auto mb-8"></div>

        {[...Array(8)].map((_, i) => (
          <div key={i} className="mb-6">
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4 mb-2"></div>
            <div className="h-12 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>
        ))}

        <div className="flex justify-center mt-6">
          <div className="h-12 w-40 bg-gray-300 dark:bg-gray-700 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default AddBillSkeleton;
