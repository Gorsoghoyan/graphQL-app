import { useState, useCallback } from "react";
import { useScroll } from "./";

export const useHeader = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  useScroll(() => setIsNavExpanded(false));

  const handleMenuToggle = useCallback((): void => {
    setIsNavExpanded(prev => !prev);
  }, []);

  return {
    isNavExpanded,
    handleMenuToggle
  }
};