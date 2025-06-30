import { useEffect, useRef, useState } from "react";
import useMousePosition from "../hooks/useMousePosition";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CustomCursor = () => {
  const mouseRef = useRef();
  const { x, y } = useMousePosition();
  const [cursorState, setCursorState] = useState({
    isHovered: false,
    isProjectHovered: false,
    isLinkHovered: false,
    projectImage: null,
    projectName: null,
    projectSide: "left",
  });

  // Determine cursor type based on state priority
  const getCursorType = () => {
    if (cursorState.isHovered) return "project-preview";
    if (cursorState.isProjectHovered) return "project-explore";
    if (cursorState.isLinkHovered) return "link";
    return "default";
  };

  // Animation configurations for each cursor type
  const cursorConfigs = {
    default: {
      x: x - 12,
      y: y - 12,
      width: 24,
      height: 24,
      borderRadius: "50%",
    },
    "project-preview": {
      x: x - (cursorState.projectSide === "left" ? 10 : 180),
      y: y + 40,
      width: 200,
      height: 140,
      borderRadius: 8,
    },
    "project-explore": {
      x: x - 60,
      y: y - 60,
      width: 120,
      height: 120,
      borderRadius: "50%",
    },
    link: {
      x: x - 20,
      y: y - 20,
      width: 40,
      height: 40,
      borderRadius: "50%",
    },
  };

  // Get cursor styles based on type
  const getCursorStyles = (type) => {
    switch (type) {
      case "project-preview":
        return "bg-white/10 backdrop-blur-sm border-2 border-white/70";
      case "project-explore":
        return "bg-primary/80 mix-blend-difference";
      case "link":
        return "bg-white/20 mix-blend-difference border border-white/50";
      default:
        return "bg-primary mix-blend-difference";
    }
  };

  useGSAP(() => {
    const cursorType = getCursorType();
    const config = cursorConfigs[cursorType];

    gsap.to(mouseRef.current, {
      ...config,
      duration: 0.3,
      ease: "power2.out",
    });
  }, [x, y, cursorState]);

  // Event handlers
  useEffect(() => {
    const handleCursorEnterProject = (e) => {
      setCursorState((prev) => ({
        ...prev,
        isHovered: true,
        projectImage: e.detail.image,
        projectName: e.detail.name,
        projectSide: e.detail.side,
      }));
    };

    const handleCursorLeaveProject = () => {
      setCursorState((prev) => ({
        ...prev,
        isHovered: false,
        projectImage: null,
        projectName: null,
        projectSide: "left",
      }));
    };

    const handleCursorEnterExploreProject = () => {
      setCursorState((prev) => ({
        ...prev,
        isProjectHovered: true,
      }));
    };

    const handleCursorLeaveExploreProject = () => {
      setCursorState((prev) => ({
        ...prev,
        isProjectHovered: false,
      }));
    };

    const handleCursorEnterLink = () => {
      setCursorState((prev) => ({
        ...prev,
        isLinkHovered: true,
      }));
    };

    const handleCursorLeaveLink = () => {
      setCursorState((prev) => ({
        ...prev,
        isLinkHovered: false,
      }));
    };

    // Event listeners
    window.addEventListener("cursor-enter-project", handleCursorEnterProject);
    window.addEventListener("cursor-leave-project", handleCursorLeaveProject);
    window.addEventListener(
      "enter-explore-project",
      handleCursorEnterExploreProject
    );
    window.addEventListener(
      "leave-explore-project",
      handleCursorLeaveExploreProject
    );
    window.addEventListener("cursor-enter-link", handleCursorEnterLink);
    window.addEventListener("cursor-leave-link", handleCursorLeaveLink);

    return () => {
      window.removeEventListener(
        "cursor-enter-project",
        handleCursorEnterProject
      );
      window.removeEventListener(
        "cursor-leave-project",
        handleCursorLeaveProject
      );
      window.removeEventListener(
        "enter-explore-project",
        handleCursorEnterExploreProject
      );
      window.removeEventListener(
        "leave-explore-project",
        handleCursorLeaveExploreProject
      );
      window.removeEventListener("cursor-enter-link", handleCursorEnterLink);
      window.removeEventListener("cursor-leave-link", handleCursorLeaveLink);
    };
  }, []);

  const cursorType = getCursorType();

  return (
    <div
      ref={mouseRef}
      className={`fixed hidden lg:block top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-300 ${getCursorStyles(
        cursorType
      )}`}
    >
      {/* Project Preview Content */}
      {cursorType === "project-preview" && cursorState.projectImage && (
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

      {/* Project Explore Content */}
      {cursorType === "project-explore" && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <span className="text-white text-xs font-bold bg-black">
            [Explore]
          </span>
        </div>
      )}

      {/* Link Hover Content */}
      {cursorType === "link" && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      )}
    </div>
  );
};

export default CustomCursor;
