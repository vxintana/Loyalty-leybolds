import { Award, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export default function Dashboard() {
  return (
    <section className="relative z-20 -mt-16 px-6 md:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-12 gap-1 border-t border-secondary">
        {/* User Stats Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:col-span-8 bg-white border-2 border-secondary p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-2 block">Active User</span>
            <h2 className="text-4xl font-extrabold text-on-surface uppercase tracking-tight">Marcus R.</h2>
            <div className="mt-4 flex items-center gap-2 border border-secondary-container bg-surface-container px-3 py-1 text-secondary">
              <Award className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Expert Level</span>
            </div>
          </div>
          
          <div className="w-full md:w-auto border-t md:border-t-0 md:border-l-2 border-secondary pt-6 md:pt-0 md:pl-12 flex flex-col items-end">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-1">Available Points</span>
            <div className="flex items-baseline gap-1">
              <span className="text-6xl font-extrabold text-primary leading-none">5,000</span>
              <span className="text-xs font-bold text-primary uppercase">pts</span>
            </div>
            <div className="mt-4 h-2 w-full md:w-64 bg-surface-container overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '80%' }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                className="h-full bg-primary" 
              />
            </div>
            <div className="mt-2 text-[10px] font-bold uppercase text-secondary tracking-widest self-end">
              80% to Master Level
            </div>
          </div>
        </motion.div>

        {/* Priority Support Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="md:col-span-4 bg-primary text-white p-8 border-2 border-primary flex flex-col justify-between"
        >
          <div className="flex justify-between items-start">
            <span className="text-xs font-bold uppercase tracking-widest leading-normal">Priority <br /> Support</span>
            <Zap className="h-6 w-6 text-white fill-current" />
          </div>
          <div className="mt-auto">
            <p className="text-sm border-l-2 border-white/30 pl-4 leading-snug mb-6">
              Instant access to Level 3 technical support engineers for your high-vacuum systems.
            </p>
            <a href="#" className="inline-block text-xs font-bold uppercase tracking-widest underline decoration-2 underline-offset-4 hover:text-on-primary-container transition-colors">
              Contact Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
