import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaBolt,
  FaGasPump,
  FaTint,
} from "react-icons/fa";
import { MdPayments } from "react-icons/md";

const Bills = () => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bills")
      .then((res) => res.json())
      .then((data) => setBills(data))
      .catch((err) => console.error("Error fetching bills:", err));
  }, []);

  // Category Icon chooser
  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case "electricity":
        return <FaBolt className="text-yellow-500 text-xl" />;
      case "gas":
        return <FaGasPump className="text-orange-500 text-xl" />;
      case "water":
        return <FaTint className="text-blue-500 text-xl" />;
      case "payment":
        return <MdPayments className="text-green-500 text-xl" />;
      default:
        return <FaBolt className="text-gray-500 text-xl" />;
    }
  };

  return (
    <section className="py-16 px-6 lg:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Bills
      </h2>

      {bills.length === 0 ? (
        <p className="flex items-center justify-center py-20">
          <span className="loading loading-bars loading-xl"></span>
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bills.map((bill) => (
            <div
              key={bill._id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(bill.category)}
                      <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                        {bill.category}
                      </span>
                    </div>
                    <span className="text-xs bg-linear-to-r from-[#4B1CCB] to-[#8748FF] text-white py-1 px-3 rounded-full">
                      ৳{bill.amount}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-[#4B1CCB] transition-colors duration-200">
                    {bill.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {bill.description}
                  </p>

                  <div className="flex items-center text-gray-500 text-sm gap-2 mb-1">
                    <FaMapMarkerAlt className="text-[#4B1CCB]" />
                    {bill.location}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm gap-2">
                    <FaCalendarAlt className="text-[#8748FF]" />
                    {new Date(bill.date).toLocaleDateString("en-GB")}
                  </div>
                </div>

                <Link
                  to={`/bill-details/${bill._id}`}
                  className="mt-6 btn w-full bg-linear-to-r from-[#7A6AE0] to-[#9E8FF5] hover:from-[#6957DB] hover:to-[#8C7BF0] text-white border-none rounded-lg hover:scale-105 transition-transform duration-300"
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

export default Bills;
