//  app entry
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Library from "./library/routes";
import MainLayout from "./routes/MainLayout";
/**
 * @component
 * @return {route} routes
 */
function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/*" element={<MainLayout />} />
          <Route path="/library/*" element={<Library />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
