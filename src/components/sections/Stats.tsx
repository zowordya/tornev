import React from 'react';
import FadeIn from '../ui/FadeIn';

const stats = [
  {
    value: "ROI",
    label: "Реальный результат",
    desc: "Четкое ТЭО и измеримый рост производительности."
  },
  {
    value: "-30%",
    label: "Экономия средств",
    desc: "За счет правильного выбора и мер господдержки."
  },
  {
    value: "100%",
    label: "Прокачка команды",
    desc: "Ваши специалисты готовы к следующим проектам."
  },
  {
    value: "0",
    label: "Рисков",
    desc: "Благодаря независимому РП и честному аудиту."
  }
];

export default function Stats() {
  return (
    <section id="stats" className="py-32 bg-black text-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&auto=format&fit=crop" 
          alt="Abstract Industrial Background" 
          className="w-full h-full object-cover opacity-40 filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <FadeIn className="mb-24">
          <h2 className="font-serif text-4xl text-white mb-6">
            Что вы получаете?
          </h2>
          <div className="w-full h-[1px] bg-white/20"></div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="group">
                <div className="font-serif text-5xl md:text-6xl text-accent mb-6 group-hover:translate-x-2 transition-transform duration-500">
                  {stat.value}
                </div>
                <h3 className="text-xl font-medium mb-3 text-white">
                  {stat.label}
                </h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed border-l border-white/10 pl-4 group-hover:border-accent transition-colors duration-300">
                  {stat.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}