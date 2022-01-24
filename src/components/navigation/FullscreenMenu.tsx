import { ArrowLeftIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import * as Portal from "@radix-ui/react-portal";
import { FullscreenOverlay } from "../common/Overlay";
import { Button } from "../common/Button";
import { styled } from "../../stitches.config";

const NavContainer = styled("nav", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100vw",
  height: "60px",
  paddingInline: "0.75rem",
  borderBottom: "1px solid $borderLight",
});

const UsernameText = styled("p", {
  fontSize: "$l",
  letterSpacing: "0.0225em",
});

const MenuList = styled("menu", {
  width: "100%",
  padding: "0",
  margin: "0",
});

const MenuItem = styled("li", {
  padding: "0.2em 0",
  fontSize: "$xxl",
  textAlign: "center",
  transition: "background-color 180ms",

  "&:hover": {
    cursor: "pointer",
    backgroundColor: "$uiBackgroundHover",
  },
});

const FullscreenMenu: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <>
      <Button
        color="primary"
        icon
        circled
        css={{
          backgroundColor: "inherit",
        }}
        onClick={() => setShowMenu(true)}
      >
        <HamburgerMenuIcon width="30px" height="30px" />
      </Button>
      {showMenu && (
        <Portal.Root>
          <FullscreenOverlay color="dark" inPortal />

          <NavContainer>
            <Button
              color="primary"
              icon
              circled
              css={{
                backgroundColor: "inherit",
              }}
              onClick={() => setShowMenu(false)}
            >
              <ArrowLeftIcon width="30px" height="30px" />
            </Button>
            <UsernameText>Your username</UsernameText>
          </NavContainer>
          <MenuList>
            <MenuItem>Login</MenuItem>
            <MenuItem>Register</MenuItem>
          </MenuList>
        </Portal.Root>
      )}
    </>
  );
};

export default FullscreenMenu;
