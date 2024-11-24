import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar: React.FC = () => {
  const { username, logout } = useAuth();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close menu on navigation change
  useEffect(() => {
    setMobileMenuOpen(false);
    setUserMenuOpen(false);
  }, [location]);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-[#008374] border-b border-[#66fdee] font-default">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="/" className="flex flex-shrink-0 items-center">
              <span className="font-heading text-white text-3xl font-bold ml-2">
                DATAIDEA
              </span>
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-900 hover:bg-gray-700 focus:outline-none md:hidden"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Links for desktop */}
          <div className="hidden md:flex md:ml-auto space-x-2">
            <Link
              to="/"
              className="text-white hover:bg-gray-900 rounded-md px-3 py-2"
            >
              Home
            </Link>
            <a
              href="/#courses"
              className="text-white hover:bg-gray-900 rounded-md px-3 py-2"
            >
              Courses
            </a>
            <a
              href="/#blog"
              className="text-white hover:bg-gray-900 rounded-md px-3 py-2"
            >
              Blog
            </a>
            <Link
              to="/100-days-of-code"
              className="text-white hover:bg-gray-900 rounded-md px-3 py-2"
            >
              100DaysOfCode
            </Link>

            {/* Dropdown for user links */}
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!isUserMenuOpen)}
                className="text-white hover:bg-gray-900 rounded-md px-3 py-2"
              >
                Account
              </button>
              {isUserMenuOpen &&
                (username ? (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    <p className="text-gray-700 px-4 py-2">
                      Logged in as {username}
                    </p>
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                      onClick={logout}
                    >
                      {">"} Logout
                    </Link>
                  </div>
                ) : (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                    >
                      {">"} Login
                    </Link>
                    <Link
                      to="/register"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                    >
                      {">"} Register
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="text-white hover:bg-gray-900 block rounded-md px-3 py-2"
              onClick={() => setMobileMenuOpen(false)} // Close the menu when clicked
            >
              Home
            </Link>
            <a
              href="/#courses"
              className="text-white hover:bg-gray-900 block rounded-md px-3 py-2"
              onClick={() => setMobileMenuOpen(false)} // Close the menu when clicked
            >
              Courses
            </a>
            <a
              href="/#blog"
              className="text-white hover:bg-gray-900 block rounded-md px-3 py-2"
              onClick={() => setMobileMenuOpen(false)} // Close the menu when clicked
            >
              Blog
            </a>
            <Link
              to="/100-days-of-code"
              className="text-white hover:bg-gray-900 block rounded-md px-3 py-2"
              onClick={() => setMobileMenuOpen(false)} // Close the menu when clicked
            >
              100DaysOfCode
            </Link>

            {/* Dropdown for user links in mobile view */}
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!isUserMenuOpen)}
                className="text-white hover:bg-gray-900 block rounded-md px-3 py-2 w-full text-left"
              >
                Account
              </button>
              {isUserMenuOpen &&
                (username ? (
                  <div className="px-4">
                    <p className="text-white">Logged in as {username}</p>
                    <Link
                      to="/login"
                      className="block text-white hover:bg-gray-900 rounded-md px-3 py-2"
                      onClick={() => {
                        logout();
                        setMobileMenuOpen(false); // Close the menu after logout
                      }}
                    >
                      {">"} Logout
                    </Link>
                  </div>
                ) : (
                  <div className="px-4">
                    <Link
                      to="/login"
                      className="block text-white hover:bg-gray-900 rounded-md px-3 py-2"
                      onClick={() => setMobileMenuOpen(false)} // Close the menu when clicked
                    >
                      {">"} Login
                    </Link>
                    <Link
                      to="/register"
                      className="block text-white hover:bg-gray-900 rounded-md px-3 py-2"
                      onClick={() => setMobileMenuOpen(false)} // Close the menu when clicked
                    >
                      {">"} Register
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
