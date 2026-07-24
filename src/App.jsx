import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowUp } from "lucide-react";

import { useTheme } from "./hooks/useTheme";
import { I18nProvider } from "./i18n/I18nContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import ChatAssistant from "./components/ChatAssistant";

import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import ProfessionalProjects from "./sections/ProfessionalProjects";
import Experience from "./sections/Experience";
import Certifications from "./sections/Certifications";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(true);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 600, once: true, offset: 60, easing: "ease-out-cubic" });
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 480);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <I18nProvider>
      <AnimatePresence>{loading && <LoadingScreen onDone={() => setLoading(false)} />}</AnimatePresence>

      {!loading && (
        <div className="min-h-screen">
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <main>
            <Hero />
            <Stats />
            <About />
            <Skills />
            <Projects />
            <ProfessionalProjects />
            <Experience />
            <Certifications />
            <Blog />
            <Contact />
          </main>
          <Footer />
          <ChatAssistant />

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: showTop ? 1 : 0, y: showTop ? 0 : 10 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Retour en haut"
            className="fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full bg-(--color-cyan) text-[#06110F] shadow-lg pointer-events-auto cursor-pointer"
            style={{ pointerEvents: showTop ? "auto" : "none" }}
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      )}
    </I18nProvider>
  );
}
