import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProjectDetail from "../components/ProjectDetail";
import { projects } from "../data/projects";
import NotFoundPage from "./NotFound";

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const nextProject = projects.find((p) => p.slug === project?.nextProjectSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
    window.dispatchEvent(new CustomEvent("cursor-reset"));
  }, [slug]);

  if (!project) {
    return <NotFoundPage />;
  }

  return (
    <section className="relative bg-800 flex flex-col items-center justify-start gap-8">
      <Navbar />
      <ProjectDetail
        title={project.title}
        subtitle={project.subtitle}
        techStack={project.techStack}
        media={project.media}
        githubUrl={project.githubUrl}
        websiteUrl={project.websiteUrl}
        nextProjectTitle={nextProject?.title}
        nextProjectHref={`/works/${nextProject?.slug}`}
      />
    </section>
  );
};

export default ProjectDetailPage;
