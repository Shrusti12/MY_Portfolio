import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}

export default App;