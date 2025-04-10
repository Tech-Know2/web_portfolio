"use client";

import Navbar from "../navbar";
import Footer from "../footer";
import Scroll from "../scroll";
import dynamic from "next/dynamic";

// Dynamically import the Blog component (Server Component)
const Blog = dynamic(() => import("../Blog"), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen">
      <Scroll />
      <Navbar />
      <section>
        <Blog />
      </section>
      <Footer />
    </div>
  );
}