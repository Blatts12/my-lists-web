import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AppContainer } from "./components/common/Container";
import ProtectedElement from "./components/common/ProtectedElement";
import Navbar from "./components/navigation/Navbar";
import globalStyles from "./globalStyles";
import HomePage from "./pages/HomePage";
import ItemPage from "./pages/ItemPage";
import ListPage from "./pages/ListPage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import RegisterPage from "./pages/RegisterPage";
import useAuthStore from "./stores/AuthStore";
import useUiStore from "./stores/UiStore";

const getIsMobile = () => window.innerWidth <= 600;

const App: React.FC = () => {
  const setIsMobile = useUiStore((state) => state.setIsMobile);
  const loadUser = useAuthStore((state) => state.load);
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

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <>
      <AppContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/item/:id"
            element={
              <ProtectedElement>
                <ItemPage />
              </ProtectedElement>
            }
          />
          <Route
            path="/list/:id"
            element={
              <ProtectedElement>
                <ListPage />
              </ProtectedElement>
            }
          />
          <Route
            path="/logout"
            element={
              <ProtectedElement>
                <LogoutPage />
              </ProtectedElement>
            }
          />
        </Routes>
      </AppContainer>
    </>
  );
};

export default App;
