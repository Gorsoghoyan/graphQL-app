import { useEffect } from "react";

export const useScroll = (callback: (event: Event) => void) => {

  useEffect(() => {
    const handleScroll = (event: Event) => {
      callback(event);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  
};