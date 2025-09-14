import { projects } from "../data/projects";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useLocation } from "react-router";
import { useLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

const ProjectListPage = () => {
  const workRefs = useRef([]);
  workRefs.current = [];
  const scrollTriggersRef = useRef([]);

  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
    window.dispatchEvent(new CustomEvent("cursor-reset"));

    return () => {
      scrollTriggersRef.current.forEach(trigger => {
        if (trigger) trigger.kill();
      });
      scrollTriggersRef.current = [];
    };
  }, [location.pathname, lenis]);

  useGSAP(() => {
    workRefs.current.forEach((workEl, index) => {
      if (!workEl) return;
      gsap.set(workEl, { y: 100, opacity: 0 });

      const trigger = ScrollTrigger.create({
        trigger: workEl,
        start: "top 80%",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
        animation: gsap.to(workEl, {
          y: 0,
          opacity: 1,
          duration: 1,
          paused: true
        }),
      });
      scrollTriggersRef.current.push(trigger);
    });

    gsap.delayedCall(0.2, () => {
      ScrollTrigger.refresh();
    });
  }, [projects]);

  const addToRefs = (el) => {
    if (el && !workRefs.current.includes(el)) {
      workRefs.current.push(el);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-800">
      <Navbar />
      <div className="flex flex-col items-center justify-center gap-12 md:gap-36">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            ref={addToRefs}
            title={project.title}
            subtitle={project.subtitle}
            image={project.image}
            date={project.date}
            techStack={project.techStack}
            projectUrl={project.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectListPage;
