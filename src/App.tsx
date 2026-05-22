import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Achievements } from "./components/Achievements";
import { Projects } from "./components/Projects";
import { Hobbies } from "./components/Hobbies";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ParticleBackground } from "./components/ParticleBackground";
import { ScrollToTop } from "./components/ScrollToTop";
import { Preloader } from "./components/Preloader";

export default function App() {
  return (
    <div className="font-sans relative">
      <Preloader />
      <ParticleBackground />
      <Navbar />
      
      <main className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Achievements />
        <Projects />
        <Hobbies />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
