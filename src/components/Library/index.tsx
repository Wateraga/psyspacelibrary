import React from "react";
import Sidebar from "../Sidebar";
import {  Routes, Route } from "react-router-dom";
import Demo from "./Demo";
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
