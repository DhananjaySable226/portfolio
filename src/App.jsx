import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectCarousel from './components/ProjectCarousel';
import SkillsSection from './components/SkillsSection';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';

// Page components using the original sections
function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectCarousel />
      <SkillsSection />
      <ResumeSection />
      <ContactSection />
    </>
  );
}
function Work() {
  return <ProjectCarousel />;
}
function About() {
  return <AboutSection />;
}
function Skills() {
  return <SkillsSection />;
}
function Contact() {
  return <ContactSection />;
}

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <BrowserRouter>
      <div className="relative min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Animated Gradient Background */}
        <div className="fixed inset-0 -z-10 animate-gradient bg-gradient-to-br from-primary via-accent to-secondary blur-2xl opacity-80 w-full h-full" />
        <Header toggleTheme={toggleTheme} theme={theme} />
        <main className="flex-1 w-full flex flex-col items-center overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={
              <Suspense fallback={<div>Loading Resume...</div>}>
                <ResumeSection />
              </Suspense>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
