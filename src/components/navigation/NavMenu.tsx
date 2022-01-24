import React from "react";
import { styled } from "../../stitches.config";
import MenuList from "./MenuList";

const Menu = styled("menu", {
  display: "inline-flex",
  gap: "0.615em",
});

const MenuItem = styled("li", {
  "&:hover": {
    textDecoration: "underline",
  },

  "& a": {
    color: "inherit",
    textDecoration: "inherit",
  },
});

const NavMenu: React.FC = () => {
  return (
    <Menu>
      <MenuList ItemComponent={MenuItem} />
    </Menu>
  );
};

export default NavMenu;
