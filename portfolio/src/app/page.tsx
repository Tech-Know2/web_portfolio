"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import Footer from "./footer";
import Scroll from "./scroll";
import AboutMe from "./aboutme";
import Timeline from "./timeline";
import Projects from "./projects";

// Animation variant for fade-in effect
const fadeIn = {
  hidden: { opacity: 0, y: 50, transition: { duration: 0.8, ease: "easeInOut" } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
};

// Section component that triggers fade-in animation when in view
const Section = ({ children, id, className }: { children: React.ReactNode, id?: string, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      id={id}
      className={`py-24 ${className}`} // Custom className prop
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

      <Section id="about-me">
        <AboutMe />
      </Section>

      <Section id="timeline">
        <Timeline />
      </Section>

      <Section id="projects">
        <Projects />
      </Section>

      <Footer />
    </div>
  );
}