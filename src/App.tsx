import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AppContainer } from "./components/common/Container";
import Navbar from "./components/navigation/Navbar";
import globalStyles from "./globalStyles";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import useUiStore from "./stores/UiStore";

const getIsMobile = () => window.innerWidth <= 600;

const App: React.FC = () => {
  const setIsMobile = useUiStore((state) => state.setIsMobile);
  globalStyles();

  useEffect(() => {
    const onResize = () => {
      setIsMobile(getIsMobile());
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [setIsMobile]);

  return (
    <>
      <AppContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </AppContainer>
    </>
  );
};

export default App;
