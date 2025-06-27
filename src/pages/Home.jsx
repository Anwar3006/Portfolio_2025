import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import ProjectVideo from "../components/ProjectVideo";
import Info from "../components/Info";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <div className="flex flex-col justify-start items-center bg-800">
      <Navbar />
      <Hero />
      <About />
      <ProjectVideo />
      <Info />
      <CTA />
    </div>
  );
};

export default Home;
