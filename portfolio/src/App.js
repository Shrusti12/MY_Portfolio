import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Internship from "./components/Internship";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      //once: true, //animation happens only once - while scrolling down
      once: false, //animation can happen again when scrolling up and down
      mirror: true, //animation again when scrolling back

    });
  }, []);
  
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Internship />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;