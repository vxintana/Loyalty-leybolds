import { User, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-surface sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b-2 border-secondary px-6 md:px-12">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center bg-primary text-white">
          <span className="font-bold text-xl leading-none">L</span>
        </div>
        <span className="font-manrope text-2xl font-extrabold tracking-tighter text-primary">
          LEYBOLD LOYALTY
        </span>
      </div>
      
      <div className="flex items-center gap-6">
        <nav className="hidden gap-8 md:flex">
          <a href="#" className="font-manrope text-sm font-bold uppercase tracking-wider text-primary">
            Overview
          </a>
          <a href="#" className="font-manrope text-sm font-bold uppercase tracking-wider text-secondary hover:text-primary transition-colors">
            Earn
          </a>
          <a href="#" className="font-manrope text-sm font-bold uppercase tracking-wider text-secondary hover:text-primary transition-colors">
            Redeem
          </a>
        </nav>
        
        <div className="flex items-center gap-3">
          <div className="hidden flex-col items-end md:flex">
            <span className="text-xs font-bold uppercase text-secondary">Marcus R.</span>
            <span className="text-[10px] uppercase text-primary">Expert Level</span>
          </div>
          <div className="h-10 w-10 overflow-hidden border border-secondary bg-surface-container-highest">
            <img 
              alt="User" 
              className="h-full w-full object-cover grayscale transition-all hover:grayscale-0"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100" 
            />
          </div>
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-on-surface" />
          </button>
        </div>
      </div>
    </header>
  );
}
