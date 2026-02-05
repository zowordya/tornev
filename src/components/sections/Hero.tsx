import React from 'react';
import FadeIn from '../ui/FadeIn';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 lg:pt-0 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main Grid Pattern - More Visible with Green Accent */}
        <div className="absolute inset-0 opacity-[0.12]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, #6DAE81 1px, transparent 1px),
              linear-gradient(to bottom, #6DAE81 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Accent Grid Overlay - Denser in corners with stronger green */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 opacity-[0.2]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, #6DAE81 1px, transparent 1px),
              linear-gradient(to bottom, #6DAE81 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 opacity-[0.2]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, #6DAE81 1px, transparent 1px),
              linear-gradient(to bottom, #6DAE81 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        {/* Accent Shapes */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        
        {/* Diagonal Accent Line */}
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-8 lg:space-y-12">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-accent/20 rounded-full mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                <span className="text-xs uppercase tracking-widest text-gray-600 font-medium">Технологический аудит</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-black">
                Роботизация с <span className="text-accent italic">умом</span>.<br />
                Роботизация с <span className="text-accent italic">результатом</span>.
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl font-light">
                Консалтинг и внедрение от практиков полного цикла. 
                Мы не продаем роботов. Мы интегрируем эффективность в ДНК вашего производства.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <a 
                  href="#contact" 
                  className="inline-flex justify-center items-center px-6 sm:px-8 py-3 sm:py-4 bg-accent text-white font-medium hover:bg-black transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-black/20 text-sm sm:text-base"
                >
                  Заказать аудит
                </a>
                <a 
                  href="#philosophy" 
                  className="inline-flex justify-center items-center px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-black text-black font-medium hover:bg-black hover:text-white transition-all duration-300 text-sm sm:text-base"
                >
                  Узнать подход
                </a>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block">
            <FadeIn delay={0.6} className="relative z-10">
              <div className="aspect-[4/5] bg-gray-100 relative overflow-hidden border border-border shadow-2xl">
                {/* Abstract Industrial Representation */}
                <img 
                  src="/industrial-1.jpg" 
                  alt="Industrial Audit Engineer" 
                  className="w-full h-full object-cover filter grayscale contrast-[0.9] hover:contrast-100 transition-all duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-white p-6 shadow-xl border-l-4 border-accent max-w-xs">
                <p className="font-serif text-3xl text-accent mb-1">0%</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">воды в наших отчетах</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
        <a href="#philosophy" className="text-gray-400 hover:text-accent transition-colors">
          <ArrowDown strokeWidth={1} size={32} />
        </a>
      </div>
    </section>
  );
}