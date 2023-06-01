import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const DashboardPage = React.lazy(() => import("./pages/DashboardPage"));
const SignUpPage = React.lazy(() => import("./pages/SignUpPage"));
const SignInPage = React.lazy(() => import("./pages/SignInPage"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
