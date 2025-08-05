import {
  projectThreeStacks,
  projectTwoStacks,
  projectZentryStacks,
} from "../utils/data";
import Navbar from "../components/Navbar";
import WorkOverview from "../components/WorkOverview";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useLocation } from "react-router";
import { useLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

const Works = ({ transitionRef }) => {
  const firstWorkRef = useRef(null);
  const secondWorkRef = useRef(null);
  const thirdWorkRef = useRef(null);
  const scrollTriggersRef = useRef([]);

  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    // Ensure page starts from top
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    // Dispatch a reset event when route changes
    window.dispatchEvent(new CustomEvent("cursor-reset"));

    // Cleanup function to kill only this component's ScrollTriggers
    return () => {
      // Kill only ScrollTriggers created by this component
      scrollTriggersRef.current.forEach(trigger => {
        if (trigger) trigger.kill();
      });
      scrollTriggersRef.current = [];
    };
  }, [location.pathname, lenis]);

  useGSAP(() => {
    const firstWork = firstWorkRef.current;
    const secondWork = secondWorkRef.current;
    const thirdWork = thirdWorkRef.current;
    if (!firstWork || !secondWork || !thirdWork) return;

    // Clear previous ScrollTriggers
    scrollTriggersRef.current.forEach(trigger => {
      if (trigger) trigger.kill();
    });
    scrollTriggersRef.current = [];

    gsap.set([firstWork, secondWork, thirdWork], { y: 100, opacity: 0 });

    gsap.to(firstWork, { y: 0, opacity: 1, duration: 1 });
    
    const secondTrigger = ScrollTrigger.create({
      trigger: secondWork,
      start: "top 80%",
      end: "bottom bottom",
      toggleActions: "play none none reverse",
      animation: gsap.to(secondWork, {
        y: 0,
        opacity: 1,
        duration: 1,
        paused: true
      })
    });
    
    const thirdTrigger = ScrollTrigger.create({
      trigger: thirdWork,
      start: "top 80%",
      end: "bottom bottom",
      toggleActions: "play none none reverse",
      animation: gsap.to(thirdWork, {
        y: 0,
        opacity: 1,
        duration: 1,
        paused: true
      })
    });

    // Store ScrollTriggers for cleanup
    scrollTriggersRef.current = [secondTrigger, thirdTrigger];

    // Refresh ScrollTrigger after a brief delay to ensure Lenis is ready
    gsap.delayedCall(0.2, () => {
      ScrollTrigger.refresh();
    });
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-800">
      <Navbar transitionRef={transitionRef} />
      <div className="flex flex-col items-center justify-center gap-12 md:gap-36">
        <WorkOverview
          ref={firstWorkRef}
          title="Zentry Clone"
          subtitle="(Landing Page)"
          image="/images/p2-gif.jpg"
          date={Date.now()}
          techStack={projectZentryStacks}
          projectUrl="zentry-clone"
        />
        <WorkOverview
          ref={secondWorkRef}
          title="Minimalist Watch Store"
          subtitle="(Landing Page)"
          image="/minimalist_watch/watch_work.png"
          date={new Date("2024-01-01")}
          techStack={projectTwoStacks}
          projectUrl="minimalist_watch"
        />
        <WorkOverview
          ref={thirdWorkRef}
          title="Project #3"
          image="/images/p2-gif.jpg"
          date={Date.now()}
          techStack={projectThreeStacks}
          projectUrl="minimalist"
        />
      </div>
    </div>
  );
};

export default Works;
