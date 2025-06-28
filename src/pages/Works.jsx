import {
  projectThreeStacks,
  projectTwoStacks,
  projectZentryStacks,
} from "../utils/data";
import Navbar from "../components/Navbar";
import WorkOverview from "../components/WorkOverview";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const Works = () => {
  const firstWorkRef = useRef(null);
  const secondWorkRef = useRef(null);
  const thirdWorkRef = useRef(null);
  const techStacksRef = useRef(null);

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
      <Navbar />
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
          title="Project #2"
          image="/images/p2-gif.jpg"
          date={Date.now()}
          techStack={projectTwoStacks}
          projectUrl="project-2"
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
