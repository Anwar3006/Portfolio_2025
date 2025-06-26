import React from "react";

const Info = () => {
  return (
    <>
      <div className="relative h-full w-screen bg-900 z-5 pb-[100px] pt-[200px] ps-4 pe-10 md:ps-8 md:pe-32">
        <div className="flex items-start justify-start gap-4 ">
          <div className="flex-shrink-0 w-1/4 h-[70vh]">
            <p className="text-white sticky top-[200px] left-0 text-xs md:text-base">
              🧠 Ideation & Design
            </p>
          </div>

          <div className="relative flex flex-col w-3/4 justify-start items-center gap-20">
            <div className="relative w-full flex flex-col justify-start items-start gap-6">
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
            <div className="relative w-full flex flex-col justify-start items-start gap-6">
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
            <div className="relative w-full flex flex-col justify-start items-start gap-6">
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
            <div className="relative w-full flex flex-col justify-start items-start gap-6">
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
            <div className="relative w-full flex flex-col justify-start items-start gap-6">
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
            <div className="relative w-full flex flex-col justify-start items-start gap-6">
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
