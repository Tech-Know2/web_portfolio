"use client";

import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";

export default function Scroll() {
  const { scrollYProgress } = useScroll();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check if dark mode is active on page load
  useEffect(() => {
    const darkMode = document.body.classList.contains("dark-mode");
    setIsDarkMode(darkMode);
  }, []);

  return (
    <motion.div
      className={`fixed top-0 left-0 w-full h-2 z-50 ${isDarkMode ? "bg-white" : "bg-black"}`}
      style={{ scaleX: scrollYProgress }}
    />
  );
}