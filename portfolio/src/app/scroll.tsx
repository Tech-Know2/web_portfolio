"use client";

import { motion, useScroll } from "framer-motion";

export default function Scroll() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-2 bg-black z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}