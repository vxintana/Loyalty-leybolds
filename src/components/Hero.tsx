import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative flex h-[60vh] md:h-[70vh] items-center justify-start overflow-hidden bg-inverse-surface border-b-4 border-primary px-6 md:px-12">
      <div className="absolute inset-0 z-0">
        <img 
          alt="Technical industrial machinery" 
          className="h-full w-full object-cover opacity-40 grayscale"
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-inverse-surface via-inverse-surface/60 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block border-l-4 border-white bg-primary px-3 py-1 mb-6"
        >
          <span className="font-manrope text-xs font-bold uppercase tracking-[0.2em] text-white">
            Exclusive Program
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 font-manrope text-5xl md:text-7xl font-extrabold uppercase leading-none tracking-tighter text-white"
        >
          Precision <br /> 
          <span className="text-primary-fixed-dim">That Rewards</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-10 max-w-xl font-manrope text-lg md:text-xl text-surface-variant leading-relaxed"
        >
          Join the leading loyalty program in vacuum technology and access exclusive benefits designed for engineering excellence.
        </motion.p>
        
        <motion.button 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 border-2 border-primary-container bg-primary-container px-10 py-4 font-manrope text-sm font-bold uppercase tracking-widest text-on-primary transition-all hover:bg-primary"
        >
          Join Now
          <ChevronRight className="h-4 w-4" />
        </motion.button>
      </div>
    </section>
  );
}
