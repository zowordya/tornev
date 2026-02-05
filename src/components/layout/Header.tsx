import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../ui/Logo';

const navLinks = [
  { name: 'Философия', href: '#philosophy' },
  { name: 'Проблематика', href: '#problems' },
  { name: 'Результат', href: '#stats' },
  { name: 'Процесс', href: '#process' },
  { name: 'Решения', href: '#solutions' },
  { name: 'Кейсы', href: '#casestudies' },
  { name: 'Отзывы', href: '#testimonials' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md py-4 border-b border-border shadow-sm' 
            : 'bg-white/80 backdrop-blur-sm py-6 sm:py-8'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="group relative">
            <Logo color="black" className="group-hover:opacity-80 transition-opacity duration-300" />
          </a>

          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-gray-600 hover:text-accent transition-colors duration-300 tracking-wide relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-6 py-2 bg-accent text-white text-sm font-medium hover:bg-black transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Связаться
            </a>
          </nav>

          <button 
            className="md:hidden text-black p-2 hover:bg-gray-100 rounded transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu strokeWidth={1.5} size={28} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col justify-center items-center md:hidden"
          >
            <button 
              className="absolute top-8 right-6 text-black hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X strokeWidth={1} size={32} />
            </button>
            <nav className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-2xl font-serif text-black hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="mt-8 px-8 py-3 bg-black text-white text-lg font-medium hover:bg-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Связаться
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}