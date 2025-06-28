import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const ProjectVideo = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set initial state
    gsap.set(video, { opacity: 1, scale: 0.8 });

    // Then animate
    gsap.to(video, {
      opacity: 1,
      scale: 1,
      duration: 2,
      ease: "none",
      scrollTrigger: {
        trigger: video,
        start: "top bottom",
        end: "center center",
        scrub: 0.8, // Animation follows scroll position
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <div className="sticky md:relative w-full h-screen bg-900 z-5 min-h-[700px] overflow-hidden flex items-center justify-center">
      <div ref={videoRef} className="relative w-full h-full">
        <video
          src="hero-1.mp4"
          loop
          muted
          autoPlay
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProjectVideo;
