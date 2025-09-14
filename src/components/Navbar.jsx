import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  handleMouseEnterLink,
  handleMouseLeaveLink,
} from "../utils/eventDispatcher";
import { animatePageOut } from "../utils/animatePageTransitions";
import { useLenis } from "lenis/react";
import { useTransitionContext } from "../contexts/TransitionContext";

const Navbar = () => {
  const { transitionRef } = useTransitionContext();
  const [isAnimating, setIsAnimating] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const navigate = useNavigate();
  const lenis = useLenis();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleNavigationTransition = async (href) => {
    if (isAnimating) return;
    if (location.pathname === href) {
      return;
    }
    setIsAnimating(true);
    try {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
      await animatePageOut(transitionRef.current);
      navigate(href);
      setTimeout(() => {
        if (lenis) {
          lenis.scrollTo(0, { immediate: true });
        } else {
          window.scrollTo(0, 0);
        }
        setIsAnimating(false);
      }, 200);
    } catch (error) {
      console.error("Navigation animation failed:", error);
      setIsAnimating(false);
    }
  };

  const handleAboutClick = async (e) => {
    e.preventDefault();
    if (isAnimating) return;

    if (location.pathname === "/") {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        setActiveLink("/about");
        if (lenis) {
          lenis.scrollTo(aboutSection, { duration: 1.5 });
        } else {
          aboutSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    } else {
      setIsAnimating(true);
      try {
        if (lenis) {
          lenis.scrollTo(0, { immediate: true });
        } else {
          window.scrollTo(0, 0);
        }
        await animatePageOut(transitionRef.current);
        navigate("/");
        setTimeout(() => {
          if (lenis) {
            lenis.scrollTo(0, { immediate: true });
          }
          setTimeout(() => {
            const aboutSection = document.getElementById("about");
            if (aboutSection && lenis) {
              lenis.scrollTo(aboutSection, { duration: 1.5 });
            } else if (aboutSection) {
              aboutSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
            setIsAnimating(false);
          }, 100);
        }, 300);
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
      setActiveLink("/");
      // Scroll to top instead of reloading
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.5 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
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
        className={`inline-block  rounded-full hover:bg-gray-200 transition-colors duration-200 ${
          activeLink === "/" ? "bg-gray-300 underline" : "bg-white"
        } ${isAnimating ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        <span className="block text-black uppercase leading-[1.2] py-2 md:py-3 px-2 md:px-4 text-xs md:text-base font-medium">
          <span className="hidden md:inline">mohammed</span>
          <span className="md:hidden">m</span>.anwar.sadat.mamudu
        </span>
      </button>

      {/* Links */}
      <div className={`bg-white rounded-full flex items-center justify-center`}>
        <button
          onClick={handleAboutClick}
          onMouseEnter={handleMouseEnterLink}
          onMouseLeave={handleMouseLeaveLink}
          disabled={isAnimating}
          className={`${
            activeLink === "/about" ? "bg-gray-300 underline" : "bg-white"
          } text-black uppercase text-xs md:text-base px-1 py-2 hover:bg-gray-200 transition-colors duration-200 rounded-l-full ps-2 md:ps-4 ${
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
          className={`${
            activeLink === "/works" ? "bg-gray-300 underline" : "bg-white"
          } text-black uppercase text-xs md:text-base px-1 py-2 hover:bg-gray-200 transition-colors duration-200 ${
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
          className={`${
            activeLink === "/contact" ? "bg-gray-300 underline" : "bg-white"
          } text-black uppercase text-xs md:text-base px-1 py-2 hover:bg-gray-200 transition-colors duration-200 pe-2 md:pe-4 rounded-r-full ${
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
