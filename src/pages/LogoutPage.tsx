import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "../stores/AuthStore";

const LogoutPage: React.FC = () => {
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    logout();
  }, [logout]);

  return <Navigate to="/" />;
};

export default LogoutPage;
