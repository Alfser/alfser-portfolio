import { useState, useEffect, useRef } from "react";
import { content } from "./data/content";
import { Sidebar } from "./components/Sidebar";
import { About } from "./components/About";
import { ExperienceSection } from "./components/ExperienceSection";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import "./App.css";

function App() {
  const [lang, setLang] = useState<'pt' | 'en'>('en');
  const [activeSection, setActiveSection] = useState('about');
  const mainRef = useRef<HTMLDivElement>(null);

  const data = content[lang];

  // Mouse spotlight tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection observer for active section highlighting
  useEffect(() => {
    const sections = document.querySelectorAll('section[data-section]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('data-section');
            if (sectionId) {
              setActiveSection(sectionId);
            }
          }
        });
      },
      {
        rootMargin: '-30% 0px -50% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const toggleLanguage = (newLang: 'pt' | 'en') => {
    setLang(newLang);
  };

  return (
    <div className="app-layout">
      <div className="spotlight" />
      <Sidebar
        data={data}
        lang={lang}
        toggleLanguage={toggleLanguage}
        activeSection={activeSection}
      />
      <main className="main-content" ref={mainRef}>
        <section data-section="about" id="about">
          <About data={data} lang={lang} />
        </section>
        <section data-section="experience" id="experience">
          <ExperienceSection data={data} lang={lang} />
        </section>
        <section data-section="skills" id="skills">
          <Skills data={data} lang={lang} />
        </section>
        <section data-section="education" id="education">
          <Education data={data} lang={lang} />
        </section>
        <footer className="footer">
          <p>
            {lang === 'pt'
              ? 'Projetado e desenvolvido por Janilson Alfaia'
              : 'Designed & Built by Janilson Alfaia'}
          </p>
          <p className="footer-tech">
            {lang === 'pt'
              ? 'Feito com React + TypeScript + Vite'
              : 'Built with React + TypeScript + Vite'}
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;