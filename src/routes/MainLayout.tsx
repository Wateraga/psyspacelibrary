import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import Faq from "../pages/Faq";
import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";
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
          <Route path="/terms" element={<Terms />} />{" "}
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Layout>
    </>
  );
}

export default MainLayout;
