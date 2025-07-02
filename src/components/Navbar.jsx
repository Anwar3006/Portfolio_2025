import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import {
  handleMouseEnterLink,
  handleMouseLeaveLink,
} from "../utils/eventDispatcher";
import { animatePageOut } from "../utils/animatePageTransitions";

const Navbar = ({ transitionRef }) => {
  const [isActive, setIsActive] = useState("");
  const [isAnimating, setIsAnimating] = useState(false); // Prevent multiple animations

  const location = useLocation();
  const navigate = useNavigate();

  // Handle page transition with animation
  const handleNavigationTransition = async (href) => {
    // Prevent multiple animations
    if (isAnimating) return;

    setIsAnimating(true);

    try {
      await animatePageOut(transitionRef);
      navigate(href);

      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo(0, 0);
        setIsAnimating(false);
      }, 100);
    } catch (error) {
      console.error("Navigation animation failed:", error);
      setIsAnimating(false);
    }
  };

  // Handle about link click
  const handleAboutClick = async (e) => {
    e.preventDefault();

    // Prevent multiple clicks
    if (isAnimating) return;

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
      // We're on a different page, navigate to home with animation
      setIsAnimating(true);

      try {
        await animatePageOut(transitionRef);
        navigate("/");

        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const aboutSection = document.getElementById("about");
          if (aboutSection) {
            aboutSection.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
          setIsAnimating(false);
        }, 300); // Increased delay to ensure page loads
      } catch (error) {
        console.error("About navigation failed:", error);
        setIsAnimating(false);
      }
    }
  };

  // Handle logo click
  const handleLogoClick = async (e) => {
    e.preventDefault();

    if (isAnimating) return;

    if (location.pathname === "/") {
      window.location.reload();
    } else {
      await handleNavigationTransition("/");
    }
  };

  return (
    <div className="fixed top-5 md:top-8 left-0 right-0 px-2 md:px-8 flex items-center justify-between z-30">
      {/* Logo */}
      <button
        onClick={handleLogoClick}
        onMouseEnter={handleMouseEnterLink}
        onMouseLeave={handleMouseLeaveLink}
        disabled={isAnimating}
        className={`inline-block bg-white rounded-full hover:bg-gray-200 transition-colors duration-200 ${
          isAnimating ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <span className="block text-black uppercase leading-[1.2] py-2 md:py-3 px-2 md:px-4 text-xs md:text-base font-medium">
          <span className="hidden md:inline">mohammed</span>
          <span className="md:hidden">m</span>.anwar.sadat.mamudu
        </span>
      </button>

      {/* Links */}
      <div className="bg-white rounded-full flex items-center justify-center">
        <button
          onClick={handleAboutClick}
          onMouseEnter={handleMouseEnterLink}
          onMouseLeave={handleMouseLeaveLink}
          disabled={isAnimating}
          className={`text-black uppercase text-xs md:text-base px-1 py-2 hover:bg-gray-200 transition-colors duration-200 rounded-l-full ps-2 md:ps-4 ${
            isAnimating ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          about
        </button>
        <p className="font-normal md:font-bold">.</p>

        <button
          onClick={() => handleNavigationTransition("/works")}
          onMouseEnter={handleMouseEnterLink}
          onMouseLeave={handleMouseLeaveLink}
          disabled={isAnimating}
          className={`text-black uppercase text-xs md:text-base px-1 py-2 hover:bg-gray-200 transition-colors duration-200 ${
            isAnimating ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          works
        </button>
        <p className="font-normal md:font-bold">.</p>

        <button
          onClick={() => handleNavigationTransition("/contact")}
          onMouseEnter={handleMouseEnterLink}
          onMouseLeave={handleMouseLeaveLink}
          disabled={isAnimating}
          className={`text-black uppercase text-xs md:text-base px-1 py-2 hover:bg-gray-200 transition-colors duration-200 pe-2 md:pe-4 rounded-r-full ${
            isAnimating ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
