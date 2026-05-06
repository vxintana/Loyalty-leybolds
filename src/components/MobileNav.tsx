import { LayoutDashboard, Database, ShoppingBag, Wrench } from 'lucide-react';

export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-stretch h-16 bg-white border-t-2 border-secondary shadow-lg">
      <a href="#" className="flex flex-col items-center justify-center bg-primary text-white w-full h-full">
        <LayoutDashboard className="h-5 w-5 mb-1" />
        <span className="text-[10px] font-bold uppercase tracking-widest">Overview</span>
      </a>
      <a href="#" className="flex flex-col items-center justify-center text-secondary w-full h-full hover:bg-surface-container transition-colors">
        <Database className="h-5 w-5 mb-1" />
        <span className="text-[10px] font-bold uppercase tracking-widest">Earn</span>
      </a>
      <a href="#" className="flex flex-col items-center justify-center text-secondary w-full h-full hover:bg-surface-container transition-colors">
        <ShoppingBag className="h-5 w-5 mb-1" />
        <span className="text-[10px] font-bold uppercase tracking-widest">Redeem</span>
      </a>
      <a href="#" className="flex flex-col items-center justify-center text-secondary w-full h-full hover:bg-surface-container transition-colors">
        <Wrench className="h-5 w-5 mb-1" />
        <span className="text-[10px] font-bold uppercase tracking-widest">Support</span>
      </a>
    </nav>
  );
}
