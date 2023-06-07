import LayoutDashboard from "layout/LayoutDashboard";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const DashboardPage = React.lazy(() => import("./pages/DashboardPage"));
const CampaignPage = React.lazy(() => import("./pages/CampaignPage"));
const StartCampaignPage = React.lazy(() => import("./pages/StartCampaignPage"));
const SignUpPage = React.lazy(() => import("./pages/SignUpPage"));
const SignInPage = React.lazy(() => import("./pages/SignInPage"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<LayoutDashboard />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/campaign" element={<CampaignPage />} />
          <Route path="/start-campaign" element={<StartCampaignPage />} />
        </Route>

        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
