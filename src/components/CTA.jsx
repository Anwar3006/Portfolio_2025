import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const CTA = () => {
  const containerRef = useRef(null);
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);

  useGSAP(
    () => {
      const firstText = firstTextRef.current;
      const secondText = secondTextRef.current;

      if (!firstText || !secondText) return;

      // Set initial positions
      gsap.set(firstText, { x: "0%" });
      gsap.set(secondText, { x: "100%" });

      // Create the infinite animation timeline
      const tl = gsap.timeline({ repeat: -1, ease: "none" });

      // Move first text from 0% to -100%
      tl.to(
        firstText,
        {
          x: "-100%",
          duration: 20,
          ease: "none",
        },
        0
      )
        // Move second text from 100% to 0%
        .to(
          secondText,
          {
            x: "0%",
            duration: 20,
            ease: "none",
          },
          0
        )
        // Reset positions for seamless loop
        .set(firstText, { x: "100%" })
        .set(secondText, { x: "0%" })
        // Continue the cycle
        .to(firstText, {
          x: "0%",
          duration: 20,
          ease: "none",
        })
        .to(
          secondText,
          {
            x: "-100%",
            duration: 20,
            ease: "none",
          },
          "<"
        );

      return () => {
        tl.kill();
      };
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen bg-white flex flex-col overflow-hidden"
      style={{ zIndex: 5 }}
    >
      {/* Main content area */}
      <div className="flex-1 flex items-center justify-center relative">
        <div className="relative w-full flex items-center justify-center">
          <a
            ref={firstTextRef}
            href="mailto:anwarsadat.d2@gmail.com"
            className="uppercase font-bold whitespace-nowrap cursor-pointer transition-colors 
                       text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-[120px] 2xl:text-[150px]"
            style={{ fontFamily: "Roboto Condensed, sans-serif" }}
          >
            let's work together —
          </a>
          <a
            ref={secondTextRef}
            href="mailto:anwarsadat.d2@gmail.com"
            className="uppercase font-bold whitespace-nowrap cursor-pointer transition-colors  absolute
                       text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-[120px] 2xl:text-[150px]"
            style={{ fontFamily: "Roboto Condensed, sans-serif" }}
          >
            let's work together —
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="relative w-full flex items-center justify-between p-4 sm:p-6 md:p-8 flex-shrink-0">
        <div>
          <p className="font-extralight text-xs sm:text-sm md:text-base text-gray-800">
            @Curiousfellow
          </p>
        </div>

        <div>
          <a
            href="mailto:anwarsadat.d2@gmail.com"
            className="font-extralight text-xs sm:text-sm md:text-base text-gray-800 hover:text-gray-600 transition-colors"
          >
            anwarsadat.d2@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTA;
