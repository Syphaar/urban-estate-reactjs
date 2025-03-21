import { useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import About from "./Components/About"
import Faq from "./Components/Faq"
import Footer from "./Components/Footer"
import Guides from "./Components/Guides"
import Navbar from "./Components/Navbar"
import Properties from "./Components/Properties"
import Sectionone from "./Components/Sectionone"
import { useEffect, useState } from "react";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  const [activeSection, setActiveSection] = useState(""); // Track active section

  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 1000,
      easing: "ease-in-size",
      delay: 500,
    });
    Aos.refresh();
  }, []);

  // Section references
  const sectiononeRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === "homeRef") {
        window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
        const targetRef = { sectiononeRef, servicesRef, aboutRef, projectsRef, contactRef }[section];
        targetRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
  };


  //  Track the active section using Intersection Observer (for the active navbar buttons)
  useEffect(() => {
    const observerOptions = { 
      root: null, //  Uses the viewport
      threshold: 0.2, // links becomes active when % of a particular section is visible
      rootMargin: "-5% 0px -10% 0px", // Adjust detection timing
    }; // 60% of the section must be visible

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Set active section ID
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    [sectiononeRef, servicesRef, aboutRef, projectsRef, contactRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      [sectiononeRef, servicesRef, aboutRef, projectsRef, contactRef].forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);


  return (
    <>
      {/* Each section of the page */}
      <Navbar scrollToSection={scrollToSection} activeSection={activeSection} />
      <Sectionone sectiononeRef={sectiononeRef} id="sectionone" />
      <About servicesRef={servicesRef} id="services" />
      <Guides aboutRef={aboutRef} id="about" />
      <Properties projectsRef={projectsRef} id="projects" />
      <Faq />
      <Footer contactRef={contactRef} id="contact" />
      <ScrollToTop />
    </>
  )
}

export default App
