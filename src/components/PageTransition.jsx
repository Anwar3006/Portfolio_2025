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

    if (location.pathname === window.location.pathname) {
      // If the path hasn't changed, just animate the page in
      animatePageIn(transitionRef);
      return;
    }

    animatePageIn(transitionRef);

    if (lenis) {
      lenis.start();
      // Scroll to top for new page
      lenis.scrollTo(0, { immediate: true });
    }
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
