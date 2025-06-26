import React from "react";

const ProjectVideo = () => {
  return (
    <div className="relative w-full h-screen bg-900 z-5 min-h-[700px] overflow-hidden flex items-center justify-center">
      <div className="relative w-full h-full">
        <video
          src="hero-1.mp4"
          loop
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProjectVideo;
