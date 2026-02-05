import React from 'react';
import FadeIn from '../ui/FadeIn';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 lg:pt-0">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-12">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-border rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">Технологический аудит</span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-black">
                Роботизация с <span className="text-accent italic">умом</span>.<br />
                Роботизация с <span className="text-accent italic">результатом</span>.
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl font-light">
                Консалтинг и внедрение от практиков полного цикла. 
                Мы не продаем роботов. Мы интегрируем эффективность в ДНК вашего производства.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href="#contact" 
                  className="inline-flex justify-center items-center px-8 py-4 bg-accent text-white font-medium hover:bg-black transition-colors duration-300"
                >
                  Заказать аудит
                </a>
                <a 
                  href="#philosophy" 
                  className="inline-flex justify-center items-center px-8 py-4 border border-black text-black font-medium hover:bg-gray-50 transition-colors duration-300"
                >
                  Узнать подход
                </a>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-5 relative">
            <FadeIn delay={0.6} className="relative z-10">
              <div className="aspect-[4/5] bg-gray-50 relative overflow-hidden">
                {/* Abstract Industrial Representation */}
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop" 
                  alt="Industrial Audit Engineer" 
                  className="w-full h-full object-cover filter grayscale contrast-[0.9] hover:contrast-100 transition-all duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-white p-6 shadow-none border border-border max-w-xs hidden md:block">
                <p className="font-serif text-3xl text-accent mb-1">0%</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">воды в наших отчетах</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
        <a href="#philosophy" className="text-gray-400 hover:text-black transition-colors">
          <ArrowDown strokeWidth={1} size={32} />
        </a>
      </div>
    </section>
  );
}