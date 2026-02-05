import React from 'react';
import FadeIn from '../ui/FadeIn';

const steps = [
  { id: "01", title: "Честный аудит", desc: "По нашей методике и опыту экспертов." },
  { id: "02", title: "Рабочая группа", desc: "Формирование из ваших сотрудников." },
  { id: "03", title: "Выбор процессов", desc: "Предложение на выбор ЛПР и группе." },
  { id: "04", title: "Техническое задание", desc: "Составление корректного ТЗ." },
  { id: "05", title: "Подбор поставщика", desc: "Сбор КП у проверенных интеграторов." },
  { id: "06", title: "ТЭО", desc: "Технико-экономическое обоснование." },
  { id: "07", title: "Финансовая поддержка", desc: "Консультация по мерам господдержки." },
  { id: "08", title: "Дорожная карта", desc: "План с ответственными, контроль." },
  { id: "09", title: "Подготовка производства", desc: "Анализ и адаптация техпроцессов." },
  { id: "10", title: "Постпроектная поддержка", desc: "Оценка команды, анализ ошибок." }
];

export default function Process() {
  return (
    <section id="process" className="py-40 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <FadeIn className="sticky top-32">
              <h2 className="font-serif text-4xl md:text-5xl text-black mb-8 leading-tight">
                10 Шагов<br />к результату
              </h2>
              <p className="text-gray-500 font-light mb-8">
                Системный путь от идеи до работающего и окупаемого решения.
              </p>
              <a href="#contact" className="text-accent hover:text-black border-b border-accent hover:border-black transition-colors pb-1 inline-block mb-12">
                Начать первый шаг
              </a>

              {/* Context Image for Process */}
              <div className="hidden lg:block relative w-full aspect-[3/4] overflow-hidden bg-gray-100 border border-border">
                 <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop" 
                  alt="Engineer Planning" 
                  className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-[0.9] opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white text-xs uppercase tracking-widest font-medium">
                  Технический контроль
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-0">
              {steps.map((step, index) => (
                <FadeIn key={step.id} delay={index * 0.1}>
                  <div className="group relative pl-12 py-12 border-t border-border hover:bg-gray-50 transition-colors duration-500">
                    <span className="absolute left-0 top-12 text-sm font-bold text-accent font-serif italic text-2xl opacity-50">
                      {step.id}
                    </span>
                    <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
                      <h3 className="font-serif text-2xl text-black w-full md:w-1/3 group-hover:text-accent transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-500 font-light md:w-2/3 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
              <div className="border-t border-border"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}