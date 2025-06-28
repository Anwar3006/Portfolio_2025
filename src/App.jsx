import { lazy, Suspense } from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router";
import CustomCursor from "./components/CustomCursor";
import { ReactLenis } from "lenis/react";

const HomePage = lazy(() => import("./pages/Home"));
const WorksPage = lazy(() => import("./pages/Works"));
const ProjectPage = lazy(() => import("./pages/Project"));
const ContactPage = lazy(() => import("./pages/Contact"));

const App = () => {
  return (
    <BrowserRouter>
      <ReactLenis
        root
        options={{
          duration: 1.4,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          gestureOrientation: "vertical",
          direction: "vertical",
          smooth: true,
          smoothTouch: false,
          touchMultiplier: 2,
          autoResize: true,
        }}
      >
        <CustomCursor />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/works" element={<WorksPage />} />
            <Route path="/works/:slug" element={<ProjectPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </ReactLenis>
    </BrowserRouter>
  );
};

export default App;
