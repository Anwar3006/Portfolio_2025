// Page
import Navbar from "../components/Navbar";
import SingleProject from "../components/SingleProject";
import { useLocation } from "react-use";
import { projectTwoStacks, projectZentryStacks } from "../utils/data";
import { Link } from "react-router";
import { useEffect } from "react";

const zentryCloneMedia = [
  "projects/zentry_clone/zentry-clone-wf_wru9ow.png",
  "projects/zentry_clone/zentry-clone-code_sfpa93.png",
  "projects/zentry_clone/zentry-clone-live_heim6o.mp4",
];

const minimalistWatchMedia = [
  "projects/minimalist_watch/watch_code_s27hkk.png",
  "projects/minimalist_watch/watch_phone_min1pr.mp4",
  "projects/minimalist_watch/watch_laptop_u1yenc.mp4",
];

const Project = ({ transitionRef }) => {
  const location = useLocation();
  const projectSlug = location.pathname.split("/")[2]; //when using BrowserRouter
  // const projectSlug = location.hash.split("/")[2]; //when using HashRouter

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
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
            githubUrl="https://github.com/Anwar3006/zentry-clone"
            websiteUrl=""
            nextProjectTitle="Project #2"
            nextProjectHref="/works/project-2"
          />
        );

      case "minimalist_watch":
        return (
          <SingleProject
            title="Minimalist Watch Store"
            subtitle="(Landing Page)"
            techStack={projectTwoStacks}
            media={minimalistWatchMedia}
            githubUrl="https://github.com/Anwar3006/Minimalist_Watch/"
            websiteUrl="https://minimalist-watch.netlify.app/"
            nextProjectTitle="Minimalist"
            nextProjectHref="/works/minimalist"
          />
        );

      case "minimalist":
        return (
          <SingleProject
            title="Minimalist Watch Store"
            subtitle="(Landing Page)"
            techStack={projectTwoStacks}
            media={[]}
            githubUrl="https://github.com/Anwar3006/Minimalist_Watch/"
            websiteUrl="https://minimalist-watch.netlify.app/"
            nextProjectTitle="Project #3"
            nextProjectHref="/works/project-3"
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
