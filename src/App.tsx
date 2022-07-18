//app entry
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Library from "./components/Library";
import Layout from "./components/Layout";
import MainLayout from "./routes/MainLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </>
  );
}

export default App;
