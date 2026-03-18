import React from 'react';
import { motion } from 'framer-motion';

const journey = [
  {
    year: '2022',
    title: 'BSc Electronics',
    description: 'Graduated with a focus on embedded systems, microcontrollers, and circuit design.',
    glow: 'blue'
  },
  {
    year: '2023',
    title: 'Internship & Arduino Projects',
    description: 'Developed automated hardware solutions and built a foundation in C++ programming.',
    glow: 'orange'
  },
  {
    year: '2024',
    title: 'Learning Flutter',
    description: 'Expanded skillset into software, bringing hardware dashboards to mobile devices.',
    glow: 'blue'
  },
  {
    year: '2025',
    title: 'Creative Technologist',
    description: 'Merging Web UI/UX with hardware prototypes, working as an independent developer.',
    glow: 'orange'
  }
];

export const Timeline = () => {
  return (
    <section id="journey" className="py-24 px-6 md:px-12 bg-black text-white relative">
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
            My <span className="text-[var(--color-neon-orange)] text-glow-orange">Journey</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[15px] sm:left-1/2 top-0 bottom-0 w-[2px] bg-gray-800 transform sm:-translate-x-1/2" />
          
          {journey.map((item, index) => {
             const isEven = index % 2 === 0;
             const isBlue = item.glow === 'blue';
             
             return (
               <motion.div 
                 key={item.year}
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.6, delay: 0.2 }}
                 className={`relative flex flex-col sm:flex-row items-center sm:justify-between mb-16 last:mb-0 ${
                   isEven ? 'sm:flex-row-reverse' : ''
                 }`}
               >
                 <div className="absolute left-[-2px] sm:left-1/2 w-8 h-8 rounded-full transform sm:-translate-x-1/2 flex items-center justify-center bg-black border-4 border-gray-800 z-10">
                    <div className={`w-3 h-3 rounded-full ${isBlue ? 'bg-[var(--color-neon-blue)] shadow-[0_0_10px_#00f0ff]' : 'bg-[var(--color-neon-orange)] shadow-[0_0_10px_#ff6a00]'}`} />
                 </div>
                 
                 <div className={`w-full sm:w-5/12 ml-12 sm:ml-0 ${isEven ? 'sm:pl-8 text-left' : 'sm:pr-8 sm:text-right text-left'}`}>
                    <div className={`glass p-8 rounded-2xl hover:scale-105 transition-transform duration-300 ${isBlue ? 'neon-border-blue' : 'neon-border-orange'}`}>
                      <span className={`text-xl font-bold font-mono tracking-widest ${isBlue ? 'text-[var(--color-neon-blue)]' : 'text-[var(--color-neon-orange)]'}`}>
                        {item.year}
                      </span>
                      <h3 className="text-2xl font-bold mt-2 mb-4 text-white">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                 </div>
               </motion.div>
             );
          })}
        </div>
      </div>
    </section>
  );
};
