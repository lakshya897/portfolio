import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect } from 'react';
import useScrollReveal from './hooks/useScrollReveal';
import useTilt from './hooks/useTilt';

function App() {
  useScrollReveal();
  useTilt();

  useEffect(() => {
    const dot = document.querySelector<HTMLElement>('.cursor-dot');
    const ring = document.querySelector<HTMLElement>('.cursor-ring');
    if (!dot || !ring) return;

    let rafId = 0;
    let x = 0;
    let y = 0;
    let ringX = 0;
    let ringY = 0;

    const render = () => {
      dot.style.transform = `translate(${x - 4}px, ${y - 4}px)`;

      ringX += (x - ringX) * 0.18;
      ringY += (y - ringY) * 0.18;
      ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;

      rafId = requestAnimationFrame(render);
    };

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const isInteractive = (el: Element | null) => {
      if (!el) return false;
      return Boolean(el.closest('a, button, input, textarea, select, label'));
    };

    const onHoverCheck = (e: MouseEvent) => {
      if (isInteractive(e.target as Element | null)) {
        ring.classList.add('hovering');
      } else {
        ring.classList.remove('hovering');
      }
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onHoverCheck);
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onHoverCheck);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div>
      <div className="cursor-dot" />
      <div className="cursor-ring" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
