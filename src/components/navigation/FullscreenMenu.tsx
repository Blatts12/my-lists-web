import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import * as Portal from "@radix-ui/react-portal";
import { FullscreenOverlay } from "../common/Overlay";

const FullscreenMenu: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setShowMenu(!showMenu)}>
        <HamburgerMenuIcon />
      </button>
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
