import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import { ReactLenis } from "lenis/react";
import PageTransition from "./components/PageTransition";
import { TransitionProvider } from "./contexts/TransitionContext";

const HomePage = lazy(() => import("./pages/Home"));
const ProjectListPage = lazy(() => import("./pages/ProjectListPage"));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage"));
const ContactPage = lazy(() => import("./pages/Contact"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <BrowserRouter>
      <TransitionProvider>
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
            syncTouch: false,
            touchInertiaMultiplier: 35,
            wheelMultiplier: 1,
            infinite: false,
          }}
        >
          <PageTransition />
          <CustomCursor />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/works" element={<ProjectListPage />} />
              <Route path="/works/:slug" element={<ProjectDetailPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </ReactLenis>
      </TransitionProvider>
    </BrowserRouter>
  );
};

export default App;
