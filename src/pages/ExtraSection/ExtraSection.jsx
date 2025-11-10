// import React from "react";

// const ExtraSection = () => {
//   return (
//     <div>
      
     
//       <section className="py-16 px-6 lg:px-20 bg-base-100">
//         <h2 className="text-3xl font-bold text-center mb-10">
//           Why Choose Utility Bills?
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
//           <div className="p-6 bg-white shadow-md rounded-xl">
//             <h3 className="text-xl font-semibold mb-2">🕒 Save Time</h3>
//             <p>
//               Pay and track your bills from one dashboard anytime, anywhere.
//             </p>
//           </div>
//           <div className="p-6 bg-white shadow-md rounded-xl">
//             <h3 className="text-xl font-semibold mb-2">💳 Easy Payment</h3>
//             <p>Multiple payment methods with real-time confirmation system.</p>
//           </div>
//           <div className="p-6 bg-white shadow-md rounded-xl">
//             <h3 className="text-xl font-semibold mb-2">🔔 Smart Reminder</h3>
//             <p>
//               Get notified before your due date so you never miss a bill again!
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ExtraSection;
import React from "react";
import { FaClock, FaCreditCard, FaBell } from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "Save Time",
    desc: "Pay and track your bills from one dashboard anytime, anywhere.",
    icon: <FaClock />,
    color: "from-[#4B1CCB] to-[#8748FF]",
  },
  {
    id: 2,
    title: "Easy Payment",
    desc: "Multiple payment methods with real-time confirmation system.",
    icon: <FaCreditCard />,
    color: "from-[#007bff] to-[#00C6FF]",
  },
  {
    id: 3,
    title: "Smart Reminder",
    desc: "Get notified before your due date so you never miss a bill again!",
    icon: <FaBell />,
    color: "from-[#FF7A00] to-[#FFB347]",
  },
];

const ExtraSection = () => {
  return (
    <section className="py-16 px-6 lg:px-20 bg-gradient-to-r from-[#B6ADEF] to-[#CDC6F2]">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Why Choose <span className="text-[#7A6AE0]">Utility Bills?</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center p-8 flex flex-col items-center"
          >
            <div
              className={`text-5xl bg-gradient-to-r ${item.color} text-white rounded-full p-5 mb-6 shadow-md`}
            >
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExtraSection;
