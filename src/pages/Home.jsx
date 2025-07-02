import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import ProjectVideo from "../components/ProjectVideo";
import Info from "../components/Info";
import CTA from "../components/CTA";
import { useLenis } from "lenis/react";
import { useEffect, useRef } from "react";

const Home = ({ transitionRef }) => {
  const lenisRef = useRef();

  const lenis = useLenis((lenis) => {
    // Store lenis instance for dynamic control
    lenisRef.current = lenis;
  });

  useEffect(() => {
    if (!lenisRef.current) return;

    // Slow down scrolling when in About section
    const aboutSection = document.getElementById("about");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Slow down when About section is in view
            lenisRef.current.options.duration = 5.5; // Slower
            lenisRef.current.options.touchMultiplier = 1; // Slower touch
          } else {
            // Normal speed for other sections
            lenisRef.current.options.duration = 1.2;
            lenisRef.current.options.touchMultiplier = 2;
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of About section is visible
        rootMargin: "-10% 0px -10% 0px", // Add some margin for smoother transitions
      }
    );

    if (aboutSection) {
      observer.observe(aboutSection);
    }

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, [lenis]);

  return (
    <div className="flex flex-col justify-start items-center bg-800">
      <Navbar transitionRef={transitionRef} />
      <Hero />
      <About />
      <ProjectVideo />
      <Info />
      <CTA />
    </div>
  );
};

export default Home;
