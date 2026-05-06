import { motion } from 'motion/react';

const REWARDS = [
  {
    category: 'Preventive Maintenance',
    title: '15% Discount on Services',
    description: 'Applicable to any field maintenance service or workshop repair on Leybold standard machines.',
    points: '1,200',
    tag: 'Components'
  },
  {
    category: 'Total Confidence',
    title: 'Warranty Extension',
    description: 'Add 12 additional months of comprehensive protection to your new technical equipment.',
    points: '3,000',
    tag: 'Knowledge Base'
  },
  {
    category: 'Optimal Operation',
    title: 'Maintenance Kits',
    description: 'Complete kit of original spare parts tailored for your specific vacuum pump model series.',
    points: '2,500',
    tag: 'Service'
  }
];

export default function RedeemBenefits() {
  return (
    <section className="bg-inverse-surface py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="border-l-8 border-primary pl-6">
            <h3 className="text-4xl font-extrabold uppercase tracking-tight mb-2 text-white">Redeem Benefits</h3>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-surface-variant/60">Rewards for your technical excellence</p>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-primary-fixed-dim font-manrope text-2xl font-bold uppercase tracking-widest"
          >
            Your Balance: 5,000 PTS
          </motion.div>
        </div>

        <div className="space-y-4">
          {REWARDS.map((reward, index) => (
            <motion.div 
              key={reward.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-stretch bg-white border-l-8 border-primary group"
            >
              <div className="flex-1 p-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-2 block">
                  {reward.category}
                </span>
                <h4 className="text-2xl font-extrabold uppercase text-on-surface mb-3 tracking-tight group-hover:text-primary transition-colors">
                  {reward.title}
                </h4>
                <p className="text-secondary text-sm max-w-2xl leading-relaxed">
                  {reward.description}
                </p>
              </div>
              
              <div className="bg-surface-container p-8 flex flex-col justify-center items-center md:min-w-[240px] border-l border-secondary-container">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-extrabold text-on-surface">{reward.points}</span>
                  <span className="text-xs font-bold uppercase text-secondary">PTS</span>
                </div>
                <button className="mt-6 w-full bg-on-surface text-white py-4 font-manrope text-xs font-bold uppercase tracking-[0.2em] transition-all hover:bg-primary active:scale-95">
                  Redeem
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
