import React from "react";
import { styled } from "../../stitches.config";
import useAuthStore from "../../stores/AuthStore";
import { AuthMenu, UnauthMenu } from "./MenuList";

const Menu = styled("menu", {
  display: "inline-flex",
  gap: "0.6em",
});

const NavMenu: React.FC = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const MenuItem = styled("li", {});

  return (
    <Menu>
      {isAuthenticated ? (
        <AuthMenu ItemComponent={MenuItem} />
      ) : (
        <UnauthMenu ItemComponent={MenuItem} />
      )}
    </Menu>
  );
};

export default NavMenu;
