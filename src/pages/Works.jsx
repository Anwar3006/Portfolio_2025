import {
  projectThreeStacks,
  projectTwoStacks,
  projectZentryStacks,
} from "../utils/data";
import Navbar from "../components/Navbar";
import WorkOverview from "../components/WorkOverview";

const Works = () => {
  return (
    <div className="flex flex-col justify-start items-center bg-800">
      <Navbar />
      <div className="flex flex-col items-center justify-center gap-36">
        <WorkOverview
          title="Zentry Clone"
          subtitle="(Landing Page)"
          image="/images/p2-gif.jpg"
          date={Date.now()}
          techStack={projectZentryStacks}
          projectUrl="zentry-clone"
        />
        <WorkOverview
          title="Project #2"
          image="/images/p2-gif.jpg"
          date={Date.now()}
          techStack={projectTwoStacks}
          projectUrl="zentry-clone"
        />
        <WorkOverview
          title="Project #3"
          image="/images/p2-gif.jpg"
          date={Date.now()}
          techStack={projectThreeStacks}
          projectUrl="zentry-clone"
        />
      </div>
    </div>
  );
};

export default Works;
