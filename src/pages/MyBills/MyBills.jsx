import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";

const MyBills = () => {
  const { user } = useContext(AuthContext);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/payments?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setPayments(data.result);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching payments:", err);
        setLoading(false);
      });
  }, [user]);

//   // Download bill as txt
//   const handleDownload = (bill) => {
//     const data = `
//       Bill Title: ${bill.billTitle}
//       Amount: ${bill.amount}৳
//       Date: ${new Date(bill.date).toLocaleDateString()}
//       Address: ${bill.address || "Not provided"}
//     `;
//     const blob = new Blob([data], { type: "text/plain" });
//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(blob);
//     link.download = `${bill.billTitle || "Bill"}-${bill._id}.txt`;
//     link.click();
//   };

  //  Delete single bill
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you won’t be able to recover this bill!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/payments/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success || data.deletedCount > 0) {
              // Remove from UI
              setPayments((prev) => prev.filter((bill) => bill._id !== id));

              Swal.fire({
                title: "Deleted!",
                text: "Your bill has been removed.",
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
              });
            }
          })
          .catch((err) => {
            console.error(err);
            Swal.fire({
              icon: "error",
              title: "Error!",
              text: "Failed to delete bill.",
            });
          });
      }
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  if (payments.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500 text-lg">
        No bills paid yet.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 mt-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
        My Bills: <span className="text-[#632EE3]">{payments.length}</span>
      </h1>

      <div className="overflow-x-auto bg-base-100 shadow-md rounded-xl">
        <table className="table w-full text-center">
          <thead className="bg-base-200">
            <tr className="text-sm text-gray-700">
              <th>SL No</th>
              <th>Bill Title</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((bill, i) => (
              <tr key={bill._id} className="hover:bg-base-200">
                <td>{i + 1}</td>
                <td className="font-semibold text-[#4B1CCB]">
                  {bill.billTitle || "Utility Bill"}
                </td>
                <td className="text-green-600 font-medium">{bill.amount} ৳</td>
                <td>{new Date(bill.date).toLocaleDateString()}</td>
                <td>{bill.address || "Not provided"}</td>
                <td className="space-x-2">
                  <button
                    // onClick={() => handleDownload(bill)}
                    className="btn btn-xs btn-outline text-[#632EE3] border-[#632EE3]"
                  >
                    Download
                  </button>
                  <button
                    onClick={() => handleDelete(bill._id)}
                    className="btn btn-xs btn-outline text-red-500 border-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBills;

