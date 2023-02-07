import React, { lazy, Suspense, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { Routes, Route } from "react-router-dom";
import LibraryPageLayout from "../components/LibraryPageLayout";
import Loader from "../../components/Loader";
const Guide = lazy(() => import("../pages/Guide"));
const NotFound = lazy(() => import("../../pages/NotFound"));
const BeginGuide = lazy(() => import("../pages/BeginGuide"));
const LatestNews = lazy(() => import("../pages/LatestNews"));
const Microdosing = lazy(() => import("../pages/Microdosing"));
const PlanTrip = lazy(() => import("../pages/PlanTrip"));
const NewslettersCollection = lazy(
  () => import("../pages/NewsLettersCollection")
);
import ReactGA from "react-ga";

// initializing react ga
const gaTrackId: string | undefined = process.env.REACT_APP_GA_TRACK_ID;
ReactGA.initialize(gaTrackId!);

const Library = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Sidebar>
          <LibraryPageLayout>
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="home" element={<Guide />} />
              <Route path="beginners-guide" element={<BeginGuide />} />
              <Route path="latest-news" element={<LatestNews />} />
              <Route path="microdosing" element={<Microdosing />} />
              <Route path="plan-your-trip" element={<PlanTrip />} />
              <Route
                path="newsletter-collection"
                element={<NewslettersCollection />}
              />
            </Routes>
          </LibraryPageLayout>
        </Sidebar>
      </Suspense>
    </>
  );
};

export default Library;
