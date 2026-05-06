export default function Footer() {
  return (
    <footer className="bg-inverse-surface border-t-2 border-primary py-20 px-6 md:px-12 text-surface-variant">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center bg-primary text-white">
              <span className="font-bold text-sm leading-none">L</span>
            </div>
            <span className="font-manrope text-xl font-extrabold tracking-tighter text-white">
              LEYBOLD
            </span>
          </div>
          <p className="text-[10px] uppercase font-bold tracking-widest text-secondary max-w-xs leading-loose">
            © 2024 LEYBOLD GMBH. ALL TECHNICAL SPECIFICATIONS SUBJECT TO CHANGE. PRECISION ENGINEERED IN GERMANY.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-x-12 gap-y-6">
          <div className="flex flex-col gap-4">
            <h6 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Technical</h6>
            <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">Support Center</a>
            <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">Documentation</a>
            <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">Warranty Terms</a>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Legal</h6>
            <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">Imprint</a>
            <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">Cookie Settings</a>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Connect</h6>
            <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">Contact Engineer</a>
            <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">Global Offices</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
