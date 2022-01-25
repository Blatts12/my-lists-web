import React from "react";
import { Navigate } from "react-router-dom";
import RegisterForm from "../components/auth/RegisterForm";
import { Container } from "../components/common/Container";
import useAuthStore from "../stores/AuthStore";

const RegisterPage: React.FC = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (isAuthenticated) return <Navigate to="/" />;

  return (
    <Container>
      <RegisterForm />
    </Container>
  );
};

export default RegisterPage;
