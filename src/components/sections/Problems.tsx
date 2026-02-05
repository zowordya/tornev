import React from 'react';
import FadeIn from '../ui/FadeIn';
import { Check, X } from 'lucide-react';

export default function Problems() {
  return (
    <section id="problems" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn className="mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-black mb-6">
            2 Варианта развития событий
          </h2>
          <p className="text-gray-500 max-w-xl">
            Выбор между системным подходом и "роботизацией ради галочки".
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Positive Path */}
          <FadeIn delay={0.2}>
            <div className="h-full bg-white p-12 border border-accent/20 relative overflow-hidden group hover:border-accent transition-colors duration-500 shadow-xl shadow-accent/5">
              {/* Background image for positive card */}
              <div className="absolute inset-0 opacity-[0.06] group-hover:opacity-10 transition-opacity duration-700">
                 <img 
                  src="/industrial-3.jpg" 
                  className="w-full h-full object-cover filter grayscale"
                  alt="Modern Cobot"
                />
              </div>
              
              <div className="absolute top-0 left-0 w-1 h-full bg-accent z-10"></div>
              
              <div className="relative z-20">
                <h3 className="font-serif text-3xl mb-8 text-black">С нами</h3>
                <ul className="space-y-6">
                  {[
                    "Честный ответ: 'Нужно' или 'Не нужно'",
                    "Выделен ваш ключевой процесс",
                    "Ваша команда обучена и вовлечена",
                    "Независимый РП защищает ваш интерес",
                    "Производство готово к роботу",
                    "Реальное увеличение производительности"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-accent text-white shrink-0 shadow-sm">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className="text-gray-800 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

          {/* Negative Path */}
          <FadeIn delay={0.4}>
            <div className="h-full bg-transparent p-12 border border-border relative overflow-hidden group hover:border-red-200 transition-colors duration-500 hover:bg-white">
               <div className="absolute top-0 left-0 w-1 h-full bg-gray-200 group-hover:bg-red-200 transition-colors"></div>
              <h3 className="font-serif text-3xl mb-8 text-gray-400 group-hover:text-gray-800 transition-colors">Без нас</h3>
              <ul className="space-y-6">
                {[
                  "Риск купить ненужное решение",
                  "Роботизация 'как у соседа'",
                  "Зависимость от внешних 'гастролеров'",
                  "Конфликт интересов с интегратором",
                  "Робот стоит, а процесс не адаптирован",
                  "Простой оборудования и разочарование"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                     <span className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-gray-100 text-gray-400 group-hover:text-red-400 shrink-0 transition-colors">
                      <X size={12} strokeWidth={3} />
                    </span>
                    <span className="text-gray-400 group-hover:text-gray-600 transition-colors font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}