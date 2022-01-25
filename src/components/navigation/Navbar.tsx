import React, { useEffect, useState } from "react";
import { styled } from "../../stitches.config";
import useUiStore from "../../stores/UiStore";
import { Container } from "../common/Container";
import FullscreenMenu from "./FullscreenMenu";
import NavMenu from "./NavMenu";

const Header = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "60px",
  fontSize: "$l",
  background: "$uiBackground",
});

const NavContainer = styled(Container, {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100%",
  paddingInline: "0.75rem",
});

const Navbar: React.FC = () => {
  const isMobile = useUiStore((state) => state.isMobile);
  const closeFsMenu = useUiStore((state) => state.closeFsMenu);

  useEffect(() => {
    closeFsMenu();
  }, [closeFsMenu, isMobile]);

  return (
    <Header>
      <NavContainer>
        <div>LOGO</div>
        <nav>{isMobile ? <FullscreenMenu /> : <NavMenu />}</nav>
      </NavContainer>
    </Header>
  );
};

export default Navbar;
