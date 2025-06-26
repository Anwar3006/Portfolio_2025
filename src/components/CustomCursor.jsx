import { useEffect, useRef, useState } from "react";
import useMousePosition from "../hooks/useMousePosition";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CustomCursor = () => {
  const mouseRef = useRef();
  const { x, y } = useMousePosition();
  const [cursorState, setCursorState] = useState({
    isHovered: false,
    projectImage: null,
    projectName: null,
    projectSide: "left",
  });

  useGSAP(() => {
    if (cursorState.isHovered) {
      // Animate to rectangle state
      gsap.to(mouseRef.current, {
        x: x - `${cursorState.projectSide === "left" ? 10 : 180}`, // Adjust for larger rectangle
        y: y + 40,
        width: 200,
        height: 140,
        borderRadius: 8,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      // Animate back to circle state
      gsap.to(mouseRef.current, {
        x: x - 12,
        y: y - 12,
        width: 24,
        height: 24,
        borderRadius: "50%",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [x, y, cursorState.isHovered]);

  //listen for the events
  useEffect(() => {
    const handleCursorEnter = (e) => {
      setCursorState({
        isHovered: true,
        projectImage: e.detail.image,
        projectName: e.detail.name,
        projectSide: e.detail.side,
      });
    };

    const handleCursorLeave = () => {
      setCursorState({
        isHovered: false,
        projectImage: null,
        projectName: null,
        projectSide: "left",
      });
    };

    window.addEventListener("cursor-enter-project", handleCursorEnter);
    window.addEventListener("cursor-leave-project", handleCursorLeave);

    return () => {
      window.removeEventListener("cursor-enter-project", handleCursorEnter);
      window.removeEventListener("cursor-leave-project", handleCursorLeave);
    };
  }, []);

  return (
    <div
      ref={mouseRef}
      className={`fixed hidden lg:block top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-300 ${
        cursorState.isHovered
          ? "bg-white/10 backdrop-blur-sm border-2 border-white/70"
          : "bg-primary mix-blend-difference"
      }`}
      style={{
        width: cursorState.isHovered ? 120 : 24,
        height: cursorState.isHovered ? 80 : 24,
        borderRadius: cursorState.isHovered ? "8px" : "50%",
      }}
    >
      {cursorState.isHovered && cursorState.projectImage && (
        <div className="w-full h-full relative overflow-hidden rounded-lg">
          <img
            src={cursorState.projectImage}
            alt={cursorState.projectName}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-1 left-1 right-1 bg-black/50 text-white text-xs px-2 py-1 rounded">
            {cursorState.projectName}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomCursor;
