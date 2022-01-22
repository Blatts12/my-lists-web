import { styled } from "../../stitches.config";

const AppContainer = styled("div", {
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const Container = styled("div", {
  width: "100%",
  "@phone_large": {
    width: "100%",
  },
  "@tablet": {
    width: "90%",
  },
  "@desktop": {
    width: "80%",
  },
  "@desktop_large": {
    width: "70%",
  },
});

export { AppContainer, Container };
