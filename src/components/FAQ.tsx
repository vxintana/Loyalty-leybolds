const FAQS = [
  {
    q: 'When do my points expire?',
    a: 'Technical points are valid for 24 months from the date of accreditation. You will receive a notification 30 days before they expire.'
  },
  {
    q: 'Integration with technical support?',
    a: 'Your membership level (Expert Level) grants you priority access to our global ticketing platform. Simply log in with your Loyalty ID.'
  },
  {
    q: 'How do I redeem my warranty extension?',
    a: 'Once redeemed, our contracts department will contact you to associate the extension with your equipment\'s serial number.'
  },
  {
    q: 'Can I transfer points?',
    a: 'Points are non-transferable between company accounts but can be consolidated under a single corporate engineering profile.'
  }
];

export default function FAQ() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16 border-l-8 border-primary pl-6">
        <h3 className="text-4xl font-extrabold uppercase tracking-tight mb-2 text-on-surface">Support & Questions</h3>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Technical Information Center</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        {FAQS.map((faq) => (
          <div key={faq.q} className="border-t-2 border-secondary/20 pt-8 group">
            <h5 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 group-hover:text-black transition-colors">
              {faq.q}
            </h5>
            <p className="text-secondary leading-relaxed font-manrope">
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
