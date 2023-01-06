//  app entry
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Library from "./library/routes";
import MainLayout from "./routes/MainLayout";
import CookieConsent from "react-cookie-consent";

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
      <CookieConsent
        location="bottom"
        buttonText="Sure man!!"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{
          color: "#fff",
          background: "#FF0080",
          fontSize: "13px",
          borderRadius: "20px",
        }}
        expires={150}
      >
        This website uses cookies to enhance the user experience!
      </CookieConsent>
    </>
  );
}

export default App;
