// Page
import Navbar from "../components/Navbar";
import SingleProject from "../components/SingleProject";
import { useLocation } from "react-use";
import { projectTwoStacks, projectZentryStacks } from "../utils/data";
import { Link } from "react-router";
import { useEffect } from "react";

const zentryCloneMedia = [
  "/zentry-clone/zentry-clone-wf.png",
  "/zentry-clone/zentry-clone-code.png",
  "/zentry-clone/zentry-clone-live.mp4",
];

const projectTwoMedia = [
  "/placeholder/p1-1.jpg",
  "/placeholder/p1-2.jpg",
  "/placeholder/p1-3.jpg",
  "/placeholder/p1-gif.jpg",
];

const Project = ({ transitionRef }) => {
  const location = useLocation();
  const projectSlug = location.pathname.split("/")[2]; //when using BrowserRouter
  // const projectSlug = location.hash.split("/")[2]; //when using HashRouter

  useEffect(() => {
    // Dispatch a reset event when route changes
    window.dispatchEvent(new CustomEvent("cursor-reset"));
  }, [location.pathname]);

  const renderSingleProject = (slug) => {
    switch (slug) {
      case "zentry-clone":
        return (
          <SingleProject
            title="Zentry Clone"
            subtitle="(Landing Page)"
            techStack={projectZentryStacks}
            media={zentryCloneMedia}
            nextProjectTitle="Project #2"
            nextProjectHref="/works/project-2"
          />
        );

      case "project-2":
        return (
          <SingleProject
            title="Project #2"
            techStack={projectTwoStacks}
            media={projectTwoMedia}
            nextProjectTitle="Project #3"
            nextProjectUrl="/works/project-3"
          />
        );

      default:
        // Return a 404 component or redirect to works page
        return (
          <div className="flex flex-col items-center justify-center min-h-screen text-white">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-gray-400 mb-8">
              The project you're looking for doesn't exist.
            </p>
            <Link
              to="/works"
              className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Back to Works
            </Link>
          </div>
        );
    }
  };

  return (
    <section className="relative bg-800 flex flex-col items-center justify-start gap-8">
      <Navbar transitionRef={transitionRef} />

      {renderSingleProject(projectSlug)}
    </section>
  );
};

export default Project;
