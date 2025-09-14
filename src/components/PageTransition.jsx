import { useGSAP } from "@gsap/react";
import { useLocation } from "react-router";
import { animatePageIn } from "../utils/animatePageTransitions";
import { useLenis } from "lenis/react";
import { useTransitionContext } from "../contexts/TransitionContext";

const PageTransition = () => {
  const { transitionRef } = useTransitionContext();
  const lenis = useLenis();
  const location = useLocation();
  const noOfColumns = 6;

  useGSAP(() => {
    if (lenis) {
      lenis.stop();
    }

    animatePageIn(transitionRef.current);

    const timer = setTimeout(() => {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
        lenis.start();
      }
      window.scrollTo(0, 0);
    }, 100);

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
  }, [location.pathname, lenis, transitionRef]);

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
