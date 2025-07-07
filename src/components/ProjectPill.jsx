import { BsGithub } from "react-icons/bs";
import { IoMdGlobe } from "react-icons/io";

const ProjectPills = ({ githubUrl, websiteUrl }) => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex gap-2">
        {/* GitHub Pill */}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-800/60 text-white px-3 py-1.5 rounded-full transition-colors duration-200 text-sm"
          >
            <BsGithub size={16} />
            <span>Code</span>
          </a>
        )}

        {/* Website Pill */}
        {websiteUrl && (
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary hover:bg-primary/60 px-3 py-1.5 rounded-full transition-colors duration-200 text-sm"
          >
            <IoMdGlobe size={16} />
            <span>Live</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectPills;
