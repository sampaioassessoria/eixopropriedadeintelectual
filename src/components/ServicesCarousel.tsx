'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Monitor, Globe, FileText, PenTool, Copyright, ArrowUpRight } from 'lucide-react';

const ServicesCarousel: React.FC = () => {
  const originalServices = [
    {
      id: 1,
      icon: MapPin,
      title: "Indicação Geográfica",
      description: "O registro de Indicação Geográfica (IG) no Brasil é um tipo de registro de propriedade intelectual que identifica a origem geográfica de um produto ou serviço e garante a sua qualidade, reputação e características distintivas."
    },
    {
      id: 2,
      icon: Monitor,
      title: "Software",
      description: "Proteção jurídica para programas de computador e aplicativos, garantindo direitos exclusivos sobre o código-fonte e sua comercialização."
    },
    {
      id: 3,
      icon: Globe,
      title: "Marcas Nacionais e Internacionais",
      description: "Registro da sua marca no Brasil e no exterior, protegendo a identidade do seu negócio em escala global."
    },
    {
      id: 4,
      icon: FileText,
      title: "Patentes",
      description: "Proteção para invenções e modelos de utilidade, garantindo exclusividade de exploração comercial de novas tecnologias."
    },
    {
      id: 5,
      icon: PenTool,
      title: "Desenhos Industriais",
      description: "Registro do design e forma plástica ornamental de um objeto, protegendo a aparência visual do seu produto."
    },
    {
      id: 6,
      icon: Copyright,
      title: "Direitos Autorais",
      description: "Proteção para obras intelectuais, artísticas, literárias e científicas, garantindo os direitos do autor sobre sua criação."
    }
  ];

  // Triple the items to ensure smooth infinite loop without gaps
  const services = [...originalServices, ...originalServices, ...originalServices];

  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  return (
    <section id="recursos" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl text-gray-800 font-light">
          O que é possivel ser registrado? <span className="text-gray-300">|</span> <span className="font-bold text-blue-600 lowercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>eixo</span>
        </h2>
      </div>

      <div className="relative w-full overflow-hidden px-4 md:px-0">
        {/* Container for the marquee animation */}
        <div className="flex w-max animate-marquee hover:pause-marquee">
          {services.map((service, index) => (
            <div
              key={`${service.id}-${index}`}
              className="flex-shrink-0 w-[85vw] md:w-80 h-[450px] mx-2 perspective-1000 cursor-pointer"
              onClick={() => setFlippedCard(flippedCard === index ? null : index)}
            >
              <motion.div
                className="relative w-full h-full transition-all duration-500 preserve-3d"
                animate={{ rotateY: flippedCard === index ? 180 : 0 }}
              >
                {/* Front of Card */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className="h-full bg-black border-t-4 border-blue-500 p-8 flex flex-col items-center justify-center text-center group hover:bg-gray-900 transition-colors">
                    <service.icon className="w-20 h-20 text-white mb-6" strokeWidth={1.5} />
                    <h3 className="text-white text-lg font-medium mb-8 leading-tight">
                      {service.title}
                    </h3>
                    <div className="flex items-center text-blue-500 text-sm font-medium group-hover:text-blue-400 transition-colors">
                      <ArrowUpRight className="w-4 h-4 mr-1" />
                      Saiba Mais
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div
                  className="absolute inset-0 w-full h-full backface-hidden bg-black border-t-4 border-blue-500 p-8 flex flex-col justify-between text-left"
                  style={{ transform: 'rotateY(180deg)' }}
                >
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="self-center">
                    <div className="w-10 h-10 border border-blue-500 rounded flex items-center justify-center text-blue-500">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .pause-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ServicesCarousel;
