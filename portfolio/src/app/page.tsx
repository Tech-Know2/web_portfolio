"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import Footer from "./footer";
import Scroll from "./scroll";

const fadeIn = {
  hidden: { opacity: 0, y: 50, transition: { duration: 0.8, ease: "easeInOut" } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
};

const Section = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeIn}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Scroll />
      <Navbar />

      <Section>
        <Hero />
      </Section>

      <Footer />
    </div>
  );
}