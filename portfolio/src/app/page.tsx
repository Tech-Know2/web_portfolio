import Navbar from "./navbar";
import Hero from "./hero";
import Footer from "./footer";
import Scroll from "./scroll";
import Projects from "./projects";
import AboutServer from "./aboutServer";
import TimelineServer from "./timelineServer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Scroll />
      <Navbar />
      <section id="">
        <Hero />
      </section>
      <section id="about-me">
        <AboutServer />
      </section>
      <section id="timeline">
        <TimelineServer />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <Footer />
    </div>
  );
}