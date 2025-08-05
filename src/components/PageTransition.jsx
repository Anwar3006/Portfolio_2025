import { useGSAP } from "@gsap/react";

import { useLocation } from "react-router";
import { animatePageIn } from "../utils/animatePageTransitions";
import { useLenis } from "lenis/react";

const PageTransition = ({ transitionRef }) => {
  const lenis = useLenis();
  //   const containerRef = useRef(null);
  const location = useLocation();
  const noOfColumns = 6;

  useGSAP(() => {
    // Stop Lenis during transition
    if (lenis) {
      lenis.stop();
    }

    // Animate page transition
    animatePageIn(transitionRef);

    // Use a timeout to ensure the transition completes before restarting Lenis
    const timer = setTimeout(() => {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true }); // Scroll to top first
        lenis.start(); // Then start Lenis
      }
      // Fallback scroll to top
      window.scrollTo(0, 0);
    }, 100); // Small delay to ensure DOM is ready

    // Additional timer for extra safety
    const safetyTimer = setTimeout(() => {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      }
      window.scrollTo(0, 0);
    }, 300);

    return () => {
      clearTimeout(timer);
      clearTimeout(safetyTimer);
    };
  }, [location.pathname]);

  return (
    <section
      ref={transitionRef}
      className="w-screen h-dvh fixed top-0 left-0 pointer-events-none z-40 flex"
    >
      {[...Array(noOfColumns)].map((_, i) => (
        <div key={i} className="bg-primary flex-1 w-full h-full relative" />
      ))}
    </section>
  );
};

export default PageTransition;
