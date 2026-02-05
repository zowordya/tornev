import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50"
        >
          <div className="bg-white border border-border shadow-2xl shadow-black/10 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
            
            <button
              onClick={handleDecline}
              className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
            >
              <X size={20} strokeWidth={1} />
            </button>

            <div className="p-8 pr-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 border border-border">
                  <Cookie size={24} strokeWidth={1} className="text-accent" />
                </div>
                <h3 className="font-serif text-2xl text-black">Cookies</h3>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed mb-6 font-light">
                Мы используем файлы cookie для улучшения работы сайта и анализа посещаемости. 
                Продолжая использовать сайт, вы соглашаетесь с нашей{' '}
                <a href="#" className="text-accent hover:text-black border-b border-accent/30 hover:border-black transition-colors">
                  политикой конфиденциальности
                </a>.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAccept}
                  className="flex-1 px-6 py-3 bg-black text-white text-sm font-medium hover:bg-accent transition-colors duration-300"
                >
                  Принять
                </button>
                <button
                  onClick={handleDecline}
                  className="flex-1 px-6 py-3 border border-border text-black text-sm font-medium hover:bg-gray-50 transition-colors duration-300"
                >
                  Отклонить
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
