import { ShoppingCart, Video, UserPlus, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

const EARN_OPPORTUNITIES = [
  {
    title: 'Purchase Equipment',
    description: 'Direct points for every acquisition of vacuum pumps or measurement systems.',
    points: '+1000 PTS',
    icon: ShoppingCart,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600',
    action: 'Catalog'
  },
  {
    title: 'Attend Webinars',
    description: 'Stay at the forefront of vacuum technology by participating in our technical sessions.',
    points: '+250 PTS',
    icon: Video,
    image: 'https://images.unsplash.com/photo-1540317580114-ed60965774a3?auto=format&fit=crop&q=80&w=600',
    action: 'Calendar'
  },
  {
    title: 'Refer an Engineer',
    description: 'Expand our technical network and earn exclusive benefits for each successful referral.',
    points: '+1500 PTS',
    icon: UserPlus,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600',
    action: 'Refer'
  }
];

export default function EarnPoints() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16 border-l-8 border-primary pl-6">
        <h3 className="text-4xl font-extrabold uppercase tracking-tight mb-2 text-on-surface">Earn Points</h3>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Optimize your technical investment</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {EARN_OPPORTUNITIES.map((item, index) => (
          <motion.div 
            key={item.title}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white border-2 border-secondary hover:border-primary transition-all duration-300"
          >
            <div className="relative h-48 overflow-hidden bg-surface-container">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute top-0 right-0 bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                {item.points}
              </div>
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-extrabold uppercase leading-tight text-on-surface">{item.title}</h4>
                <item.icon className="h-5 w-5 text-secondary group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-secondary leading-relaxed mb-8 h-12 overflow-hidden">
                {item.description}
              </p>
              <button className="flex w-full items-center justify-center gap-2 border-2 border-on-surface py-3 font-manrope text-xs font-bold uppercase tracking-widest text-on-surface transition-all hover:bg-on-surface hover:text-white">
                {item.action}
                <ArrowUpRight className="h-3 w-3" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
