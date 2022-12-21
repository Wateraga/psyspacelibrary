import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const Home = lazy(() => import("../pages/Home"));
const Layout = lazy(() => import("../components/Layout"));
const Faq = lazy(() => import("../pages/Faq"));
const Privacy = lazy(() => import("../pages/Privacy"));
const Terms = lazy(() => import("../pages/Terms"));
// const Loader = lazy(() => import("../components/Loader"));
const NotFound = lazy(() => import("../pages/NotFound"));
import Loader from "../components/Loader";
// import NotFound from "../pages/NotFound";
// import Layout from "../components/Layout";
// import Home from "../pages/Home";
// import Faq from "../pages/Faq";
// import Terms from "../pages/Terms";
// import Privacy from "../pages/Privacy";
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
