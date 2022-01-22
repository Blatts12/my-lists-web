import React, { useEffect, useState } from "react";
import { styled } from "../../stitches.config";
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

const getIsMoblie = () => window.innerWidth <= 600;

const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(getIsMoblie());

  useEffect(() => {
    const onResize = () => {
      setIsMobile(getIsMoblie());
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <Nav>
      <NavContainer>
        <div>ML</div>
        {isMobile ? <FullscreenMenu /> : <NavMenu />}
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
