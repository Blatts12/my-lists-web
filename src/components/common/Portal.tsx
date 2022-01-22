import React, { useEffect } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: React.ReactNode;
}

const Portal: React.FC<PortalProps> = ({ children }) => {
  const mount = document.getElementById("portal");
  const element = document.createElement("div");

  useEffect(() => {
    if (mount) mount.appendChild(element);

    return () => {
      if (mount) mount.removeChild(element);
    };
  }, [element, mount]);

  return createPortal(children, element);
};

export default Portal;
