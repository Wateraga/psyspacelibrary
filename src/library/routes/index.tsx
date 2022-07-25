import React from "react";
import Sidebar from "../components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Demo from "../pages/Demo";
const Library = () => {
  return (
    <>
      <Sidebar>
        <Routes>
          <Route path="home" element={<Demo />} />
        </Routes>
      </Sidebar>
    </>
  );
};

export default Library;
