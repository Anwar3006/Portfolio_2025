import React from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <section className="relative h-dvh w-screen z-5 flex flex-col items-center justify-between bg-white">
      <Navbar />

      <div className="flex items-center justify-center w-full h-full">
        <a
          href="mailto:anwarsadat.d2@gmail.com"
          className="font-bold text-7xl md:text-[140px] lg:text-[220px]"
        >
          [Contact]
        </a>
      </div>

      <div
        id="hero-footer"
        className="absolute bottom-2 w-full h-fit flex flex-shrink-0 items-center justify-between py-6 px-4 md:p-8"
      >
        <div>
          <p className="font-extralight text-xs md:text-sm">@Curiousfellow</p>
        </div>

        <div>
          <a
            href="mailto:anwarsadat.d2@gmail.com"
            className="font-extralight text-xs md:text-sm"
          >
            anwarsadat.d2@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
