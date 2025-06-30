import { useGSAP } from "@gsap/react";
import { format } from "date-fns";
import gsap from "gsap";
import { useRef } from "react";
import { Link } from "react-router";

const WorkOverview = ({
  title,
  subtitle,
  image,
  date,
  techStack = [],
  projectUrl,
  ref,
}) => {
  const footerRef = useRef(null);
  const techStackRef = useRef(null);

  useGSAP(() => {
    const footer = footerRef.current;
    const techStackContainer = techStackRef.current;
    const section = ref?.current;
    if (!footer || !techStackContainer || !section) return;

    const techItems = techStackContainer.querySelectorAll("li");

    // Set initial states
    gsap.set(footer, { y: 50, opacity: 0 });
    gsap.set(techItems, { y: 20, opacity: 0 });

    // Create timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 60%",
        end: "bottom 20%",
        toggleActions: "restart none none reverse", // Restart every time it enters viewport
        // Alternative: "play none none reverse" - plays once per scroll direction
      },
    });

    // Animate footer
    tl.to(footer, {
      y: 0,
      opacity: 1,
      duration: 0.5,
    });

    // Stagger animate tech stack items
    tl.to(
      techItems,
      {
        y: 0,
        opacity: 1,
        duration: 1.6,
        stagger: 0.2, // 0.1 second delay between each item
        ease: "power2.out",
      },
      "-=0.2"
    ); // Start 0.2 seconds before footer animation ends
  });

  const handleMouseEnter = () => {
    window.dispatchEvent(new CustomEvent("enter-explore-project"));
  };

  const handleMouseLeave = () => {
    window.dispatchEvent(new CustomEvent("leave-explore-project"));
  };

  return (
    <section
      ref={ref}
      className="relative h-dvh w-screen z-5 flex flex-col justify-center items-center pb-8 px-4 lg:pr-8 gap-8 lg:gap-2"
    >
      <div className="relative w-full h-full flex flex-col lg:flex-row flex-1 items-center justify-center gap-8 pt-[90px] md:pt-[50px] lg:pt-[40px]">
        <Link to={projectUrl} className="w-full h-full rounded-lg">
          <img
            src={image}
            alt={title}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="size-full md:w-full md:h-[80vh] lg:h-[83vh] rounded-lg object-cover"
          />
        </Link>

        <div className="absolute bottom-1 px-2 w-full py-2 h-fit flex flex-row justify-between items-end">
          <div className="flex items-center justify-start h-full gap-2 w-fit border border-900 px-2 py-1 rounded-full bg-black/90 backdrop-blur-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <h3 className=" text-white font-poppins font-extralight text-xs">
              {format(date, "PPP")}
            </h3>
          </div>

          <ul
            ref={techStackRef}
            className="text-white font-poppins font-light text-xs flex items-center justify-end gap-0.5 md:gap-2 flex-wrap w-2/3"
          >
            {techStack.map((tech, index) => (
              <li
                key={index}
                className="flex items-center gap-x-3 w-fit border border-900 px-2 py-1 rounded-full bg-black/90 backdrop-blur-sm"
              >
                <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
                {tech.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div
        ref={footerRef}
        className="relative w-full h-fit flex items-end justify-between pt-0 gap-2 md:gap-8"
      >
        <h2 className="text-white font-poppins text-3xl md:text-7xl lg:text-8xl leading-none h-fit">
          {title}
          <br />
          {subtitle && (
            <p className="text-sm md:text-lg lg:text-2xl text-400 leading-none">
              {subtitle}
            </p>
          )}
        </h2>
        <Link
          to={`/works/${projectUrl}`}
          className="text-primary hover:text-gray-300 transition-colors flex items-center justify-center gap-2 md:mb-4"
        >
          <p className="text-xs md:text-base text-nowrap">Explore Project</p>
          <img
            src="/icons/CustomArrowIcon.svg"
            alt="custom_arrow_icon"
            className="w-4 h-4 md:w-6 md:h-6"
          />
        </Link>
      </div>
    </section>
  );
};

export default WorkOverview;
