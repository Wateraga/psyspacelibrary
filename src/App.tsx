//  app entry
import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Library from "./library/routes";
import MainLayout from "./routes/MainLayout";
import CookieConsent from "react-cookie-consent";
import ReactGA from "react-ga";

// initializing react ga
const gaTrackId: string | undefined = process.env.REACT_APP_GA_TRACK_ID;
ReactGA.initialize(gaTrackId!);
console.log("trackId", gaTrackId);

/**
 * @component
 * @return {route} routes
 */
function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

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
        This website uses cookies to enhance the user experience!!
      </CookieConsent>
    </>
  );
}

export default App;
