import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import Faq from "../pages/Faq";
import Privacy from "../pages/privacy";
import Terms from "../pages/terms";
/**
 * Component for rendering main routes.
 *
 * @component
 * @return {ReactElement} routes
 **/
function MainLayout() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />{" "}
          <Route path="/terms" element={<Privacy />} />{" "}
          <Route path="/privacy" element={<Terms />} />
        </Routes>
      </Layout>
    </>
  );
}

export default MainLayout;
