import { useParams } from "react-router";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTag,
  FaMoneyBillWave,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const BillDetails = () => {
  const { id } = useParams();
  const [bill, setBill] = useState(null);
  const [error, setError] = useState(false);
  const [isCurrentMonth, setIsCurrentMonth] = useState(false);

  //  Fetch single bill data
  useEffect(() => {
    fetch(`http://localhost:3000/bills/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.success && data?.result) {
          setBill(data.result);
          checkCurrentMonth(data.result.date);
        } else {
          setError(true);
        }
      })
      .catch((err) => {
        console.error("Error fetching bill details:", err);
        setError(true);
      });
  }, [id]);

  //  Check if the bill belongs to the current month
  const checkCurrentMonth = (billDate) => {
    const billMonth = new Date(billDate).getMonth();
    const billYear = new Date(billDate).getFullYear();
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    setIsCurrentMonth(billMonth === currentMonth && billYear === currentYear);
  };

  //  Handle Pay Button
  const handlePay = () => {
    Swal.fire({
      title: "Payment Successful ",
      text: `You have paid ${bill.amount}৳ for ${bill.title}`,
      icon: "success",
      confirmButtonColor: "#4B1CCB",
    });
  };

  //  Loading state
  if (!bill && !error) {
    return (
      <p className="flex items-center justify-center h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </p>
    );
  }

  //  Error state
  if (error) {
    return (
      <div className="text-center mt-32 text-red-500 text-lg">
        Failed to load bill details. Please try again later.
      </div>
    );
  }

  //  UI Layout
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-20">
      <div className="bg-base-100 rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.01]">
        {/* Image */}
        <img
          src={bill.image || "https://i.ibb.co/q7LsWQx/default-bill.jpg"}
          alt={bill.title}
          className="w-full h-64 md:h-80 object-cover"
        />

        <div className="p-6 sm:p-8 space-y-5">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#4B1CCB]">
            {bill.title}
          </h1>

          {/* Info Row */}
          <div className="flex flex-wrap gap-4 text-gray-700">
            <p className="flex items-center gap-2">
              <FaTag className="text-[#4B1CCB]" /> {bill.category}
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#4B1CCB]" /> {bill.location}
            </p>
            <p className="flex items-center gap-2">
              <FaCalendarAlt className="text-[#4B1CCB]" />{" "}
              {new Date(bill.date).toLocaleDateString()}
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">{bill.description}</p>

          {/* Amount Box */}
          <div className="flex items-center justify-between bg-base-200 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <FaMoneyBillWave className="text-green-500" /> Amount:
            </div>
            <p className="text-2xl font-bold text-[#4B1CCB]">{bill.amount}৳</p>
          </div>

          {/* Pay Button */}
          <div className="pt-6 text-center">
            {isCurrentMonth ? (
              <button
                onClick={handlePay}
                className="btn bg-linear-to-r from-[#4B1CCB] to-[#8748FF] text-white px-10 hover:shadow-lg transition-all"
              >
                Pay Bill
              </button>
            ) : (
              <div>
                <button
                  disabled
                  className="btn bg-gray-400 text-white cursor-not-allowed px-10"
                >
                  Pay Bill
                </button>
                <p className="text-red-500 mt-3 text-sm">
                  Only current month bills can be paid.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillDetails;

// import { useParams } from "react-router";
// import {
//   FaMapMarkerAlt,
//   FaCalendarAlt,
//   FaTag,
//   FaMoneyBillWave,
// } from "react-icons/fa";
// import { useEffect, useState } from "react";
// // import { AuthContext } from "../../contexts/AuthContext";
// import Swal from "sweetalert2";

// const BillDetails = () => {
//   const { id } = useParams();
//   // const { user } = useContext(AuthContext);
//   const [bill, setBill] = useState(null);
//   const [error, setError] = useState(false);
//   const [isCurrentMonth, setIsCurrentMonth] = useState(false);

//   console.log(bill);
//   //  Fetch single bill data
//   useEffect(() => {
//     fetch(`http://localhost:3000/bills/${id}`)
//       .then((res) => {
//         // if (!res.ok) throw new Error("Bill not found");
//         return res.json();
//       })
//       .then((data) => {
//         setBill(data);
//         checkCurrentMonth(data.date);
//       })
//       .catch((err) => {
//         console.error("Error fetching bill details:", err);
//         setError(true);
//       });
//   }, [id]);

//   //  Check if the bill belongs to current month
//   const checkCurrentMonth = (billDate) => {
//     const billMonth = new Date(billDate).getMonth();
//     const currentMonth = new Date().getMonth();
//     const billYear = new Date(billDate).getFullYear();
//     const currentYear = new Date().getFullYear();

//     setIsCurrentMonth(billMonth === currentMonth && billYear === currentYear);
//   };

//   //  Handle Pay
//   const handlePay = () => {
//     Swal.fire({
//       title: "Payment Successful ",
//       text: `You have paid ${bill.amount}৳ for ${bill.title}`,
//       icon: "success",
//       confirmButtonColor: "#4B1CCB",
//     });
//   };

//   //  Loading state
//   if (!bill && !error) {
//     return (
//       <p className="flex items-center justify-center h-screen">
//         <span className="loading loading-bars loading-lg"></span>
//       </p>
//     );
//   }

//   // // Error state
//   // if (error) {
//   //   return (
//   //     <div className="text-center mt-32 text-red-500 text-lg">
//   //       Failed to load bill details. Please try again later.
//   //     </div>
//   //   );
//   // }

//   return (
//     <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20">
//       <div className="bg-base-100 rounded-xl shadow-lg overflow-hidden">
//         <img
//           src={bill.image || "https://i.ibb.co/q7LsWQx/default-bill.jpg"}
//           alt={bill.title}
//           className="w-full h-64 object-cover"
//         />

//         <div className="p-8 space-y-5">
//           {/* Title */}
//           <h1 className="text-3xl md:text-4xl font-bold text-[#4B1CCB]">
//             {bill.title}
//           </h1>

//           {/* Category, Location, Date */}
//           <div className="flex flex-wrap gap-4 text-gray-700">
//             <p className="flex items-center gap-2">
//               <FaTag className="text-[#4B1CCB]" /> {bill.category}
//             </p>
//             <p className="flex items-center gap-2">
//               <FaMapMarkerAlt className="text-[#4B1CCB]" /> {bill.location}
//             </p>
//             <p className="flex items-center gap-2">
//               <FaCalendarAlt className="text-[#4B1CCB]" />{" "}
//               {new Date(bill.date).toLocaleDateString()}
//             </p>
//           </div>

//           {/* Description */}
//           <p className="text-gray-600 leading-relaxed">{bill.description}</p>

//           {/* Amount */}
//           <div className="flex items-center justify-between bg-base-200 p-4 rounded-lg">
//             <div className="flex items-center gap-2 text-lg font-semibold">
//               <FaMoneyBillWave className="text-green-500" /> Amount:
//             </div>
//             <p className="text-2xl font-bold text-[#4B1CCB]">{bill.amount}৳</p>
//           </div>

//           {/* Pay Button */}
//           <div className="pt-6 text-center">
//             {isCurrentMonth ? (
//               <button
//                 onClick={handlePay}
//                 className="btn bg-linear-to-r from-[#4B1CCB] to-[#8748FF] text-white px-10"
//               >
//                 Pay Bill
//               </button>
//             ) : (
//               <div>
//                 <button
//                   disabled
//                   className="btn bg-gray-400 text-white cursor-not-allowed px-10"
//                 >
//                   Pay Bill
//                 </button>
//                 <p className="text-red-500 mt-3 text-sm">
//                   Only current month bills can be paid.
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BillDetails;
