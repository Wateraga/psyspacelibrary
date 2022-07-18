//app entry
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Library from "./components/Library";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
