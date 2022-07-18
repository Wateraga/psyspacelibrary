//app entry
import { Routes, Route } from "react-router-dom";
import Home from "src/components/Home";
import Library from "src/components/Library";
import Layout from "src/components/Layout";

function MainLayout() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
}

export default MainLayout;
