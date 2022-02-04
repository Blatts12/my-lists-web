import React from "react";
import { Container } from "../components/common/Container";
import LatestItems from "../components/items/LatestItems";
import { styled } from "../stitches.config";

const HomeContainer = styled(Container, {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  paddingTop: "1rem",
});

const HomePage: React.FC = () => {
  return (
    <HomeContainer>
      <LatestItems />
    </HomeContainer>
  );
};

export default HomePage;
