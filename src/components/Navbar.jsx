import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";

const Navbar = () => {
  const [isActive, setIsActive] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  };

  const handleAboutClick = (e) => {
    e.preventDefault();

    // Check if we're on the home page
    if (location.pathname === "/") {
      // We're on home page, just scroll to about section
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      // We're on a different page, navigate to home then scroll to about
      navigate("/");
      // Small delay to ensure page loads before scrolling
      setTimeout(() => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
          aboutSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  };
  return (
    <div className="fixed top-5 md:top-8 left-0 right-0 px-2 md:px-8 flex items-center justify-between z-8">
      {/* Logo */}
      <Link
        to="/"
        className="inline-block bg-white rounded-full hover:bg-gray-200 transition-colors duration-200"
      >
        <span className="block text-black uppercase leading-[1.2] py-2 md:py-3 px-2 md:px-4 text-xs md:text-base font-medium">
          <span className="hidden md:inline">mohammed</span>
          <span className="md:hidden">m</span>.anwar.sadat.mamudu
        </span>
      </Link>

      {/* Links */}
      <div className="bg-white rounded-full flex items-center justify-center">
        <button
          onClick={handleAboutClick}
          className="text-black uppercase text-xs md:text-base px-1 py-2 hover:bg-gray-200 transition-colors duration-200 rounded-l-full ps-2 md:ps-4"
        >
          about
        </button>
        <p className="font-normal md:font-bold">.</p>

        <Link
          to="/works"
          onClick={() => handleNavigation("/works")}
          className="text-black uppercase text-xs md:text-base px-1 py-2 hover:bg-gray-200 transition-colors duration-200"
        >
          works
        </Link>
        <p className="font-normal md:font-bold">.</p>

        <Link
          to="/contact"
          className="text-black uppercase text-xs md:text-base px-1 py-2 hover:bg-gray-200 transition-colors duration-200 pe-2 md:pe-4 rounded-r-full"
        >
          contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
