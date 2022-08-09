//  app entry
import React from "react";
import { Routes, Route } from "react-router-dom";
import Library from "./library/routes";
import MainLayout from "./routes/MainLayout";
/**
 * @component
 * @return {route} routes
 */
function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<MainLayout />} />
        <Route path="/library/*" element={<Library />} />
      </Routes>
    </>
  );
}

export default App;
