
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-black text-white relative border-t border-white/5">
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
            Get In <span className="text-[var(--color-neon-orange)] text-glow-orange">Touch</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-xl mx-auto text-lg hover:text-white transition-colors">
            Whether you have a question about a project, want to collaborate, or just want to say hi, feel free to drop a message.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="space-y-8 glass p-8 md:p-12 rounded-2xl neon-border-blue"
          >
            <h3 className="text-2xl font-bold mb-6 text-[var(--color-neon-blue)]">Contact Information</h3>
            
            <div className="flex items-center gap-6 group">
              <div className="p-4 rounded-full bg-white/5 group-hover:bg-[var(--color-neon-blue)]/20 transition-colors">
                <Mail className="w-6 h-6 text-[var(--color-neon-blue)]" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-medium text-lg">hello@vazi.dev</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 group">
              <div className="p-4 rounded-full bg-white/5 group-hover:bg-[var(--color-neon-blue)]/20 transition-colors">
                <Phone className="w-6 h-6 text-[var(--color-neon-blue)]" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="font-medium text-lg">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 group">
              <div className="p-4 rounded-full bg-white/5 group-hover:bg-[var(--color-neon-blue)]/20 transition-colors">
                <MapPin className="w-6 h-6 text-[var(--color-neon-blue)]" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="font-medium text-lg">Tech City, CA</p>
              </div>
            </div>
            
            <div className="pt-8 mt-8 border-t border-white/10 flex gap-4">
               <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-[var(--color-neon-orange)] hover:text-white transition-colors text-gray-400">
                 <Linkedin className="w-5 h-5" />
               </a>
               <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-[var(--color-neon-orange)] hover:text-white transition-colors text-gray-400">
                 <Github className="w-5 h-5" />
               </a>
               <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-[var(--color-neon-orange)] hover:text-white transition-colors text-gray-400">
                 <Twitter className="w-5 h-5" />
               </a>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
             <form className="space-y-6 glass p-8 md:p-12 rounded-2xl h-full flex flex-col justify-center neon-border-orange">
               <div>
                 <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                 <input 
                   type="text" 
                   id="name" 
                   className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-neon-orange)] transition-colors focus:shadow-[0_0_10px_rgba(255,106,0,0.3)]"
                   placeholder="John Doe"
                 />
               </div>
               <div>
                 <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                 <input 
                   type="email" 
                   id="email" 
                   className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-neon-orange)] transition-colors focus:shadow-[0_0_10px_rgba(255,106,0,0.3)]"
                   placeholder="john@example.com"
                 />
               </div>
               <div>
                 <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                 <textarea 
                   id="message" 
                   rows={4}
                   className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-neon-orange)] transition-colors focus:shadow-[0_0_10px_rgba(255,106,0,0.3)] resize-none"
                   placeholder="Your message here..."
                 />
               </div>
               <button 
                 type="button"
                 className="w-full py-4 rounded-lg bg-[var(--color-neon-orange)] text-black font-bold tracking-widest uppercase hover:bg-white transition-colors hover:shadow-[0_0_20px_#ff6a00]"
               >
                 Send Message
               </button>
             </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
