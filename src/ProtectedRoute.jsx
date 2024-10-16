import React, { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const [user, setUser] = useState(true);

  return user ? <Outlet /> : <Navigate to="/welcome" />;
};

export default ProtectedRoute;
