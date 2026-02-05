import React, { useState } from 'react';
import FadeIn from '../ui/FadeIn';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Сколько стоит аудит производства?",
    answer: "Первичная консультация — бесплатно. Стоимость полного аудита зависит от масштаба производства и составляет от 150 000 до 500 000 рублей. В эту сумму входит: выезд на объект, анализ процессов, ТЭО, рекомендации по оптимизации и дорожная карта внедрения."
  },
  {
    question: "Как долго длится процесс внедрения?",
    answer: "От аудита до запуска робота — в среднем 4-8 месяцев. Это включает: аудит (2-4 недели), подготовку ТЗ (2-3 недели), выбор поставщика (3-4 недели), поставку оборудования (8-16 недель), монтаж и пусконаладку (2-4 недели), обучение персонала (1-2 недели)."
  },
  {
    question: "Что такое независимый руководитель проекта?",
    answer: "Это наш специалист, который защищает ваши интересы на всех этапах. Он не связан с поставщиками оборудования, контролирует сроки, бюджет, качество работ и соответствие результата вашим целям. Фактически — ваш технический адвокат."
  },
  {
    question: "Можете ли вы сказать, что робот не нужен?",
    answer: "Да, и мы это делаем регулярно. Если роботизация не окупится или есть более эффективные решения (оптимизация процессов, простая автоматизация, изменение логистики) — мы честно об этом скажем. Наша репутация важнее разовой сделки."
  },
  {
    question: "Какие меры господдержки доступны?",
    answer: "Мы консультируем по программам: льготный лизинг (ставка от 1%), субсидии на автоматизацию (до 50% стоимости), налоговые льготы, гранты на инновации. Помогаем с подготовкой документов и сопровождением заявок."
  },
  {
    question: "Обучаете ли вы наших сотрудников?",
    answer: "Обязательно. Мы формируем рабочую группу из ваших специалистов и обучаем их на всех этапах проекта. После внедрения ваша команда сможет самостоятельно обслуживать оборудование и масштабировать автоматизацию."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <FadeIn className="lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-border rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">FAQ</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-black mb-6">
                Частые вопросы
              </h2>
              <p className="text-gray-500 font-light mb-8 leading-relaxed">
                Ответы на основные вопросы о процессе аудита и внедрения роботизации
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-6 py-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-300"
              >
                Задать свой вопрос
              </a>
            </FadeIn>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="bg-white border border-border overflow-hidden">
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full px-8 py-6 flex items-start justify-between gap-4 text-left hover:bg-gray-50 transition-colors group"
                    >
                      <span className="font-serif text-xl text-black group-hover:text-accent transition-colors flex-grow">
                        {faq.question}
                      </span>
                      <span className="shrink-0 mt-1">
                        {openIndex === index ? (
                          <Minus size={20} strokeWidth={1} className="text-accent" />
                        ) : (
                          <Plus size={20} strokeWidth={1} className="text-gray-400 group-hover:text-accent transition-colors" />
                        )}
                      </span>
                    </button>
                    
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-8 pb-6 text-gray-600 leading-relaxed font-light border-t border-border pt-6">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
