import React from 'react';
import FadeIn from '../ui/FadeIn';
import { Search, BrainCircuit, Handshake } from 'lucide-react';

const items = [
  {
    icon: Search,
    number: "01",
    title: "Только честный аудит",
    desc: "Мы скажем прямо, если робот вам не нужен, и предложим альтернативное решение. Без навязывания лишнего оборудования.",
    image: "/industrial-1.jpg"
  },
  {
    icon: BrainCircuit,
    number: "02",
    title: "Выделяем ключевой процесс",
    desc: "Фокусируемся на процессе, который нужен именно вам для роста производительности, качества или улучшения условий труда.",
    image: "/industrial-2.jpg"
  },
  {
    icon: Handshake,
    number: "03",
    title: "Работаем как партнеры",
    desc: "Закрепляем за вами независимого руководителя проекта — вашего персонального контролера и помощника на всех этапах.",
    image: "/industrial-3.jpg"
  }
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-border rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">Философия</span>
              </div>
              <h2 className="font-serif text-5xl md:text-6xl text-black mb-8 leading-[1.1]">
                Не там, где у всех,<br />
                а там, где <span className="text-accent italic">нужно</span>
              </h2>
              <div className="w-24 h-1 bg-accent mb-8"></div>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                Наш подход основан на честности, экспертизе и партнерстве. 
                Мы не продаем технологии — мы решаем задачи.
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-7">
            <FadeIn delay={0.3}>
              <div className="relative aspect-[4/3] overflow-hidden border border-border">
                <img 
                  src="/industrial-1.jpg"
                  alt="Industrial Excellence"
                  className="w-full h-full object-cover filter grayscale contrast-[0.95] hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/95 backdrop-blur-sm p-6 border-l-4 border-accent">
                    <p className="font-serif text-2xl text-black mb-2">Системный подход</p>
                    <p className="text-sm text-gray-600">От аудита до результата — полный цикл сопровождения</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <FadeIn key={index} delay={index * 0.15}>
              <div className="group relative h-full">
                {/* Card with image background */}
                <div className="relative overflow-hidden border border-border hover:border-accent transition-all duration-500 h-full flex flex-col bg-white hover:shadow-2xl hover:shadow-accent/10">
                  {/* Background Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover filter grayscale contrast-[0.9] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    
                    {/* Number Badge */}
                    <div className="absolute top-6 left-6 w-16 h-16 border-2 border-white/30 backdrop-blur-sm flex items-center justify-center">
                      <span className="font-serif text-3xl text-white">{item.number}</span>
                    </div>

                    {/* Icon */}
                    <div className="absolute bottom-6 left-6 p-3 bg-accent group-hover:bg-white transition-colors duration-500">
                      <item.icon size={28} strokeWidth={1.5} className="text-white group-hover:text-accent transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="font-serif text-2xl mb-4 text-black group-hover:text-accent transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light flex-grow">
                      {item.desc}
                    </p>
                    
                    {/* Decorative line */}
                    <div className="mt-6 pt-6 border-t border-border">
                      <div className="w-12 h-1 bg-accent group-hover:w-full transition-all duration-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}