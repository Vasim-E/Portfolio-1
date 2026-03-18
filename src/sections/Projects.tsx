import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Smart Home Hub',
    category: 'Flutter Apps',
    description: 'A cross-platform IoT dashboard for managing smart home devices with real-time sync.',
    tech: ['Flutter', 'Firebase', 'IoT'],
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'E-commerce Engine',
    category: 'Web Projects',
    description: 'High-performance React storefront with a custom Python orchestration backend.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Automated Greenhouse',
    category: 'Arduino / Embedded',
    description: 'Custom ESP32 firmware for soil moisture regulation and climate control.',
    tech: ['C++', 'Arduino', 'ESP32'],
    image: 'https://images.unsplash.com/photo-1530836369250-ef71a3f5e481?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Cinematic Sequences',
    category: 'Creative Media',
    description: 'A collection of procedural animations and VFX sequences rendered for web.',
    tech: ['After Effects', 'Canvas', 'WebGL'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-black text-white relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
            Featured <span className="text-[var(--color-neon-blue)] text-glow-blue">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--color-neon-orange)] rounded-full mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
               key={project.title}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: index * 0.1 }}
               className="group relative rounded-2xl overflow-hidden glass hover:neon-border-blue transition-all duration-500 hover:-translate-y-2"
            >
               <div className="relative h-64 overflow-hidden">
                 <img 
                   src={project.image} 
                   alt={project.title} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                 />
                 <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-[var(--color-neon-blue)]">
                   {project.category}
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
               </div>
               
               <div className="p-8 relative hover:bg-black/90 transition-colors">
                 <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                 <p className="text-gray-400 mb-6 line-clamp-2">{project.description}</p>
                 
                 <div className="flex flex-wrap gap-2 mb-8">
                   {project.tech.map(t => (
                     <span key={t} className="text-xs font-mono text-gray-300 bg-white/5 px-2 py-1 rounded border border-white/10">
                       {t}
                     </span>
                   ))}
                 </div>
                 
                 <div className="flex items-center gap-4">
                   <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-[var(--color-neon-blue)]/20 text-white transition-colors">
                      <Github className="w-5 h-5" />
                   </a>
                   <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-[var(--color-neon-orange)]/20 text-white transition-colors">
                      <ExternalLink className="w-5 h-5" />
                   </a>
                 </div>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-1/2 -right-64 w-[500px] h-[500px] bg-[var(--color-neon-blue)]/10 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
};
