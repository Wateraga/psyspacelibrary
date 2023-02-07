import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const Home = lazy(() => import("../pages/Home"));
const Layout = lazy(() => import("../components/Layout"));
const Faq = lazy(() => import("../pages/Faq"));
const Privacy = lazy(() => import("../pages/Privacy"));
const Terms = lazy(() => import("../pages/Terms"));
const NotFound = lazy(() => import("../pages/NotFound"));
import Loader from "../components/Loader";

/**
 * Component for rendering main routes.
 *
 * @component
 * @return {ReactElement} routes
 **/
function MainLayout() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Layout>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<Faq />} />{" "}
            <Route path="/terms" element={<Terms />} />{" "}
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </Layout>
      </Suspense>
    </>
  );
}

export default MainLayout;
