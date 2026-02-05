import React from 'react';
import FadeIn from '../ui/FadeIn';

const solutions = [
  {
    title: "Промышленные роботы",
    img: "/industrial-5.jpg"
  },
  {
    title: "Коллаборативные роботы",
    img: "/industrial-3.jpg"
  },
  {
    title: "Автоматизированные линии",
    img: "/industrial-1.jpg"
  },
  {
    title: "Точечные решения",
    img: "/industrial-2.jpg"
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-xl">
             <h2 className="font-serif text-4xl md:text-5xl text-black mb-6">
              Наши решения
            </h2>
            <p className="text-gray-500 font-light">
              Подбираем технологии под задачу, а не наоборот.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1} className="relative group overflow-hidden cursor-pointer aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/9]">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover filter grayscale contrast-[0.9] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="border-t border-white/30 pt-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-serif text-2xl md:text-3xl">
                    {item.title}
                  </h3>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}