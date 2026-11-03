import React from 'react'
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HeroSection from './components/Sections/HeroSection';
import SkillsSection from './components/Sections/SkillsSection';
import ProjectsSection from './components/Sections/ProjectsSection';
import AboutSection from './components/Sections/AboutSection';
import ContactSection from './components/Sections/ContactSection';
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from './components/Sections/Footer';


const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
        <WhatsAppButton />
        <Footer />
      </div>
    </ThemeProvider>

  )
}

export default App
