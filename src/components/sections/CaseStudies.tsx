import React from 'react';
import FadeIn from '../ui/FadeIn';
import { ArrowRight, TrendingUp, Clock, DollarSign } from 'lucide-react';

const cases = [
  {
    title: "Автоматизация сварочного участка",
    industry: "Металлообработка",
    image: "/industrial-4.jpg",
    results: [
      { icon: TrendingUp, label: "Производительность", value: "+180%" },
      { icon: Clock, label: "Окупаемость", value: "7 мес" },
      { icon: DollarSign, label: "Экономия", value: "₽4.2M/год" }
    ],
    description: "Внедрение роботизированной сварочной ячейки с системой технического зрения"
  },
  {
    title: "Коботы на линии упаковки",
    industry: "Пищевая промышленность",
    image: "/industrial-1.jpg",
    results: [
      { icon: TrendingUp, label: "Производительность", value: "+120%" },
      { icon: Clock, label: "Окупаемость", value: "11 мес" },
      { icon: DollarSign, label: "Экономия", value: "₽2.8M/год" }
    ],
    description: "Интеграция коллаборативных роботов для упаковки и паллетирования"
  },
  {
    title: "Автоматизация контроля качества",
    industry: "Электроника",
    image: "/industrial-2.jpg",
    results: [
      { icon: TrendingUp, label: "Точность", value: "99.8%" },
      { icon: Clock, label: "Окупаемость", value: "9 мес" },
      { icon: DollarSign, label: "Экономия", value: "₽3.5M/год" }
    ],
    description: "Система автоматического контроля с машинным зрением и AI"
  }
];

export default function CaseStudies() {
  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <FadeIn className="mb-12 sm:mb-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-border rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">Кейсы</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-black mb-4">
                Реализованные проекты
              </h2>
              <p className="text-gray-500 max-w-xl font-light text-sm sm:text-base">
                Примеры успешного внедрения с измеримыми результатами
              </p>
            </div>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 text-accent hover:text-black transition-colors border-b border-accent/30 hover:border-black pb-1 text-sm sm:text-base"
            >
              Обсудить ваш проект
              <ArrowRight size={16} strokeWidth={1.5} />
            </a>
          </div>
        </FadeIn>

        <div className="space-y-6 sm:space-y-8">
          {cases.map((item, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <div className="group grid lg:grid-cols-12 gap-0 lg:gap-8 border border-border hover:border-accent transition-all duration-500 overflow-hidden bg-white hover:shadow-2xl hover:shadow-accent/5">
                <div className="lg:col-span-5 relative overflow-hidden aspect-[16/10] lg:aspect-auto lg:min-h-[400px]">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-[0.9] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent lg:from-transparent lg:to-black/50"></div>
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 px-3 py-1 bg-white/90 backdrop-blur-sm">
                    <span className="text-xs uppercase tracking-wider text-black font-medium">{item.industry}</span>
                  </div>
                </div>

                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="font-serif text-2xl sm:text-3xl text-black mb-3 sm:mb-4 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 font-light leading-relaxed">
                    {item.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 sm:gap-6">
                    {item.results.map((result, idx) => (
                      <div key={idx} className="border-l-2 border-border group-hover:border-accent transition-colors pl-3 sm:pl-4">
                        <result.icon size={18} strokeWidth={1} className="text-accent mb-2 sm:w-5 sm:h-5" />
                        <p className="text-lg sm:text-2xl font-serif text-black mb-1">{result.value}</p>
                        <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider">{result.label}</p>
                      </div>
                    ))}
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
