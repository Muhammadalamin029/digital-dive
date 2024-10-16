import React, { useContext } from "react";
import { BlogContext } from "./src/context/BlogContextProvider";
import { Navigate, Outlet } from "react-router-dom";

const AuthProtectedRoute = () => {
  const { user } = useContext(BlogContext);
  return user ? <Navigate to="/" replace /> : <Outlet />;
};

export default AuthProtectedRoute;
