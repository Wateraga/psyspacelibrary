import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import Faq from "../pages/Faq";
/**
 * Component for rendering main routes.
 *
 * @component
 * @return {route} routes
 **/
function MainLayout() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </Layout>
    </>
  );
}

export default MainLayout;
