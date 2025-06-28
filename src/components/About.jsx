import React from "react";

const About = () => {
  return (
    <div
      id="about"
      data-scroll-section // Lenis identifier
      className="sticky top-0 left-0  bg-black z-4  w-full h-screen min-h-[700px] md:mb-[100px]"
    >
      <div className="flex w-full h-full">
        {/* Left side - Image container */}
        <div
          data-scroll
          data-scroll-speed="0.5" // Parallax effect
          className="w-1/2 h-full"
        >
          <img src="chat1.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        {/* Right side - Text container */}
        <div
          data-scroll
          data-scroll-speed="0.8" // Slightly different speed for parallax
          className="w-1/2 h-full flex flex-col justify-center items-center px-4 lg:px-16 my-10"
        >
          {/* Top text with carousel effect placeholder */}
          <div className="mb-8 flex items-start justify-start w-full max-w-md">
            <p className="text-white text-xs md:text-base lg:text-lg font-poppins tracking-widest">
              a bit about me.
            </p>
          </div>
          {/* Main content text */}
          <div className="max-w-md">
            <p className="hidden md:block text-gray-400 text-xs md:text-base lg:text-lg leading-relaxed font-poppins font-light">
              <span className="text-primary italic">Full-stack developer</span>{" "}
              with a dynamic fusion of mechanical engineering precision and
              cutting-edge development skills. I made the exciting leap from
              Mechanical Engineering to tech through ALX Software Engineering's
              rigorous 12-month program—and I've never looked back! <br />
              My engineering foundation gives me a unique edge:{" "}
              <span className="text-primary italic">
                {" "}
                methodical problem-solving meets creative innovation
              </span>
              . I love diving deep into complex challenges, transforming
              ambitious business visions into scalable, high-performance
              solutions that span the entire stack.
              <br />
              <span className="text-primary italic">What drives me?</span> Those
              "aha!" moments when solving intricate puzzles—whether it's
              architecting robust backend systems, crafting intuitive user
              experiences, or optimizing performance to perfection. I'm
              passionate about building technology that doesn't just work, but
              makes a real difference. Ready to collaborate on something
              amazing?{" "}
              <span className="text-primary italic">
                Let's create solutions that push boundaries and deliver impact!
              </span>
            </p>
            <p className="block md:hidden font-light text-gray-400 text-xs md:text-base lg:text-lg leading-relaxed font-poppins">
              <span className="text-primary italic">Full-stack developer</span>{" "}
              fusing mechanical engineering precision with modern development
              expertise. My engineering background brings a unique edge:
              <span className="text-primary italic">
                {" "}
                methodical problem-solving meets creative innovation
              </span>
              . I transform complex business challenges into scalable solutions
              across the entire stack. Passionate about building technology that
              makes a <span className="text-primary italic">real impact</span>.
              Ready to collaborate on something amazing?
            </p>
          </div>
        </div>
      </div>
      {/* <div className="w-full h-[700px] overflow-hidden" /> */}
    </div>
  );
};

export default About;

//   return (
//     <div className="relative flex flex-col justify-center items-center w-full h-fit min-h-[700px] z-4 bg-900 gap-[10px] py-[100px] md:py-[256px] px-[140px] overflow-visible">
//       <div className="flex flex-col items-center justify-between gap-20">
//         {/* give this text a different font and give it a carousel effect */}
//         <p className="text-white sticky top-24 w-screen z-5 px-3 text-xs md:text-sm lg:text-base">
//           dedicated to continous learning and continuous improvement.
//         </p>

//         <div className="flex items-center justify-between sticky top-0 gap-5">
//           <div className="relative top-34 md:top-26 lg:top-0 left-0">
//             <img
//               src="chat1.jpg"
//               alt=""
//               className="w-full h-full object-cover object-center"
//             />
//           </div>
//           <div className="max-w-md px-2 md:mt-[200px] lg:flex-shrink-0 lg:mb-[200px] lg:mt-0">
//             <p className="text-400 text-xs md:text-sm lg:text-base">
//               I'm a full-stack software developer with a unique blend of
//               mechanical engineering discipline and modern development
//               expertise. After graduating with a Mechanical Engineering degree,
//               I completed ALX Software Engineering's intensive 12-month bootcamp
//               to pivot into tech.
//             </p>
//           </div>
//         </div>
//         <div className="w-full h-[700px] overflow-hidden" />
//         <div className="w-full h-[700px] overflow-hidden" />
//       </div>
//     </div>
//   );
