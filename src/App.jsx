import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const WeekDetail = lazy(() => import("./pages/WeekDetail"));
const ThankYou = lazy(() => import("./pages/ThankYou"));

function Loading() {
  return <p className="px-4 py-16 text-slate">Loading...</p>;
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/curriculum/:weekId"
          element={
            <Suspense fallback={<Loading />}>
              <WeekDetail />
            </Suspense>
          }
        />
        <Route
          path="/thank-you"
          element={
            <Suspense fallback={<Loading />}>
              <ThankYou />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}