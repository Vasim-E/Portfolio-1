
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
              About <span className="text-[var(--color-neon-orange)] text-glow-orange">Me</span>
            </h2>
            <div className="w-20 h-1 bg-[var(--color-neon-blue)] rounded-full" />
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a Developer & Creative Technologist blending the worlds of software and hardware. With a background in BSc Electronics, I build everything from mobile applications with Flutter to embedded Arduino systems.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My journey is fueled by a passion for solving complex problems through elegant code and stunning visuals. Whether I'm crafting a seamless WebApp or creating media content, I focus on delivering engaging user experiences.
            </p>
          </div>
          
          <div className="relative group">
            <div className="aspect-square rounded-2xl overflow-hidden relative neon-border-orange flex items-center justify-center bg-gray-900 transition-transform duration-500 group-hover:scale-105">
               <span className="text-2xl font-bold text-gray-700">PROFILE IMAGE</span>
               <div className="absolute inset-0 bg-[var(--color-neon-orange)]/10 mix-blend-overlay" />
            </div>
            {/* Decorative background glow */}
            <div className="absolute -inset-4 bg-[var(--color-neon-orange)]/20 rounded-2xl blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
