import { Copy, Share2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Referral() {
  return (
    <section className="py-24 px-6 md:px-12 structural-grid bg-background">
      <div className="mx-auto max-w-7xl bg-white border-2 border-on-surface p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold uppercase tracking-tight mb-6 leading-tight"
          >
            Refer Leybold and earn <br /> 
            <span className="text-primary italic">mutual benefits</span>
          </motion.h3>
          
          <p className="text-lg text-secondary mb-10 leading-relaxed font-medium">
            Invite other professionals and engineers to join our network. Upon their first technical purchase, both will receive a bonus of 2,000 technical points.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 bg-surface-container border border-secondary px-6 py-4 flex items-center justify-between group">
              <span className="font-mono text-sm font-bold text-on-surface tracking-widest">LEYBOLD-REF-9921-X</span>
              <button className="text-primary hover:text-black transition-colors">
                <Copy className="h-5 w-5" />
              </button>
            </div>
            <button className="bg-primary text-white px-10 py-4 font-manrope text-sm font-bold uppercase tracking-widest hover:bg-black transition-all flex items-center justify-center gap-2">
              <Share2 className="h-4 w-4" />
              Share
            </button>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="w-full md:w-1/3 aspect-square border-8 border-on-surface p-2 bg-white shadow-[12px_12px_0px_0px_#a60000]"
        >
          <img 
            alt="Engineers collaborating" 
            className="w-full h-full object-cover grayscale"
            src="https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&q=80&w=800" 
          />
        </motion.div>
      </div>
    </section>
  );
}
