import { useEffect, useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Research from './components/Research'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Theme logic
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
  }, []);

  const handleLoaderComplete = useCallback(() => {
    setIsLoaded(true);
  }, []);

  // Scroll Reveal logic with stagger
  useEffect(() => {
    if (!isLoaded) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Stagger children within grid containers
          const parent = entry.target;
          const staggerChildren = parent.closest('.skills-grid, .research-grid, .projects-grid, .contact-grid');

          if (staggerChildren) {
            const siblings = Array.from(staggerChildren.querySelectorAll('.reveal'));
            const index = siblings.indexOf(parent);
            parent.style.transitionDelay = `${index * 0.1}s`;
          }

          parent.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    // Small delay to allow DOM to be fully ready
    const timer = setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach(el => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [isLoaded]);

  return (
    <>
      {!isLoaded && <Loader onComplete={handleLoaderComplete} />}
      <div className={`app-wrapper ${isLoaded ? 'app-visible' : 'app-hidden'}`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Research />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
