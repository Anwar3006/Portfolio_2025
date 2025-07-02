import { lazy, Suspense, useRef } from "react";
import {
  BrowserRouter,
  HashRouter,
  Route,
  Routes,
  useLocation,
} from "react-router";
import CustomCursor from "./components/CustomCursor";
import { ReactLenis } from "lenis/react";
import PageTransition from "./components/PageTransition";

const HomePage = lazy(() => import("./pages/Home"));
const WorksPage = lazy(() => import("./pages/Works"));
const ProjectPage = lazy(() => import("./pages/Project"));
const ContactPage = lazy(() => import("./pages/Contact"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));

const App = () => {
  const transitionRef = useRef(null);

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
        <PageTransition transitionRef={transitionRef} />
        <CustomCursor />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={<HomePage transitionRef={transitionRef} />}
            />
            <Route
              path="/works"
              element={<WorksPage transitionRef={transitionRef} />}
            />
            <Route
              path="/works/:slug"
              element={<ProjectPage transitionRef={transitionRef} />}
            />
            <Route
              path="/contact"
              element={<ContactPage transitionRef={transitionRef} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </ReactLenis>
    </BrowserRouter>
  );
};

export default App;
