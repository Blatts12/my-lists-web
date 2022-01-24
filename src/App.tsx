import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AppContainer, Container } from "./components/common/Container";
import ProtectedElement from "./components/common/ProtectedElement";
import Navbar from "./components/navigation/Navbar";
import globalStyles from "./globalStyles";
import AuthProtPage from "./pages/AuthProtPage";
import Home from "./pages/Home";
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
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/pp"
              element={
                <ProtectedElement>
                  <AuthProtPage />
                </ProtectedElement>
              }
            />
          </Routes>
        </Container>
      </AppContainer>
    </>
  );
};

export default App;
