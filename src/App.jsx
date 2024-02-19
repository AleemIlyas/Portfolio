import "./App.css";
import Home from "./container/HomePage/Home";
import React, { useMemo } from "react";
const Contact = React.lazy(() => import("./container/Contact/Contact"));
const AdminLogin = React.lazy(() =>
  import("./container/AdminLogin/adminLogin")
);
import Spinner from "./components/UI/Spinner/spinner";
const AdminDashboard = React.lazy(() => import("./container/AdminPanel/index"));
const AdminLayout = React.lazy(() =>
  import("./container/AdminPanel/Layout/Layout")
);
const Project = React.lazy(() =>
  import("./container/AdminPanel/Project/Project")
);
import Layout from "./components/Layout/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./Context/AuthContext";

function App() {
  const { isAuthenticated } = useAuth();
  let adminRoutes = isAuthenticated ? (
    <Route path="/Admin/*" element={<AdminLayout />}>
      <Route index path="Dashboard" element={<AdminDashboard />} />
      <Route path="Project" element={<Project />} />
    </Route>
  ) : (
    <Route path="/login" element={<AdminLogin />} />
  );
  return (
    <React.Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
        {adminRoutes}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
