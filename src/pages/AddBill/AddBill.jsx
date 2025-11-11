import React, { useContext } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { AuthContext } from "../../contexts/AuthContext";

const AddBill = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title: e.target.title.value,
      category: e.target.category.value,
      amount: e.target.amount.value,
      location: e.target.location.value,
      image: e.target.image.value,
      date: e.target.date.value,
      description: e.target.description.value,
      created_at: new Date(),
      email: user?.email || "unknown@gmail.com",
    };

    console.log(formData);

    fetch("https://utility-bill-management.vercel.app/bills", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Bill Added Successfully!",
          text: "Your new bill has been saved to the database.",
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Something went wrong!",
          text: "Please check your server connection.",
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-[#8F7FF0] via-[#9E8FF5] to-[#C2BAFF] p-6 py-30">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-3xl"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center bg-linear-to-r from-[#7A6AE0] to-[#9E8FF5] bg-clip-text text-transparent mb-8">
          Add a New Bill
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* title */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Bill Title
            </label>
            <input
              type="text"
              name="title"
              required
              placeholder="Enter bill title"
              className="input input-bordered w-full"
            />
          </div>

          {/* category */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Category
            </label>
            <select
              name="category"
              required
              className="select select-bordered w-full"
            >
              <option value="">Select Category</option>
              <option value="Electricity">Electricity</option>
              <option value="Gas">Gas</option>
              <option value="Water">Water</option>
              <option value="Internet">Internet</option>
            </select>
          </div>

          {/* amount */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Amount (৳)
            </label>
            <input
              type="number"
              name="amount"
              required
              placeholder="Enter amount"
              className="input input-bordered w-full"
            />
          </div>

          {/* location */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Location
            </label>
            <input
              type="text"
              name="location"
              required
              placeholder="Enter location"
              className="input input-bordered w-full"
            />
          </div>
          {/* email */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={user?.email || ""}
              readOnly
              placeholder="Email"
              className="input input-bordered w-full"
            />
          </div>

          {/* image URL */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Image URL
            </label>
            <input
              type="url"
              name="image"
              // required
              placeholder="Paste image link"
              className="input input-bordered w-full"
            />
          </div>

          {/* date */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Bill Date
            </label>
            <input
              type="date"
              name="date"
              required
              className="input input-bordered w-full"
            />
          </div>

          {/* description */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              required
              placeholder="Write a short description..."
              className="textarea textarea-bordered w-full h-28"
            ></textarea>
          </div>

          {/* submit button */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="btn bg-linear-to-r from-[#7A6AE0] to-[#9E8FF5] hover:from-[#6957DB] hover:to-[#8C7BF0]   hover:opacity-95 text-white px-10 text-lg rounded-xl shadow-md hover:scale-105 transition-transform"
            >
              Add Bill
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default AddBill;
