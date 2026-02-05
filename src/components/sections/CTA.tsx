import React from 'react';
import FadeIn from '../ui/FadeIn';

export default function CTA() {
  return (
    <section id="contact" className="relative py-32 bg-gray-50 border-t border-border overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/industrial-6.jpg" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover opacity-[0.03] grayscale scale-110"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl text-black mb-8 leading-tight">
              Начнем с бесплатной консультации?
            </h2>
            <p className="text-xl text-gray-600 font-light mb-12">
              Обсудим ваши процессы и дадим предварительную оценку потенциала автоматизации. Без обязательств.
            </p>
            
            <div className="space-y-6 bg-white p-8 border border-border">
              <div className="flex items-center gap-6">
                 <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden shrink-0">
                    <img src="/director.jpg" alt="Юрий Торнев" className="w-full h-full object-cover" />
                 </div>
                 <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Прямой контакт</p>
                    <p className="font-serif text-3xl text-black mb-2">Торнев Юрий Михайлович</p>
                    <p className="text-sm text-gray-600">Генеральный директор</p>
                    <p className="text-sm text-gray-500">ООО "Петроградский завод им. Торнева"</p>
                 </div>
              </div>
              <div className="pt-4 border-t border-border">
                <a href="tel:89215883309" className="inline-block text-accent hover:text-black transition-colors text-xl font-medium border-b border-accent/20 hover:border-black pb-1">8-921-588-33-09</a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <form className="space-y-8 bg-white p-10 md:p-12 border border-border shadow-2xl shadow-gray-200/50 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
              
              <div className="space-y-1">
                <label className="text-xs uppercase tracking-wider text-gray-500">Ваше имя</label>
                <input 
                  type="text" 
                  className="w-full border-b border-gray-300 py-3 text-black outline-none focus:border-accent transition-colors bg-transparent placeholder-gray-300 font-light"
                  placeholder="Иван Иванов"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-wider text-gray-500">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full border-b border-gray-300 py-3 text-black outline-none focus:border-accent transition-colors bg-transparent placeholder-gray-300 font-light"
                    placeholder="+7 (999) 000-00-00"
                  />
                </div>
                <div className="space-y-1">
                   <label className="text-xs uppercase tracking-wider text-gray-500">Email</label>
                  <input 
                    type="email" 
                    className="w-full border-b border-gray-300 py-3 text-black outline-none focus:border-accent transition-colors bg-transparent placeholder-gray-300 font-light"
                    placeholder="company@mail.com"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs uppercase tracking-wider text-gray-500">Задача</label>
                <textarea 
                  rows={3}
                  className="w-full border-b border-gray-300 py-3 text-black outline-none focus:border-accent transition-colors bg-transparent placeholder-gray-300 font-light resize-none"
                  placeholder="Опишите кратко ваш производственный процесс..."
                ></textarea>
              </div>

              <button 
                type="button" 
                className="w-full py-5 bg-black text-white hover:bg-accent transition-colors duration-300 text-sm font-medium uppercase tracking-widest"
              >
                Отправить заявку
              </button>
              
              <p className="text-xs text-gray-400 text-center">
                Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.
              </p>
            </form>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}