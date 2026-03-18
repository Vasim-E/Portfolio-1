import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Programming & Web',
    items: [
      { name: 'TypeScript / JavaScript', level: 90 },
      { name: 'React (Next.js, Vite)', level: 85 },
      { name: 'Flutter & Dart', level: 80 },
      { name: 'C++ (Arduino)', level: 75 },
    ]
  },
  {
    category: 'Creative & Tools',
    items: [
      { name: 'Framer Motion', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'UI/UX Design', level: 80 },
      { name: 'After Effects & Media', level: 70 },
    ]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-black text-white relative border-t border-white/5">
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
            Technical <span className="text-[var(--color-neon-blue)] text-glow-blue">Skills</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {skills.map((skillGroup, groupIdx) => (
             <div key={skillGroup.category} className="space-y-8">
               <h3 className="text-2xl font-bold border-b border-gray-800 pb-4">
                 {skillGroup.category}
               </h3>
               <div className="space-y-6">
                 {skillGroup.items.map((skill, index) => (
                   <div key={skill.name}>
                     <div className="flex justify-between mb-2">
                       <span className="font-medium tracking-wide">{skill.name}</span>
                       <span className="text-gray-500 font-mono">{skill.level}%</span>
                     </div>
                     <div className="h-2 w-full bg-gray-900 rounded-full overflow-hidden">
                       <motion.div
                         initial={{ width: 0 }}
                         whileInView={{ width: `${skill.level}%` }}
                         viewport={{ once: true }}
                         transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                         className={`h-full ${groupIdx === 0 ? 'bg-[var(--color-neon-blue)] shadow-[0_0_10px_#00f0ff]' : 'bg-[var(--color-neon-orange)] shadow-[0_0_10px_#ff6a00]'}`}
                       />
                     </div>
                   </div>
                 ))}
               </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};
