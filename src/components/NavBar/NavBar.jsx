import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import {
  FaSun,
  FaMoon,
  FaHome,
  FaInfoCircle,
  FaHeadset,
  FaFileInvoiceDollar,
  FaPlusCircle,
  FaClipboardList,
} from "react-icons/fa";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import MyLink from "../MyLink/MyLink";
import icon from "../../assets/icon.png";
import { MdOutlineDashboard } from "react-icons/md";

const NavBar = () => {
  const { user, logout, loading } = useContext(AuthContext);

  const isVerifiedUser = user && user.emailVerified;

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  // scroll navbar hide/show
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) setShowNavbar(false);
      else setShowNavbar(true);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleSignOut = () => {
    logout().catch(console.error);
  };

  if (loading) return null; // navbar flicker বন্ধ

  return (
    <div
      className={`navbar bg-gradient-to-r from-[#E3DFFF] to-[#F3F1FF] dark:from-[#1E1E2E] dark:to-[#2A2A3C] shadow-sm px-5 fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* START */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>

          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
            {isVerifiedUser ? (
              <>
                <li>
                  <MyLink to="/">
                    <FaHome /> Home
                  </MyLink>
                </li>
                <li>
                  <MyLink to="/about">
                    <FaInfoCircle /> About
                  </MyLink>
                </li>
                <li>
                  <MyLink to="/help">
                    <FaHeadset /> Support
                  </MyLink>
                </li>
                <li>
                  <MyLink to="/bills">
                    <FaFileInvoiceDollar /> Bills
                  </MyLink>
                </li>
                <li>
                  <MyLink to="/my-bills">
                    <FaClipboardList /> My Bills
                  </MyLink>
                </li>
                <li>
                  <MyLink to="/add-bill">
                    <FaPlusCircle /> Add Bill
                  </MyLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <MyLink to="/">
                    <FaHome /> Home
                  </MyLink>
                </li>
                <li>
                  <MyLink to="/about">
                    <FaInfoCircle /> About
                  </MyLink>
                </li>
                <li>
                  <MyLink to="/help">
                    <FaHeadset /> Support
                  </MyLink>
                </li>
                <li>
                  <MyLink to="/bills">
                    <FaFileInvoiceDollar /> Bills
                  </MyLink>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* LOGO */}
        <Link to="/" className="font-bold text-xl flex items-center gap-2">
          <img className="w-[30px]" src={icon} alt="" />
          Utility
          <span className="bg-linear-to-r from-[#7A6AE0] to-[#9E8FF5] bg-clip-text text-transparent">
            Bills
          </span>
        </Link>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-10">
          <li>
            <MyLink to="/">
              <FaHome /> Home
            </MyLink>
          </li>
          <li>
            <MyLink to="/about">
              <FaInfoCircle /> About
            </MyLink>
          </li>
          <li>
            <MyLink to="/help">
              <FaHeadset /> Support
            </MyLink>
          </li>
          <li>
            <MyLink to="/bills">
              <FaFileInvoiceDollar /> Bills
            </MyLink>
          </li>

          {isVerifiedUser && (
            <>
              <li>
                <MyLink to="/my-bills">
                  <FaClipboardList /> My Bills
                </MyLink>
              </li>
              <li>
                <MyLink to="/add-bill">
                  <FaPlusCircle /> Add Bill
                </MyLink>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* END */}
      <div className="navbar-end gap-4">
        {/* THEME */}
        <label className="swap swap-rotate cursor-pointer">
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={(e) => handleTheme(e.target.checked)}
            className="hidden"
          />
          <FaSun
            className={`text-yellow-400 text-xl ${
              theme === "light" ? "block" : "hidden"
            }`}
          />
          <FaMoon
            className={`text-gray-300 text-xl ${
              theme === "dark" ? "block" : "hidden"
            }`}
          />
        </label>

        {/* USER */}
        {isVerifiedUser ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-9 rounded-full border">
                <img referrerPolicy="no-referrer" src={user.photoURL} alt="" />
              </div>
            </div>
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
              <li className="text-center font-bold">{user.displayName}</li>
              <li className="text-xs text-center">{user.email}</li>
              <li className="mt-2">
                <Link to="/profile">
                  <FaUser /> Profile
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/dashboard">
                  <MdOutlineDashboard /> Dashboard
                </Link>
              </li>
              <li>
                <button
                  onClick={handleSignOut}
                  className="btn bg-gradient-to-r from-[#7A6AE0] to-[#9E8FF5] text-white"
                >
                  <IoLogOut /> Sign Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to="/login"
            className="btn bg-linear-to-r from-[#7A6AE0] to-[#9E8FF5] border-none text-white"
          >
            <IoLogIn /> Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
