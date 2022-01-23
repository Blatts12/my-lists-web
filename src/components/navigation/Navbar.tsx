import React, { useEffect, useState } from "react";
import { styled } from "../../stitches.config";
import useUiStore from "../../stores/UiStore";
import { Container } from "../common/Container";
import FullscreenMenu from "./FullscreenMenu";
import NavMenu from "./NavMenu";

const Nav = styled("nav", {
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

  return (
    <Nav>
      <NavContainer>
        <div>LOGO</div>
        {isMobile ? <FullscreenMenu /> : <NavMenu />}
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
