import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = ({ user }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          InfraReport
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-lg">

          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/allissues" className="hover:text-blue-600">All Issues</Link>
          <Link to="/extra1" className="hover:text-blue-600">Extra Page 1</Link>
          <Link to="/extra2" className="hover:text-blue-600">Extra Page 2</Link>

          {/* User Section */}
          {user ? (
            <div className="relative">
              <img
                onClick={() => setProfileOpen(!profileOpen)}
                src={user.photo}
                className="w-10 h-10 rounded-full cursor-pointer"
              />

              {/* Profile Dropdown */}
              {profileOpen && (
                <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-4 w-48">
                  <p className="font-semibold">{user.name}</p>
                  <Link
                    to="/dashboard"
                    className="block mt-3 hover:text-blue-600"
                  >
                    Dashboard
                  </Link>
                  <button className="text-red-600 mt-3 w-full text-left">
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md p-4 space-y-4">

          <Link
            to="/"
            className="block text-lg hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/issues"
            className="block text-lg hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            All Issues
          </Link>

          <Link
            to="/extra1"
            className="block text-lg hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Extra Page 1
          </Link>

          <Link
            to="/extra2"
            className="block text-lg hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Extra Page 2
          </Link>

          {/* Mobile User Section */}
          {user ? (
            <div className="border-t pt-4">

              <div className="flex items-center gap-3">
                <img
                  src={user.photo}
                  className="w-10 h-10 rounded-full"
                />
                <p className="font-semibold">{user.name}</p>
              </div>

              <Link
                to="/dashboard"
                className="block mt-3 hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                Dashboard
              </Link>

              <button className="text-red-600 mt-3">Logout</button>

            </div>
          ) : (
            <Link
              to="/login"
              className="block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          )}

        </div>
      )}
    </nav>
  );
};

export default Navbar;
