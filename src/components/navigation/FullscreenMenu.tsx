import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import * as Portal from "@radix-ui/react-portal";
import { FullscreenOverlay } from "../common/Overlay";
import { Button } from "../common/Button";

const FullscreenMenu: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <>
      <Button
        noBackground
        color="primary"
        icon
        circled
        onClick={() => setShowMenu(!showMenu)}
      >
        <HamburgerMenuIcon width="29px" height="29px" />
      </Button>
      {showMenu && (
        <Portal.Root>
          <FullscreenOverlay color="dark" inPortal />
          <p>test 123</p>
        </Portal.Root>
      )}
    </>
  );
};

export default FullscreenMenu;
