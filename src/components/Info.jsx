import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { useWindowSize } from "react-use";

gsap.registerPlugin(ScrollTrigger);
const Info = () => {
  // Create separate refs for each animated element
  const figmaRef = useRef(null);
  const framerRef = useRef(null);
  const fullstackRef = useRef(null);
  const cicdRef = useRef(null);
  const cloudRef = useRef(null);
  const testingRef = useRef(null);

  const { width } = useWindowSize();

  useGSAP(() => {
    // Array of all refs to animate
    const refs = [
      figmaRef,
      framerRef,
      fullstackRef,
      cicdRef,
      cloudRef,
      testingRef,
    ];

    // Define different animation values based on screen size
    const getAnimationValues = () => {
      if (width >= 1024) {
        // lg and above
        return { x: 120, duration: 0.8 };
      } else if (width >= 768) {
        // md
        return { x: 80, duration: 0.7 };
      } else {
        // sm and below
        return { x: 40, duration: 0.6 };
      }
    };

    const { x: initialX, duration } = getAnimationValues();

    refs.forEach((ref) => {
      const element = ref.current;
      if (!element) return;

      // Set initial state based on screen size
      gsap.set(element, { x: initialX, opacity: 0 });

      // Create animation with ScrollTrigger
      gsap.to(element, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, [width]);

  return (
    <>
      <div className="sticky md:relative h-full w-screen bg-900 z-5 pb-[100px] pt-[200px] ps-4 pe-10 md:ps-8 md:pe-32">
        <div className="flex items-start justify-start gap-4 ">
          <div className="flex-shrink-0 w-1/4 h-[70vh]">
            <p className="text-white sticky top-[200px] left-0 text-xs md:text-base">
              🧠 Ideation & Design
            </p>
          </div>

          <div className="relative flex flex-col w-3/4 justify-start items-center gap-20">
            <div
              ref={figmaRef}
              className="relative w-full flex flex-col justify-start items-start gap-6"
            >
              <h2 className="text-white text-2xl md:text-5xl font-bold">
                Web Design with <span className="text-primary">Figma</span>
              </h2>
              <p className="text-400 text-xs md:text-base lg:text-lg max-w-xl">
                My approach to web design focuses on creating intuitive,
                user-centered interfaces that scale across devices. I use Figma
                to wireframe, prototype, and iterate quickly, ensuring
                consistency through reusable components and design systems. My
                goal is always to bridge aesthetics with functionality in a
                seamless experience.
              </p>
            </div>

            <div
              ref={framerRef}
              className="relative w-full flex flex-col justify-start items-start gap-6"
            >
              <h2 className="text-white text-3xl md:text-5xl font-bold">
                Rapid Prototyping with{" "}
                <span className="text-primary">Framer</span>
              </h2>
              <p className="text-400 text-xs md:text-base lg:text-lg max-w-xl">
                For rapid prototyping or client-driven iterations, I leverage
                tools like Framer to build fully functional applications without
                sacrificing visual polish. My process combines thoughtful design
                with strategic automation, allowing me to validate ideas quickly
                while keeping long-term scalability in mind.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-full w-screen bg-900 z-5 py-[100px] ps-4 pe-10 md:ps-8 md:pe-32">
        <div className="flex items-start justify-start gap-4 md:gap-10">
          <div className="flex-shrink-0 w-1/4 h-[70vh]">
            <p className="text-white sticky top-[200px] left-0 lg:text-nowrap text-xs md:text-base">
              🏗 Development & Implementation
            </p>
          </div>

          <div className="relative flex flex-col w-3/4 justify-start items-center gap-20">
            <div
              ref={fullstackRef}
              className="relative w-full flex flex-col justify-start items-start gap-6"
            >
              <h2 className="text-white text-3xl md:text-5xl font-bold">
                <span className="text-primary">Full-stack</span> Development
              </h2>
              <p className="text-400 text-xs md:text-base lg:text-lg max-w-xl">
                When performance and control are paramount, I rely on meticulous
                coding practices. I build fullstack applications using modern
                frameworks like React, Next.js, and Spring Boot, with a focus on
                clean architecture, API design, and data integrity. My goal is
                to deliver fast, secure, and maintainable web solutions from
                frontend UI to backend logic.
              </p>
            </div>

            <div
              ref={cicdRef}
              className="relative w-full flex flex-col justify-start items-start gap-6"
            >
              <h2 className="text-white text-3xl md:text-5xl font-bold">
                Version Control
                <span className="text-primary"> &</span> CI/CD
              </h2>
              <p className="text-400 text-xs md:text-base lg:text-lg max-w-xl">
                I treat version control and automation as essential parts of the
                development process. Using Git and platforms like GitHub,
                Jenkins, and GitHub Actions, I maintain clean commit histories
                and set up CI/CD pipelines that ensure every deployment is safe,
                tested, and predictable.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-full w-screen bg-900 z-5 pt-[100px] pb-[200px] ps-4 pe-10 md:ps-8 md:pe-32">
        <div className="relative flex items-start justify-start gap-4 ">
          <div className="flex-shrink-0 w-1/4 h-[70vh]">
            <p className="text-white sticky top-[200px] text-xs md:text-base">
              ☁️ Deployment & Operations
            </p>
          </div>

          <div className="relative flex flex-col w-3/4 justify-start items-center gap-20">
            <div
              ref={cloudRef}
              className="relative w-full flex flex-col justify-start items-start gap-6"
            >
              <h2 className="text-primary text-3xl md:text-5xl font-bold text-nowrap">
                Cloud & DevOps
              </h2>
              <p className="text-400 text-xs md:text-base lg:text-lg max-w-xl">
                I deploy and manage applications using platforms like AWS and
                Heroku, configuring environments for high availability and
                cost-efficiency. I containerize apps with Docker when needed and
                ensure production readiness through monitoring and environment
                variable management.
              </p>
            </div>

            <div
              ref={testingRef}
              className="relative w-full flex flex-col justify-start items-start gap-6"
            >
              <h2 className="text-white text-3xl md:text-5xl font-bold">
                Testing & Debugging
              </h2>
              <p className="text-400 text-xs md:text-base lg:text-lg max-w-xl">
                To ensure robustness, I write comprehensive unit, integration,
                and API tests using tools like JUnit, Mockito, and Jest. I use
                structured logging, debugging tools, and test coverage to catch
                issues early and build systems that recover gracefully under
                failure conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
