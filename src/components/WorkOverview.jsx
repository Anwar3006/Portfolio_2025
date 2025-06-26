import { format } from "date-fns";
import React from "react";

const WorkOverview = ({
  title,
  subtitle,
  image,
  date,
  techStack = [],
  projectUrl,
}) => {
  return (
    <section className="relative h-dvh w-screen z-5 flex flex-col justify-center items-center pb-8 px-4 lg:pr-8 gap-8">
      <div className="relative w-full h-full flex flex-col lg:flex-row flex-1 items-center justify-center gap-8 pt-[90px] md:pt-[200px] lg:pt-[150px]">
        <div className="w-full h-full rounded-lg">
          <img
            src={image}
            alt={title}
            className="size-full rounded-lg object-cover"
          />
        </div>

        <div className="w-full lg:w-1/4 h-fit lg:h-full flex flex-row lg:flex-col justify-between items-start">
          <h3 className="text-white font-poppins font-extralight text-xs md:text-sm lg:text-base">
            {format(date, "PPP")}
          </h3>

          <ul className="text-400 font-poppins font-light text-xs md:text-sm lg:text-base grid grid-cols-2 gap-2 md:flex md:gap-4 lg:grid lg:grid-cols-1 lg:gap-2">
            {techStack.map((tech, index) => (
              <li
                key={index}
                className="flex items-center gap-1 w-fit border border-400 px-2 py-1 md:px-3 md:py-2 rounded-full"
              >
                <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
                {tech.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="relative w-full h-fit flex items-end justify-between pt-4 gap-2 md:gap-8">
        <h2 className="text-white font-poppins text-3xl md:text-7xl lg:text-8xl leading-none h-fit">
          {title}
          <br />
          {subtitle && (
            <p className="text-sm md:text-lg lg:text-2xl text-400 leading-none">
              {subtitle}
            </p>
          )}
        </h2>
        <a
          href={`works/${projectUrl}`}
          className="text-primary hover:text-gray-300 transition-colors flex items-center justify-center gap-2 md:mb-4"
        >
          <p className="text-xs md:text-base text-nowrap">Explore Project</p>
          <img
            src="/icons/CustomArrowIcon.svg"
            alt="custom_arrow_icon"
            className="w-4 h-4 md:w-6 md:h-6"
          />
        </a>
      </div>
    </section>
  );
};

export default WorkOverview;
