import { useCallback } from 'react';
import { useScrollSequence } from './hooks/useScrollSequence';
import { Hero } from './components/Hero';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Timeline } from './sections/Timeline';
import { Skills } from './sections/Skills';
import { Contact } from './sections/Contact';

function App() {
  const frameCount = 45;
  const getFramePath = useCallback((index: number) => {
    const paddedIndex = index.toString().padStart(2, '0');
    return `/sequence/frame_${paddedIndex}_delay-0.066s.png`;
  }, []);

  const { images, isLoaded, loadProgress } = useScrollSequence(frameCount, getFramePath);

  return (
    <>
      <Preloader progress={loadProgress} isLoaded={isLoaded} />
      
      <main className="min-h-screen bg-black text-white relative">
        <Navbar />
        <Hero images={images} frameCount={frameCount} />
        
        <div className="relative z-20 bg-black">
           <About />
           <Projects />
           <Timeline />
           <Skills />
           <Contact />
        </div>
      </main>
    </>
  );
}

export default App;
