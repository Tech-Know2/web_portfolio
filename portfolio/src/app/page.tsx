"use client";

import Navbar from "./navbar";
import Hero from "./hero";
import Footer from "./footer";
import Scroll from "./scroll";
import AboutMe from "./aboutme";
import Timeline from "./timeline";
import Projects from "./projects";
import dynamic from "next/dynamic";

// Dynamically import the Blog component (Server Component)
const Blog = dynamic(() => import("./Blog"), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen">
      <Scroll />
      <Navbar />
      <section>
        <Hero />
      </section>
      <section id="about-me">
        <AboutMe />
      </section>
      <section id="timeline">
        <Timeline />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <Footer />
    </div>
  );
}