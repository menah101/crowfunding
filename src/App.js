import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Modal from "react-modal";
import LayoutDashboard from "layout/LayoutDashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { authUpdateUser, authRefreshToken } from "store/auth/auth-slice";
import { getToken, logOut } from "utils/auth";

const DashboardPage = React.lazy(() => import("./pages/DashboardPage"));
const CampaignPage = React.lazy(() => import("./pages/CampaignPage"));
const CampaignView = React.lazy(() => import("./pages/CampaignView"));
const StartCampaignPage = React.lazy(() => import("./pages/StartCampaignPage"));
const SignUpPage = React.lazy(() => import("./pages/SignUpPage"));
const SignInPage = React.lazy(() => import("./pages/SignInPage"));

Modal.setAppElement("#root");
Modal.defaultStyles = {};

function App({ children }) {
  const { user, access_token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user && user.id) {
      dispatch(
        authUpdateUser({
          user,
          accessToken: access_token,
        })
      );
    } else {
      const { refresh_token } = getToken();
      if (refresh_token) {
        dispatch(authRefreshToken(refresh_token));
      } else {
        dispatch(authUpdateUser({}));
        logOut();
      }
    }
  }, [dispatch, user, access_token]);

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
      <ToastContainer bodyClassName="font-body text-sm" />
    </Suspense>
  );
}

export default App;
