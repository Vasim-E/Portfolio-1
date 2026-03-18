import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader = ({ progress, isLoaded }: { progress: number; isLoaded: boolean }) => {
  // Enforce a minimum display time for the cinematic loader so it doesn't just flash on fast connections
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => setShow(false), 1200); // 1.2s cinematic intro minimum
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505]"
        >
          {/* Cinematic glowing orb / abstract loader */}
          <div className="relative flex items-center justify-center mb-12">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-40 h-40 bg-[var(--color-neon-blue)] rounded-full blur-[60px]"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute w-32 h-32 bg-[var(--color-neon-orange)] rounded-full blur-[50px] mix-blend-screen"
            />
            
            <motion.div 
               initial={{ letterSpacing: '0.1em', opacity: 0, y: 10 }}
               animate={{ letterSpacing: '0.4em', opacity: 1, y: 0 }}
               transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
               className="relative z-10 text-2xl font-bold tracking-widest text-white uppercase ml-3"
            >
               VAZI
            </motion.div>
          </div>
          
          <div className="w-64 h-[2px] bg-white/5 relative overflow-hidden rounded-full">
             <motion.div 
               className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-orange)]"
               initial={{ width: 0 }}
               animate={{ width: `${progress}%` }}
               transition={{ duration: 0.3 }}
             />
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6 text-[10px] tracking-[0.4em] text-white/40 uppercase font-light"
          >
             Initiating Sequence {Math.floor(progress)}%
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
