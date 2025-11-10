// import React from "react";
import { FaBolt, FaGasPump, FaTint, FaWifi } from "react-icons/fa";

const categories = [
  {
    id: 1,
    name: "Electricity",
    desc: "Pay your electricity bills quickly and securely.",
    icon: <FaBolt />,
    bg: "bg-[#E8E4FF]",
    iconBg: "bg-gradient-to-r from-[#4B1CCB] to-[#8748FF]",
  },
  {
    id: 2,
    name: "Gas",
    desc: "Manage and pay gas bills with ease.",
    icon: <FaGasPump />,
    bg: "bg-[#FFF2E0]",
    iconBg: "bg-gradient-to-r from-[#FF7A00] to-[#FFB347]",
  },
  {
    id: 3,
    name: "Water",
    desc: "Stay on top of your water usage and bills.",
    icon: <FaTint />,
    bg: "bg-[#E0F7FA]",
    iconBg: "bg-gradient-to-r from-[#00B4DB] to-[#0083B0]",
  },
  {
    id: 4,
    name: "Internet",
    desc: "Pay broadband and WiFi bills in one click.",
    icon: <FaWifi />,
    bg: "bg-[#E3F2FD]",
    iconBg: "bg-gradient-to-r from-[#007bff] to-[#00C6FF]",
  },
];

const Category = () => {
  return (
    <section className="py-16 px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Bill Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`${cat.bg} rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300`}
          >
            <div className={`flex items-center justify-center h-40 ${cat.iconBg} text-white text-5xl`}>
              {cat.icon}
            </div>
            <div className="bg-white text-center py-6 px-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{cat.name}</h3>
              <p className="text-gray-500 text-sm">{cat.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
