import { ArrowLeftIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import React, { useEffect, useState } from "react";
import * as Portal from "@radix-ui/react-portal";
import { FullscreenOverlay } from "../common/Overlay";
import { Button } from "../common/Button";
import { styled } from "../../stitches.config";
import useAuthStore from "../../stores/AuthStore";
import MenuList from "./MenuList";
import { AnimatePresence, motion } from "framer-motion";
import useUiStore from "../../stores/UiStore";
import { useLocation } from "react-router-dom";

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

const Menu = styled("menu", {
  width: "100%",
  padding: "0",
  margin: "0",
});

const MenuItem = styled("li", {
  padding: "0.215em 0",
  fontSize: "$xxl",
  textAlign: "center",
  transition: "background-color 180ms",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "$uiBackgroundHover",
  },

  "& a": {
    display: "block",
    color: "inherit",
    textDecoration: "inherit",
  },
});

const FullscreenMenu: React.FC = () => {
  const location = useLocation();
  const showFsMenu = useUiStore((state) => state.showFsMenu);
  const openFsMenu = useUiStore((state) => state.openFsMenu);
  const closeFsMenu = useUiStore((state) => state.closeFsMenu);
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    closeFsMenu();
  }, [location]);

  return (
    <>
      <Button
        color="primary"
        icon
        circled
        css={{
          backgroundColor: "inherit",
        }}
        onClick={openFsMenu}
      >
        <HamburgerMenuIcon width="30px" height="30px" />
      </Button>
      <AnimatePresence>
        {showFsMenu && (
          <Portal.Root asChild>
            <motion.div
              style={{ inset: "0" }}
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "-100%" }}
              transition={{
                duration: 0.215,
              }}
            >
              <FullscreenOverlay color="dark" inPortal />

              <NavContainer>
                <Button
                  color="primary"
                  icon
                  circled
                  css={{
                    backgroundColor: "inherit",
                  }}
                  onClick={closeFsMenu}
                >
                  <ArrowLeftIcon width="30px" height="30px" />
                </Button>
                <UsernameText>{user?.username || "Not logged in"}</UsernameText>
              </NavContainer>
              <Menu>
                <MenuList ItemComponent={MenuItem} />
              </Menu>
            </motion.div>
          </Portal.Root>
        )}
      </AnimatePresence>
    </>
  );
};

export default FullscreenMenu;
