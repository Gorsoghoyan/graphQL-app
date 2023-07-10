import { useEffect, useState } from "react";

export const useHeader = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  useEffect(() => {
    window.document.body.style.overflow = isNavExpanded
      ? "hidden"
      : "visible";
  }, [isNavExpanded]);

  const handleMenuToggle = (toggle: boolean) => {
    setIsNavExpanded(toggle);
  };

  return {
    isNavExpanded,
    handleMenuToggle
  };
};