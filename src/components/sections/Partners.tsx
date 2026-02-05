import React from 'react';
import FadeIn from '../ui/FadeIn';

const partners = [
  { name: "ABB Robotics", category: "Промышленные роботы" },
  { name: "Universal Robots", category: "Коллаборативные роботы" },
  { name: "KUKA", category: "Автоматизация" },
  { name: "Fanuc", category: "Робототехника" },
  { name: "Siemens", category: "Системы управления" },
  { name: "Schneider Electric", category: "Автоматизация" }
];

export default function Partners() {
  return (
    <section className="py-24 bg-white border-y border-border">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Работаем с лидерами отрасли</p>
          <h3 className="font-serif text-3xl text-black">Наши партнеры</h3>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="group text-center p-6 border border-border hover:border-accent transition-all duration-300 hover:shadow-lg">
                <div className="h-16 flex items-center justify-center mb-3">
                  <p className="font-serif text-xl text-black group-hover:text-accent transition-colors">
                    {partner.name}
                  </p>
                </div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">
                  {partner.category}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
