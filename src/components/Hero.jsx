const ProjectLink = ({ project, side = "left" }) => {
  return (
    <a
      href={project.url}
      className={`${side === "left" ? "text-left" : "text-right"}`}
    >
      <h3 className="text-white">{project.name}</h3>
      <p className="text-400 text-sm">{project.description}</p>
    </a>
  );
};

const Hero = () => {
  const leftProject = {
    name: "Project Alpha",
    image: "car9.jpg",
    url: "/works/alpha",
    description: "Web Application",
    side: "left",
  };

  const rightProject = {
    name: "Project Beta",
    image: "car10.jpg",
    url: "/works/beta",
    description: "Web Application",
    side: "right",
  };

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
    <div className="sticky top-0 w-screen h-dvh min-h-[700px] flex flex-col">
      <div
        id="horizontalGroup"
        className="flex flex-1 w-full flex-row items-center justify-center gap-0 overflow-visible"
      >
        {/* Left */}
        <div
          id="left"
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
        <div
          id="center"
          className="relative flex flex-col flex-1 h-full justify-center items-center overflow-hidden"
        >
          <p className="uppercase text-white font-black text-5xl md:text-7xl lg:text-[96px] leading-none tracking-tighter">
            intuitive
          </p>
          <div className="px-3">
            <img
              src="/mini.png"
              alt="minimalisitc"
              className="w-96 md:w-[480px] lg:w-full"
            />
          </div>
          <p className="uppercase text-white font-black text-5xl md:text-7xl lg:text-[96px] tracking-tighter leading-none">
            ui design
          </p>
        </div>
        {/* Right */}
        <div
          id="right"
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
        id="hero-footer"
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
