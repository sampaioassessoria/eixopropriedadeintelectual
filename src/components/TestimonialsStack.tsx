'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Globe } from 'lucide-react';

const TestimonialsStack: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      text: "Minha experiência foi muito boa! Busquei a Eixo para registrar minha marca e recebi um atendimento ágil e eficiente. Percebi muito profissionalismo e confiança com os serviços prestados.",
      author: "Ana Souza",
      company: "Design Co."
    },
    {
      id: 2,
      text: "Serviço excelente! A equipe me ajudou com o registro da minha marca e me ofereceu todo o suporte para a criação da minha empresa. Profissionais eficientes!",
      author: "Carlos Oliveira",
      company: "Tech Solutions"
    },
    {
      id: 3,
      text: "A Eixo me ajudou a registrar minha marca no INPI. Tive suporte do Guilherme e de toda a equipe sobre o que eu precisava para garantir a minha marca. Pagamento facilitado com certeza indico para outras pessoas.",
      author: "Fernanda Lima",
      company: "Beauty Studio"
    },
    {
      id: 4,
      text: "Excelente atendimento, respostas rápidas a todas as minhas dúvidas, equipe cordial e com agilidade na entrada no processo de registro de marca. Recomendo!",
      author: "Simone Bettencourt",
      company: "ADAMA Software"
    },
    {
      id: 5,
      text: "Processo transparente e equipe muito qualificada. Me senti segura em cada etapa do registro. Recomendo para qualquer empreendedor que queira proteger seu negócio.",
      author: "Roberto Alves",
      company: "Consultoria RA"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(2); // Start with middle card
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile(); // Check on mount
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Helper to get visible cards based on active index
  // We want to show 5 cards, centered on activeIndex
  const getVisibleCards = () => {
    const cards = [];
    const total = testimonials.length;
    // We want positions -2, -1, 0, 1, 2 relative to active
    for (let i = -2; i <= 2; i++) {
      const index = (activeIndex + i + total) % total;
      cards.push({ ...testimonials[index], offset: i });
    }
    return cards;
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden min-h-[900px] flex flex-col items-center">
      {/* World Map Background */}
      <div className="absolute inset-x-0 top-20 flex justify-center pointer-events-none">
        <div className="h-[677px] w-auto opacity-100 relative">
          <img
            src="/globo.png"
            alt="World Map Background"
            className="h-full w-auto object-contain"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-blue-500"></div>
            <span className="text-blue-500 text-sm uppercase tracking-widest font-medium">Depoimentos</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-blue-500"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            experiência,<br />
            segurança e um<br />
            ótimo atendimento
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto text-sm"
          >
            Cuidamos de todo o processo e mantemos acompanhamento<br />
            durante todo o processo de registro
          </motion.p>
        </div>

        {/* Cards Fan with Selector */}
        <div className="relative h-[420px] md:h-[500px] w-full max-w-6xl mx-auto flex justify-center items-center mt-10">
          <AnimatePresence initial={false} mode='popLayout'>
            {getVisibleCards().map((card) => {
              // Determine style based on offset
              const isCenter = card.offset === 0;

              // Mobile vs Desktop Animation adjustments
              const spacing = isMobile ? 8 : 120; // Tight stacking on mobile, spread on desktop
              const xOffset = isMobile ? card.offset * spacing : card.offset * spacing;
              // Actually for mobile let's just stack them almost on top or slightly offset vertically?
              // Let's do a simple fade stack for mobile logic vs fan for desktop

              const mobileX = 0;
              const mobileY = Math.abs(card.offset) * 10;
              const mobileRotate = card.offset * 2;
              const mobileScale = 1 - Math.abs(card.offset) * 0.05;

              const desktopX = card.offset * 120;
              const desktopY = Math.abs(card.offset) * 20;
              const desktopRotate = card.offset * 5;
              const desktopScale = isCenter ? 1.1 : 1 - Math.abs(card.offset) * 0.1;

              const x = isMobile ? mobileX : desktopX;
              const y = isMobile ? mobileY : desktopY;
              const rotate = isMobile ? mobileRotate : desktopRotate;
              const scale = isMobile ? mobileScale : desktopScale;

              const zIndex = 50 - Math.abs(card.offset);
              const opacity = 1 - Math.abs(card.offset) * 0.3;

              // Hide cards that are too far away on mobile to prevent clutter
              if (isMobile && Math.abs(card.offset) > 1) return null;

              return (
                <motion.div
                  key={card.id}
                  layoutId={`card-${card.id}`}
                  initial={{ opacity: 0, scale: 0.8, x: x }}
                  animate={{
                    opacity: opacity,
                    scale: scale,
                    x: x,
                    rotate: rotate,
                    zIndex: zIndex,
                    y: y
                  }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 30 }}
                  className={`absolute w-[280px] md:w-72 h-[400px] md:h-96 p-6 md:p-8 rounded-2xl flex flex-col justify-between shadow-2xl
                    ${isCenter ? 'bg-gradient-to-b from-blue-600 to-blue-900 border border-blue-400/30' : 'bg-blue-900/80 backdrop-blur-sm border border-white/10'}`}
                  style={{
                    transformOrigin: 'center bottom',
                    boxShadow: isCenter ? '0 25px 50px -12px rgba(0, 0, 0, 0.7)' : 'none'
                  }}
                >
                  <div className={`text-white text-sm leading-relaxed font-medium ${isCenter ? 'opacity-100' : 'opacity-70'}`}>
                    "{card.text}"
                  </div>

                  <div className="flex justify-between items-end mt-4">
                    <div>
                      <p className="text-white font-bold text-xs">{card.author}</p>
                      <p className="text-blue-200 text-[10px]">{card.company}</p>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isCenter ? 'bg-black/20' : 'bg-white/10'}`}>
                      <Quote className="w-4 h-4 text-white fill-current" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-8 mt-8 relative z-50">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full border border-gray-700 bg-black/50 text-white flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-8 bg-blue-500' : 'bg-gray-700 hover:bg-gray-500'
                  }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full border border-gray-700 bg-black/50 text-white flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 group"
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsStack;
