import React from "react";
import Sidebar from "../components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Guide from "../pages/Guide";
import BeginGuide from "../pages/BeginGuide";
// eslint-disable-next-line import/namespace
import LatestNews from "../pages/LatestNews";
import Microdosing from "../pages/Microdosing";
const Library = () => {
  return (
    <>
      <Sidebar>
        <Routes>
          <Route path="home" element={<Guide />} />
          <Route path="beginners-guide" element={<BeginGuide />} />
          <Route path="latest-news" element={<LatestNews />} />
          <Route path="microdosing" element={<Microdosing />} />
        </Routes>
      </Sidebar>
    </>
  );
};

export default Library;
