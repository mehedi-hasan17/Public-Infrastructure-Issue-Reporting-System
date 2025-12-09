import { useState } from "react";
import useAuth from "../../Hook/useAuth";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import img from "../../../assets/download.png";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 px-4 md:px-8">
        <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
          {/* Logo */}
          <Link to="/">
            <div className="flex items-center">
              <div className="w-[55px] h-[55px] ml-4">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={img}
                  alt=""
                />
              </div>
                <h1 className="text-xl text-green-400 font-bold">
                  Public Issue{" "}
                </h1>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-[17px] font-semibold">
            <Link to="/">
              <li className="hover:text-red-500">Home</li>
            </Link>
            <Link to="/all-Issues">
              <li className="hover:text-red-500">All Issues</li>
            </Link>
            <Link to="/contact">
              <li className="hover:text-red-500">Contact</li>
            </Link>
            <Link to="/about-Us">
              <li className="hover:text-red-500">About Us</li>
            </Link>
          </ul>

          {/* Dropdown Menu (Hamburger + Profile) */}
          <div className="relative">
            <div className="flex flex-row items-center gap-3">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 md:py-1 md:px-2 border border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
              >
                <AiOutlineMenu size={22} />
                <div className="hidden md:block">
                  <img
                    className="rounded-full w-8 h-8"
                    referrerPolicy="no-referrer"
                    src={user?.photoURL}
                    alt="profile"
                  />
                </div>
              </div>
            </div>

            {/* Dropdown Content */}
            {isOpen && (
              <div className="absolute rounded-xl shadow-md w-40 md:w-48 lg:w-56 bg-white overflow-hidden right-0 top-12 text-sm">
                <div className="flex flex-col cursor-pointer">
                  {/* Mobile Navigation Links */}
                  <Link
                    to="/"
                    className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                  >
                    Home
                  </Link>

                  <Link
                    to="/all-Issues"
                    className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                  >
                    All Issues
                  </Link>

                  <Link
                    to="/contact"
                    className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                  >
                    Contact
                  </Link>

                  <Link
                    to="/about-Us"
                    className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                  >
                    About Us
                  </Link>

                  {/* If logged in */}
                  {user ? (
                    <>
                      <h1 className="px-4 py-3 hover:bg-neutral-100 transition font-semibold">
                        {user.displayName}
                      </h1>
                      <h1 className="px-4 py-3 hover:bg-neutral-100 transition font-semibold">
                        {user.email}
                      </h1>
                      <Link
                        to="/dashboard"
                        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                      >
                        Dashboard
                      </Link>
                      <div
                        onClick={logOut}
                        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                      >
                        Logout
                      </div>
                    </>
                  ) : (
                    <>
                      {/* If NOT logged in */}
                      <Link
                        to="/login"
                        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                      >
                        Login
                      </Link>
                      <Link
                        to="/signup"
                        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                      >
                        Sign Up
                      </Link>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
