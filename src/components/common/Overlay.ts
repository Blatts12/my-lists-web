import { styled } from "../../stitches.config";

const FullscreenOverlay = styled("div", {
  position: "fixed",
  inset: "0",
  variants: {
    color: {
      dark: {
        backgroundColor: "$overlayDark",
      },
      light: {
        backgroundColor: "$overlayLight",
      },
    },
    inPortal: {
      true: {
        zIndex: "-1",
      },
    },
  },
});

export { FullscreenOverlay };
