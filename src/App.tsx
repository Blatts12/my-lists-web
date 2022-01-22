import React from "react";
import { AppContainer, Container } from "./components/common/Container";
import Navbar from "./components/navigation/Navbar";
import globalStyles from "./globalStyles";

const App: React.FC = () => {
  globalStyles();

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
