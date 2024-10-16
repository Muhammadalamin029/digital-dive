import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { BlogContext } from "./context/BlogContextProvider";

const ProtectedRoute = () => {
  const { user } = useContext(BlogContext);
  return user ? <Outlet /> : <Navigate to="/welcome" replace />;
};

export default ProtectedRoute;
