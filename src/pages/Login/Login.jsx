import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import google from "../../assets/icon-google.png";

const Login = () => {
  const { login, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
      .then((result) => {
        console.log(result);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Google sign-in failed:", error);
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

        <div className="flex flex-1 justify-center items-center bg-gradient-to-r from-[#632EE3] via-[#7a4cf0] to-[#007bff] p-6 md:rounded-l-4xl">
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
                  className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                {/* <label className="label">
                  <span className="label-text">Password</span>
                </label> */}
                <input
                  required
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#632EE3] to-[#007bff] hover:bg-gradient-to-r from-[#632EE3] to-[#007bff]  hover:opacity-95 text-white py-3 rounded-full transition duration-200"
              >
                Login
              </button>
            </form>
            <div className="divider">OR</div>

            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline hover:text-white hover:opacity-95 hover:bg-gradient-to-r from-[#632EE3] to-[#007bff] w-full"
            >
              <img src={google} alt="" className="w-5 h-5 mr-2" />
              Sign Up with Google
            </button>

            <div className="text-right mt-2">
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot Password?
              </a>
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
