import React, { useEffect } from "react";
import { AppContainer, Container } from "./components/common/Container";
import Navbar from "./components/navigation/Navbar";
import globalStyles from "./globalStyles";
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
        <Container></Container>
      </AppContainer>
    </>
  );
};

export default App;
