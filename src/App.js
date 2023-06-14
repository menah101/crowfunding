import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Modal from "react-modal";
import LayoutDashboard from "layout/LayoutDashboard";

const DashboardPage = React.lazy(() => import("./pages/DashboardPage"));
const CampaignPage = React.lazy(() => import("./pages/CampaignPage"));
const CampaignView = React.lazy(() => import("./pages/CampaignView"));
const StartCampaignPage = React.lazy(() => import("./pages/StartCampaignPage"));
const SignUpPage = React.lazy(() => import("./pages/SignUpPage"));
const SignInPage = React.lazy(() => import("./pages/SignInPage"));

Modal.setAppElement("#root");
Modal.defaultStyles = {};

function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<LayoutDashboard />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/campaign" element={<CampaignPage />} />
          <Route path="/campaign/:slug" element={<CampaignView />} />
          <Route path="/start-campaign" element={<StartCampaignPage />} />
        </Route>

        <Route path="/register" element={<SignUpPage />} />
        <Route path="/login" element={<SignInPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
