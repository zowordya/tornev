import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import Logo from '../ui/Logo';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-24 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="space-y-8">
            <Logo color="white" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Честный аудит. Выверенные решения.<br/>Гарантированный результат.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="font-serif text-lg text-white">Контакты</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3 hover:text-accent transition-colors duration-300">
                <MapPin size={18} strokeWidth={1} className="mt-0.5 shrink-0" />
                <span>Санкт-Петербург,<br/>наб. Реки Карповки</span>
              </li>
              <li className="flex items-center gap-3 hover:text-accent transition-colors duration-300">
                <Phone size={18} strokeWidth={1} className="shrink-0" />
                <a href="tel:89215883309">8-921-588-33-09</a>
              </li>
              <li className="flex items-center gap-3 hover:text-accent transition-colors duration-300">
                <Mail size={18} strokeWidth={1} className="shrink-0" />
                <a href="mailto:info@piperobot.ru">info@piperobot.ru</a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-serif text-lg text-white">Меню</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#philosophy" className="hover:text-accent transition-colors">Философия</a></li>
              <li><a href="#process" className="hover:text-accent transition-colors">Процесс аудита</a></li>
              <li><a href="#stats" className="hover:text-accent transition-colors">Результаты</a></li>
              <li><a href="#solutions" className="hover:text-accent transition-colors">Решения</a></li>
            </ul>
          </div>

          <div className="space-y-6">
             <h4 className="font-serif text-lg text-white">Документы</h4>
             <ul className="space-y-4 text-sm text-gray-400">
               <li><a href="#" className="flex items-center gap-2 hover:text-accent transition-colors">Политика конфиденциальности <ArrowUpRight size={14} /></a></li>
               <li><a href="#" className="flex items-center gap-2 hover:text-accent transition-colors">Реквизиты компании <ArrowUpRight size={14} /></a></li>
             </ul>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} ПЗТ. Все права защищены.</p>
          <p>Design inspired by Spawntech Aesthetic.</p>
        </div>
      </div>
    </footer>
  );
}