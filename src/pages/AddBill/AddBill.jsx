import React, { useState } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const AddBill = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    amount: "",
    location: "",
    description: "",
    image: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/bills", {
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
        setFormData({
          title: "",
          category: "",
          amount: "",
          location: "",
          description: "",
          image: "",
          date: "",
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
          {/* Title */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Bill Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Enter bill title"
              className="input input-bordered w-full"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
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

          {/* Amount */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Amount (৳)
            </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
              placeholder="Enter amount"
              className="input input-bordered w-full"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="Enter location"
              className="input input-bordered w-full"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Image URL
            </label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              placeholder="Paste image link"
              className="input input-bordered w-full"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Bill Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="input input-bordered w-full"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              placeholder="Write a short description..."
              className="textarea textarea-bordered w-full h-28"
            ></textarea>
          </div>

          {/* Submit Button */}
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
