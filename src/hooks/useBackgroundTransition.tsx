"use client";

import { useState, useEffect } from "react";

export default function useBackgroundTransition(threshold = 0.3) {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate opacity based on scroll position
  const darkOpacity = Math.min(scrollY / (windowHeight * threshold), 1);

  return { darkOpacity, scrollY, windowHeight };
}
