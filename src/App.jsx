import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import HeaderModern from './components/HeaderModern';
import HeroModern from './components/HeroModern';
import AboutModern from './components/AboutModern';
import SkillsModern from './components/SkillsModern';
import ExperienceModern from './components/ExperienceModern';
import ProjectsModern from './components/ProjectsModern';
import ContactModern from './components/ContactModern';
import FooterModern from './components/FooterModern';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen bg-darker text-white">
          <HeaderModern />
          <HeroModern />
          <AboutModern />
          <SkillsModern />
          <ExperienceModern />
          <ProjectsModern />
          <ContactModern />
          <FooterModern />
        </div>
      )}
    </>
  );
}

export default App;