import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Eye } from 'lucide-react';

export const Hero = ({ images, frameCount }: { images: HTMLImageElement[], frameCount: number }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Use alpha: false to let the browser know the canvas is fully opaque, optimizing composite ops
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let ticking = false;

    const renderFrame = (frameIndex: number) => {
      const img = images[frameIndex];
      
      // Update canvas dimension independently if it needs to match window
      if (canvas.width !== window.innerWidth) canvas.width = window.innerWidth;
      if (canvas.height !== window.innerHeight) canvas.height = window.innerHeight;

      if (img && img.complete && img.naturalWidth > 0) {
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;

        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let offsetX = 0;
        let offsetY = 0;

        if (canvasRatio > imgRatio) {
          drawHeight = canvas.width / imgRatio;
          offsetY = (canvas.height - drawHeight) / 2;
        } else {
          drawWidth = canvas.height * imgRatio;
          offsetX = (canvas.width - drawWidth) / 2;
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        
        // Add subtle cinematic gradient overlay
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, 'rgba(0,0,0,0.3)');
        gradient.addColorStop(0.5, 'rgba(0,0,0,0)');
        gradient.addColorStop(1, 'rgba(0,0,0,0.8)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      } else {
        // Fallback clear if image not ready
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const container = document.getElementById("hero-scroll-container");
          if (!container) {
             ticking = false;
             return;
          }

          const rect = container.getBoundingClientRect();
          const scrollDistance = rect.height - window.innerHeight;
          let scrollProgress = 0;
          
          if (rect.top <= 0) {
            scrollProgress = Math.min(1, Math.max(0, -rect.top / scrollDistance));
          }

          const frameIndex = Math.min(
            frameCount - 1, 
            Math.floor(scrollProgress * frameCount)
          );
          
          renderFrame(frameIndex);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // Retry initial render a few times to catch initial image load 
    renderFrame(0);
    const retry1 = setTimeout(() => renderFrame(0), 100);
    const retry2 = setTimeout(() => renderFrame(0), 500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      clearTimeout(retry1);
      clearTimeout(retry2);
    };
  }, [images, frameCount]);

  return (
    <div id="hero-scroll-container" className="relative w-full" style={{ height: '300vh' }}>
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-black">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--color-neon-blue)]/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[var(--color-neon-orange)]/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              Hi, I'm <span className="text-[var(--color-neon-blue)] text-glow-blue">Vazi</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light mb-10 max-w-2xl text-center mx-auto">
              Developer & Creative Technologist
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="#projects"
                className="group relative px-8 py-3 rounded-full overflow-hidden neon-border-blue transition-all hover:scale-105 inline-block"
              >
                <div className="absolute inset-0 bg-[var(--color-neon-blue)]/10 group-hover:bg-[var(--color-neon-blue)]/20 transition-colors" />
                <span className="relative flex items-center justify-center gap-2 font-medium tracking-wide">
                  <Eye className="w-5 h-5" />
                  View Projects
                </span>
              </a>
              
              <a 
                href="#contact"
                className="group relative px-8 py-3 rounded-full overflow-hidden neon-border-orange transition-all hover:scale-105 inline-block"
              >
                <div className="absolute inset-0 bg-[var(--color-neon-orange)]/10 group-hover:bg-[var(--color-neon-orange)]/20 transition-colors" />
                <span className="relative flex items-center justify-center gap-2 font-medium tracking-wide">
                  <Download className="w-5 h-5" />
                  Contact Me
                </span>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span className="text-xs uppercase tracking-widest text-gray-500">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
