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

gsap.registerPlugin(ScrollTrigger);

const Works = ({ transitionRef }) => {
  const firstWorkRef = useRef(null);
  const secondWorkRef = useRef(null);
  const thirdWorkRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    // Dispatch a reset event when route changes
    window.dispatchEvent(new CustomEvent("cursor-reset"));
  }, [location.pathname]);

  useGSAP(() => {
    const firstWork = firstWorkRef.current;
    const secondWork = secondWorkRef.current;
    const thirdWork = thirdWorkRef.current;
    if (!firstWork | !secondWork | !thirdWork) return;

    gsap.set([firstWork, secondWork, thirdWork], { y: 100, opacity: 0 });

    gsap.to(firstWork, { y: 0, opacity: 1, duration: 1 });
    gsap.to(secondWork, {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: secondWork,
        start: "top 80%",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });
    gsap.to(thirdWork, {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: thirdWork,
        start: "top 80%",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });
  });

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
          projectUrl="project-3"
        />
      </div>
    </div>
  );
};

export default Works;
