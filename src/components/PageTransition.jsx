import { useGSAP } from "@gsap/react";

import { useLocation } from "react-router";
import { animatePageIn } from "../utils/animatePageTransitions";

const PageTransition = ({ transitionRef }) => {
  //   const containerRef = useRef(null);
  const location = useLocation();
  const noOfColumns = 6;

  useGSAP(() => {
    animatePageIn(transitionRef);
  }, [location.pathname]);

  return (
    <section
      ref={transitionRef}
      className="w-screen h-dvh fixed top-0 left-0 pointer-events-none z-20 flex"
    >
      {[...Array(noOfColumns)].map((_, i) => (
        <div key={i} className="bg-primary flex-1 w-full h-full relative" />
      ))}
    </section>
  );
};

export default PageTransition;
