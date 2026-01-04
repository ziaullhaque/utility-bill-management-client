import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaBolt,
  FaGasPump,
  FaTint,
  FaWifi,
} from "react-icons/fa";
import RecentBillsSkeleton from "./RecentBillsSkeleton";

const RecentBills = () => {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("https://utility-bill-management.vercel.app/recent-bills")
  //     .then((res) => res.json())
  //     .then((data) => setBills(data))
  //     .catch((err) => console.error("Error fetching bills:", err));
  // }, []);
    useEffect(() => {
      fetch("https://utility-bill-management.vercel.app/recent-bills")
        .then((res) => res.json())
        .then((data) => {
          setBills(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching bills:", err);
          setLoading(false);
        });
    }, []);

  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case "electricity":
        return <FaBolt className="text-yellow-500 text-xl" />;
      case "gas":
        return <FaGasPump className="text-orange-500 text-xl" />;
      case "water":
        return <FaTint className="text-blue-500 text-xl" />;
      case "internet":
        return <FaWifi className="text-sky-500 text-xl" />;
      default:
        return <FaBolt className="text-gray-500 text-xl" />;
    }
  };

  return (
    // <section className="py-16 px-6 lg:px-20  bg-gradient-to-br from-[#F9F8FF] via-[#F1EEFF] to-[#E8E4FF] dark:from-[#111827] dark:via-[#1F2937] dark:to-[#111827] transition-colors duration-500">
    //   <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-10">
    //     Recent Utility Bills
    //   </h2>

    //   {bills.length === 0 ? (
    //     <p className="flex items-center justify-center py-20">
    //       <span className="loading loading-bars loading-xl"></span>
    //     </p>
    //   ) : (
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    //       {bills.map((bill) => (
    //         <div
    //           key={bill._id}
    //           className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
    //         >
    //           <div className="bg-base-100 rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1 duration-300">
    //             {/* Image Section */}
    //             <div className="relative w-full h-64 md:h-72 overflow-hidden group">
    //               <img
    //                 src={
    //                   bill.image || "https://i.ibb.co/q7LsWQx/default-bill.jpg"
    //                 }
    //                 alt={bill.title}
    //                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    //               />

    //               <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

    //               <span className="absolute top-4 right-4 bg-gradient-to-r from-[#4B1CCB] to-[#8748FF] text-white text-sm px-3 py-1 rounded-full shadow-lg">
    //                 ৳{bill.amount}
    //               </span>
    //             </div>

    //             {/* Content */}
    //             <div className="p-6 flex flex-col justify-between h-full">
    //               <div>
    //                 <div className="flex items-center gap-2 mb-3">
    //                   {getCategoryIcon(bill.category)}
    //                   <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 uppercase">
    //                     {bill.category}
    //                   </span>
    //                 </div>

    //                 <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
    //                   {bill.title}
    //                 </h3>

    //                 <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm gap-2 mb-1">
    //                   <FaMapMarkerAlt className="text-[#4B1CCB]" />
    //                   {bill.location}
    //                 </div>

    //                 <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm gap-2">
    //                   <FaCalendarAlt className="text-[#8748FF]" />
    //                   {new Date(bill.date).toLocaleDateString("en-GB")}
    //                 </div>
    //               </div>

    //               <Link
    //                 to={`/bill-details/${bill._id}`}
    //                 className="mt-6 btn w-full bg-gradient-to-r from-[#7A6AE0] to-[#9E8FF5] hover:from-[#6957DB] hover:to-[#8C7BF0] text-white border-none rounded-xl hover:scale-105 transition-transform duration-300"
    //               >
    //                 See Details
    //               </Link>
    //             </div>
    //           </div>

    //           {/* <div className="p-6 flex flex-col justify-between h-full">
    //             <div>
    //                 <img
    //                   src={
    //                     bill.image ||
    //                     "https://i.ibb.co/q7LsWQx/default-bill.jpg"
    //                   }
    //                   alt={bill.title}
    //                   className="w-full h-64 md:h-80 object-cover"
    //                 />
    //               <div className="flex items-center justify-between mb-4">
    //                 <div className="flex items-center gap-2">
    //                   {getCategoryIcon(bill.category)}
    //                   <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wide">
    //                     {bill.category}
    //                   </span>
    //                 </div>
    //                 <span className="text-xs bg-gradient-to-r from-[#4B1CCB] to-[#8748FF] text-white py-1 px-3 rounded-full">
    //                   ৳{bill.amount}
    //                 </span>
    //               </div>
    //               <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100 group-hover:text-[#9E8FF5] transition-colors duration-200">
    //                 {bill.title}
    //               </h3>
    //                [#4B1CCB]
    //                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
    //                 {bill.description}
    //               </p>
    //               <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm gap-2 mb-1">
    //                 <FaMapMarkerAlt className="text-[#4B1CCB]" />
    //                 {bill.location}
    //               </div>
    //               <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm gap-2">
    //                 <FaCalendarAlt className="text-[#8748FF]" />
    //                 {new Date(bill.date).toLocaleDateString("en-GB")}
    //               </div>
    //             </div>

    //             <Link
    //               to={`/bill-details/${bill._id}`}
    //               className="mt-6 btn w-full bg-gradient-to-r from-[#7A6AE0] to-[#9E8FF5] hover:from-[#6957DB] hover:to-[#8C7BF0] text-white border-none rounded-lg hover:scale-105 transition-transform duration-300"
    //             >
    //               See Details
    //             </Link>
    //           </div> */}
    //         </div>
    //       ))}
    //     </div>
    //   )}
    // </section>
    <section className="py-16 px-6 lg:px-20 bg-gradient-to-br from-[#F9F8FF] via-[#F1EEFF] to-[#E8E4FF] dark:from-[#111827] dark:via-[#1F2937] dark:to-[#111827]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100">
        Recent Utility Bills
      </h2>

      {/* ✅ Skeleton Loader */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(8)].map((_, i) => (
            <RecentBillsSkeleton key={i} />
          ))}
        </div>
      )}

      {!loading && bills.length === 0 && (
        <p className="text-center text-gray-500 py-20">No bills found 😕</p>
      )}

      {!loading && bills.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bills.map((bill) => (
            <div
              key={bill._id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={
                    bill.image || "https://i.ibb.co/q7LsWQx/default-bill.jpg"
                  }
                  alt={bill.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <span className="absolute top-4 right-4 bg-gradient-to-r from-[#4B1CCB] to-[#8748FF] text-white text-sm px-3 py-1 rounded-full z-10">
                  ৳{bill.amount}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    {getCategoryIcon(bill.category)}
                    <span className="text-sm font-semibold uppercase text-gray-700 dark:text-gray-200">
                      {bill.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                    {bill.title}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-1">
                    <FaMapMarkerAlt className="text-[#4B1CCB]" />
                    {bill.location}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <FaCalendarAlt className="text-[#8748FF]" />
                    {new Date(bill.date).toLocaleDateString("en-GB")}
                  </div>
                </div>

                {/* Button */}
                <Link
                  to={`/bill-details/${bill._id}`}
                  className="mt-auto btn w-full bg-gradient-to-r from-[#7A6AE0] to-[#9E8FF5] hover:from-[#6957DB] hover:to-[#8C7BF0] text-white border-none rounded-xl hover:scale-105 transition-transform duration-300 z-10"
                >
                  See Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default RecentBills;
