import { useRef } from "react";
import { leftProject, rightProject } from "../utils/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router";

// Register plugins
gsap.registerPlugin(ScrollTrigger);

const ProjectLink = ({ project, side = "left" }) => {
  return (
    <Link
      to={project.url}
      className={`${side === "left" ? "text-left" : "text-right"}`}
    >
      <h3 className="text-white">{project.name}</h3>
      <p className="text-400 text-sm">{project.description}</p>
    </Link>
  );
};

const Hero = () => {
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);
  const thirdTextRef = useRef(null);
  const leftContainerRef = useRef(null);
  const rightContainerRef = useRef(null);
  const footerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    const firstText = firstTextRef.current;
    const secondText = secondTextRef.current;
    const thirdText = thirdTextRef.current;
    const leftContainer = leftContainerRef.current;
    const rightContainer = rightContainerRef.current;
    const footer = footerRef.current;

    tl.from(firstText, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    })
      .from(
        secondText,
        {
          y: 100,
          opacity: 0,
          scale: 0.8, // Add scale animation for the image
          duration: 1,
          ease: "back.out(1.5)", // Bouncy effect for the image
        },
        "-=0.3"
      ) // Start slightly before previous animation ends
      .from(
        thirdText,
        {
          y: 100,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.3"
      )
      // Animate side projects
      .from(
        leftContainer,
        {
          x: -50,
          opacity: 0,
          duration: 0.5,
          ease: "power1.out",
        },
        "-=0.4"
      )
      .from(
        rightContainer,
        {
          x: 50,
          opacity: 0,
          duration: 0.5,
          ease: "power1.out",
        },
        "-=0.5"
      )
      // Animate footer last
      .from(
        footer,
        {
          y: 50,
          opacity: 0,
          duration: 0.5,
          ease: "power1.out",
        },
        "-=0.3"
      );
  });

  const handleMouseEnter = (project) => {
    window.dispatchEvent(
      new CustomEvent("cursor-enter-project", {
        detail: {
          image: project.image,
          name: project.name,
          side: project.side,
        },
      })
    );
  };
  const handleMouseLeave = (project) => {
    window.dispatchEvent(
      new CustomEvent("cursor-leave-project", {
        detail: {
          image: project.image,
          name: project.name,
        },
      })
    );
  };

  return (
    <div className="relative md:sticky w-screen h-[90vh] md:h-screen min-h-[700px] flex flex-col z-10">
      <div
        id="horizontalGroup"
        className="flex flex-1 w-full flex-row items-center justify-center gap-0 overflow-visible"
      >
        {/* Left */}
        <div
          ref={leftContainerRef}
          className="relative group"
          onMouseEnter={() => handleMouseEnter(leftProject)}
          onMouseLeave={() => handleMouseLeave(leftProject)}
        >
          <div className="hidden lg:flex w-[200px] h-screen flex-col justify-center items-start pl-8 overflow-visible">
            <div className="absolute hidden group-hover:lg:flex top-0 left-0 z-4 h-screen w-40 bg-gradient-to-r from-emerald-500/15 to-transparent" />
            <ProjectLink project={leftProject} side="left" />
          </div>
        </div>

        {/* Center */}
        <div className="relative flex flex-col flex-1 h-full justify-center items-center overflow-hidden">
          <p
            ref={firstTextRef}
            className="uppercase text-white font-black text-5xl md:text-7xl lg:text-[96px] leading-none tracking-tighter"
          >
            intuitive
          </p>
          <div ref={secondTextRef} className="px-3">
            <img
              src="/mini.png"
              alt="minimalisitc"
              className="w-96 md:w-[480px] lg:w-full"
            />
          </div>
          <p
            ref={thirdTextRef}
            className="uppercase text-white font-black text-5xl md:text-7xl lg:text-[96px] tracking-tighter leading-none"
          >
            ui design
          </p>
        </div>

        {/* Right */}
        <div
          ref={rightContainerRef}
          className="relative group"
          onMouseEnter={() => handleMouseEnter(rightProject)}
          onMouseLeave={() => handleMouseLeave(rightProject)}
        >
          <div className="hidden lg:flex w-[200px] h-screen flex-col justify-center items-end pr-8 overflow-visible">
            <div className="absolute hidden group-hover:lg:flex top-0 right-0 z-4 h-screen w-40 bg-gradient-to-r from-transparent to-emerald-500/15" />
            <ProjectLink project={rightProject} side="right" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        ref={footerRef}
        className="absolute bottom-2 w-full h-fit flex flex-shrink-0 items-center justify-between py-6 px-4 md:p-8"
      >
        <div>
          <p className="text-white font-extralight text-xs md:text-sm">
            @Curiousfellow
          </p>
        </div>
        <div>
          <p>Explore Projects</p>
        </div>
        <div>
          <a
            href="mailto:anwarsadat.d2@gmail.com"
            className="text-white font-extralight text-xs md:text-sm"
          >
            anwarsadat.d2@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
