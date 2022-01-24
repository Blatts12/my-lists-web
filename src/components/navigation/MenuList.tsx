import { StyledComponent } from "@stitches/react/types/styled-component";
import React from "react";

interface MenuProps {
  ItemComponent: StyledComponent<any>;
}

const AuthMenu = React.memo<MenuProps>(({ ItemComponent }) => {
  return (
    <>
      <ItemComponent>Logout</ItemComponent>
    </>
  );
});

const UnauthMenu = React.memo<MenuProps>(({ ItemComponent }) => {
  return (
    <>
      <ItemComponent>Login</ItemComponent>
      <ItemComponent>Register</ItemComponent>
    </>
  );
});

export { AuthMenu, UnauthMenu };
