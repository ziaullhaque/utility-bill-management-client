import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import google from "../../assets/icon-google.png";
import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const Login = () => {
  const [show, setShow] = useState(false);
  const { login, signInWithGoogle, resetPassword, setLoading, setUser } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const emailRef = useRef();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
      .then((result) => {
        setLoading(false);
        console.log(result);
        Swal.fire({
          title: "Sign In Successful!",
          icon: "success",
          draggable: true,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Login failed:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        setLoading(false);
        console.log(result);
        setUser(result.user);
        navigate(from);
        Swal.fire({
          title: "Google Sign in Successful!",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      Swal.fire({
        icon: "warning",
        title: "Please enter your email first!",
      });
      return;
    }
    resetPassword(email)
      .then((result) => {
        setLoading(false);
        console.log(result);

        Swal.fire({
          title: "Check your Email to reset password!",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        console.log(error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
          });
      });
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col md:flex-row bg-white mt-16">
        <div className="hidden md:flex md:w-1/2 justify-center items-center bg-white">
          <img
            src="https://static.vecteezy.com/system/resources/previews/040/185/472/non_2x/male-and-female-paying-utilities-together-worried-and-stressed-over-bills-flat-modern-illustration-vector.jpg"
            alt="illustration"
            className="max-w-[80%] h-auto object-contain"
          />
        </div>

        <div className="flex flex-1 justify-center items-center bg-gradient-to-r from-[#8F7FF0] via-[#9E8FF5] to-[#C2BAFF] p-6 md:rounded-l-4xl">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
              Hello!
            </h2>
            <p className="text-center text-gray-500 mb-6">
              Sign In to Continue
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                {/* <label className="label">
                  <span className="label-text">Email</span>
                </label> */}
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  ref={emailRef}
                  className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div className="relative">
                {/* <label className="label">
                  <span className="label-text">Password</span>
                </label> */}
                <input
                  required
                  type={show ? "text" : "password"}
                  // type="password"
                  name="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-[15px] top-[16px] cursor-pointer z-50"
                >
                  {show ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#7A6AE0] to-[#9E8FF5] hover:from-[#6957DB] hover:to-[#8C7BF0]  hover:opacity-95 text-white py-3 rounded-full transition duration-200 cursor-pointer"
              >
                Login
              </button>
            </form>
            <div className="divider">OR</div>

            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline hover:text-white hover:opacity-95 hover:bg-gradient-to-r from-[#7A6AE0] to-[#9E8FF5] w-full"
            >
              <img src={google} alt="" className="w-5 h-5 mr-2" />
              Sign In with Google
            </button>

            <div className="text-right mt-2">
              <button
                onClick={handleForgetPassword}
                className="text-sm text-blue-500 hover:underline cursor-pointer"
              >
                Forgot Password?
              </button>
            </div>

            <div className="text-center text-sm mt-6">
              <p className="text-gray-600">
                Don’t have an account?{" "}
                <Link
                  to="/register"
                  className="text-blue-500 hover:underline font-semibold"
                >
                  Register Now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
