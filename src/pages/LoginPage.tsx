import React from "react";
import { Navigate } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import { Container } from "../components/common/Container";
import useAuthStore from "../stores/AuthStore";

const LoginPage: React.FC = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (isAuthenticated) return <Navigate to="/" />;

  return (
    <Container>
      <LoginForm />
    </Container>
  );
};

export default LoginPage;
