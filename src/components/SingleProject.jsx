// Component
const SingleProject = ({
  title,
  subtitle,
  techStack = [],
  media = [],
  nextProjectTitle,
  nextProjectHref,
}) => {
  return (
    <div className="w-screen h-dvh mt-16 md:mt-32">
      {/* Section Header */}
      <div className="p-4 md:p-8 flex items-center w-screen justify-between">
        <h2 className="text-white font-poppins text-2xl md:text-5xl lg:text-6xl">
          {title}
          {subtitle && (
            <span className="text-sm md:text-lg lg:text-2xl text-400">
              {subtitle}
            </span>
          )}
        </h2>

        <ul className="text-400 font-poppins font-light text-xs md:text-sm lg:text-base ">
          {techStack.map((tech, index) => (
            <li key={index} className="flex items-center justify-end gap-2">
              {tech.name}
              <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
            </li>
          ))}
        </ul>
      </div>

      {/* Section Content */}
      <div className="flex flex-col items-center justify-between gap-8 md:gap-16 mb-12 p-4 md:p-8">
        {media.length >= 1 &&
          media.map((med, index) => {
            const extension = med.split(".").pop().toLowerCase(); // Get last part and make lowercase

            return (
              <div key={index} className="w-full h-full rounded-lg">
                {extension === "mp4" ? (
                  <video
                    src={med}
                    className="size-full rounded-lg object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={med}
                    alt={`${title} - media ${index + 1}`}
                    className="size-full rounded-lg object-cover"
                  />
                )}
              </div>
            );
          })}
      </div>

      {/* Section Footer */}
      <div className="bg-primary w-full h-fit flex items-end justify-between pt-[120px] md:pt-[300px] px-4 md:px-8 pb-8">
        <div className="flex flex-col items-start justify-center gap-5">
          <p className="font-poppins uppercase text-[9px] md:text-sm">
            [next project]
          </p>
          <h2 className="font-poppins text-3xl md:text-7xl lg:text-8xl">
            {nextProjectTitle}
          </h2>
        </div>
        <a
          href={nextProjectHref}
          className="group flex items-center justify-center gap-2"
        >
          <p className="text-xs md:text-sm text-nowrap group-hover:text-400 transition-colors duration-500">
            View Project
          </p>
          <img
            src="/icons/CustomArrowIcon.svg"
            alt="custom_arrow_icon"
            className="w-4 h-4 md:w-6 md:h-6 brightness-0 group-hover:brightness-[55%] transition-colors duration-500"
          />
        </a>
      </div>
    </div>
  );
};

export default SingleProject;
