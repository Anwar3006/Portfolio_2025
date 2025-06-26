import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import CustomCursor from "./components/CustomCursor";

const HomePage = lazy(() => import("./pages/Home"));
const WorksPage = lazy(() => import("./pages/Works"));
const ProjectPage = lazy(() => import("./pages/Project"));
const ContactPage = lazy(() => import("./pages/Contact"));

const App = () => {
  return (
    <BrowserRouter>
      <CustomCursor />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/works/:slug" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
