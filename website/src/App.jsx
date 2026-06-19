import { Analytics } from "@vercel/analytics/react";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Divider from "./components/Divider";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import sceneSkyline from "./assets/scene-skyline.jpg";
import sceneStreet from "./assets/scene-street.jpg";
import sceneBlossoms from "./assets/scene-blossoms.jpg";

export default function App() {
  return (
    <>
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Divider image={sceneSkyline} />
      <Experience />
      <Divider image={sceneStreet} />
      <Education />
      <Divider image={sceneBlossoms} />
      <Projects />
      <Contact />
      <Footer />
      <Analytics />
    </>
  );
}
