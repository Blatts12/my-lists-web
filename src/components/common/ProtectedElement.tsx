import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuthStore from "../../stores/AuthStore";

interface ProtectedElementProps {
  children: React.ReactNode;
}

const ProtectedElement: React.FC<ProtectedElementProps> = ({ children }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const location = useLocation();

  if (isAuthenticated) return <>{children}</>;

  return <Navigate to="/" state={{ from: location }} />;
};

export default ProtectedElement;
