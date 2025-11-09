import React, { useState } from "react";
import { Link } from "react-router";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const imageUrl =
    "https://static.vecteezy.com/system/resources/previews/040/185/472/non_2x/male-and-female-paying-utilities-together-worried-and-stressed-over-bills-flat-modern-illustration-vector.jpg";

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle real registration (API call)
    alert(`Registered as ${name}`);
  };
  return (
    <div>
      <div className="min-h-screen flex flex-col md:flex-row bg-white">
        {/* Left Illustration */}
        <div className="hidden md:flex md:w-1/2 justify-center items-center bg-white">
          <img
            src={imageUrl}
            alt="illustration"
            className="max-w-[80%] h-auto object-contain"
          />
        </div>

        {/* Right Form */}
        <div className="flex flex-1 justify-center items-center bg-[#007bff] p-6">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
              Welcome!
            </h2>
            <p className="text-center text-gray-500 mb-6">
              Sign Up to Get Started
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#007bff] hover:bg-blue-600 text-white py-3 rounded-full transition duration-200"
              >
                Register
              </button>
            </form>

            <div className="text-center mt-6">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500 hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
