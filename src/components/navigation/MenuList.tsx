import { StyledComponent } from "@stitches/react/types/styled-component";
import React from "react";
import { Link } from "react-router-dom";
import useAuthStore from "../../stores/AuthStore";

interface MenuListProps {
  ItemComponent: StyledComponent<"li"> | "li";
}

const AuthMenu = React.memo<MenuListProps>(({ ItemComponent }) => {
  return (
    <>
      <ItemComponent>
        <Link to="/logout">Logout</Link>
      </ItemComponent>
    </>
  );
});

const UnauthMenu = React.memo<MenuListProps>(({ ItemComponent }) => {
  return (
    <>
      <ItemComponent>
        <Link to="/register">Register</Link>
      </ItemComponent>
      <ItemComponent>
        <Link to="/login">Login</Link>
      </ItemComponent>
    </>
  );
});

const MenuList: React.FC<MenuListProps> = ({ ItemComponent }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (isAuthenticated) return <AuthMenu ItemComponent={ItemComponent} />;

  return <UnauthMenu ItemComponent={ItemComponent} />;
};

export default MenuList;
