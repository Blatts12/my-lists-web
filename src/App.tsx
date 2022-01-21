import React from "react";
import { Container } from "./components/common/Container";
import globalStyles from "./globalStyles";

const App: React.FC = () => {
  globalStyles();

  return <Container></Container>;
};

export default App;
