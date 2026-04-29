import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { View } from '../types';
import { IMAGES } from '../constants';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

export default function Header({ currentView, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems: { label: string; view: View }[] = [
    { label: 'Home', view: 'home' },
    { label: 'Visas', view: 'visas' },
    { label: 'Flights', view: 'flights' },
    { label: 'Packages', view: 'packages' },
  ];

  const handleContactClick = () => {
    if (currentView !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white md:bg-white/95 md:backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/30 shadow-ambient font-display antialiased">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <button 
            onClick={() => onNavigate('home')}
            className="cursor-pointer"
          >
            <img src={IMAGES.logo} alt="Goto Holidays" className="h-10 object-contain" />
          </button>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => onNavigate(item.view)}
                className={`transition-all duration-200 px-3 py-2 rounded-md font-semibold text-sm cursor-pointer ${
                  currentView === item.view
                    ? 'text-primary border-b-2 border-primary rounded-none pb-1'
                    : 'text-outline hover:text-primary hover:bg-surface-low'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden text-outline hover:text-primary p-2 rounded-full hover:bg-surface-low transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <Menu size={24} />
          </button>
          <button 
            onClick={handleContactClick}
            className="hidden md:block bg-primary hover:bg-primary-light text-white font-bold px-6 py-2.5 rounded-full transition-all duration-200 active:scale-95 shadow-sm text-sm cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-[60] md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[280px] bg-white z-[70] md:hidden shadow-2xl flex flex-col"
            >
              <div className="p-6 flex justify-between items-center border-b border-outline-variant/30">
                <img src={IMAGES.logo} alt="Logo" className="h-8 object-contain" />
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-outline hover:text-primary hover:bg-surface-low rounded-full transition-colors cursor-pointer"
                >
                  <X size={24} />
                </button>
              </div>
              
              <nav className="flex flex-col p-4 gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      onNavigate(item.view);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center justify-between p-4 rounded-xl font-bold text-base transition-all active:scale-95 cursor-pointer ${
                      currentView === item.view
                        ? 'bg-primary/10 text-primary px-6'
                        : 'text-outline hover:bg-surface-low'
                    }`}
                  >
                    <span>{item.label}</span>
                    {currentView === item.view && (
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    )}
                  </button>
                ))}
              </nav>

              <div className="mt-auto p-6 border-t border-outline-variant/30">
                <button 
                  onClick={() => {
                    handleContactClick();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-primary text-white font-bold py-4 rounded-2xl shadow-lg active:scale-95 transition-transform cursor-pointer"
                >
                  Contact Us
                </button>
                <div className="mt-6 text-center">
                  <p className="text-xs text-outline font-medium uppercase tracking-widest mb-1 opacity-50">Support Available</p>
                  <p className="text-sm font-bold text-primary">+91 98404 54601</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

