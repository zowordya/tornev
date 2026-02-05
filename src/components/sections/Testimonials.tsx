import React from 'react';
import FadeIn from '../ui/FadeIn';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Благодаря честному аудиту ПЗТ мы сэкономили 40% бюджета, отказавшись от ненужного оборудования. Внедрили только то, что реально увеличило производительность.",
    author: "Алексей Морозов",
    position: "Технический директор",
    company: "Завод металлоконструкций",
    image: "/person-1.jpg"
  },
  {
    text: "Независимый руководитель проекта защищал наши интересы на каждом этапе. Робот окупился за 8 месяцев вместо прогнозируемых 18.",
    author: "Мария Соколова",
    position: "Директор по производству",
    company: "Машиностроительный комбинат",
    image: "/person-2.jpg"
  },
  {
    text: "Команда ПЗТ не просто внедрила коботов, а обучила наших специалистов. Теперь мы сами можем масштабировать автоматизацию.",
    author: "Дмитрий Волков",
    position: "Главный инженер",
    company: "Производство электроники",
    image: "/person-3.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)`,
          backgroundSize: '10px 10px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <FadeIn className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-border rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">Отзывы клиентов</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-black mb-6">
            Что говорят о нас
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-light">
            Реальные результаты от компаний, которые выбрали честный подход к роботизации
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <FadeIn key={index} delay={index * 0.15}>
              <div className="bg-white p-8 border border-border hover:border-accent transition-all duration-500 group h-full flex flex-col relative">
                <div className="absolute top-0 left-0 w-1 h-0 bg-accent group-hover:h-full transition-all duration-500"></div>
                
                <Quote size={40} strokeWidth={1} className="text-accent/20 mb-6" />
                
                <p className="text-gray-700 leading-relaxed mb-8 flex-grow font-light italic">
                  "{item.text}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200 shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.author}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-black">{item.author}</p>
                    <p className="text-xs text-gray-500">{item.position}</p>
                    <p className="text-xs text-gray-400">{item.company}</p>
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
