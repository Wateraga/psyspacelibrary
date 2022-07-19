//app entry
import React from "react"
import { Routes, Route } from "react-router-dom";
import Library from "./components/Library";
import MainLayout from "./routes/MainLayout";

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
