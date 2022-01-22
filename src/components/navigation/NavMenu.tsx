import React from "react";
import { styled } from "../../stitches.config";

const Menu = styled("menu", {
  display: "inline-flex",
  gap: "0.6em",
});

const NavMenu: React.FC = () => {
  return (
    <Menu>
      <li>Login</li>
      <li>Register</li>
    </Menu>
  );
};

export default NavMenu;
