'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Check } from 'lucide-react';

const StackedCards: React.FC = () => {
  const cards = [
    {
      title: "Valor Comercial",
      description: "Uma empresa com registros de PI pode ser mais atraente para investidores, parceiros comerciais ou compradores em potencial. Os registros podem ser vendidos ou licenciados para outras empresas.",
      id: 1
    },
    {
      title: "Segurança",
      description: "O registro de PI protege o proprietário contra a concorrência desleal ou o uso não autorizado de uma marca ou patente.",
      id: 2
    },
    {
      title: "Exclusividade",
      description: "O registro de PI dá ao proprietário o direito exclusivo de usar e comercializar a criação intelectual, impedindo outras pessoas de copiá-la ou usá-la sem permissão.",
      id: 3
    }
  ];

  return (
    <section id="valor-pi" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black mb-4">
            O Valor da Propriedade Intelectual
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A Propriedade Intelectual (PI) é um ativo valioso que <span className="font-bold text-black">protege suas inovações e criações</span>.
            Com o registro da PI, você não só resguarda sua originalidade, mas também potencializa seu valor comercial.
          </p>
        </div>

        <div className="relative pb-20">
          {cards.map((card, index) => (
            <Card key={card.id} card={card} index={index} total={cards.length} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#0f1535] text-white px-8 py-3 rounded-full font-medium text-sm hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Solicite uma Análise
          </button>
        </div>
      </div>
    </section>
  );
};

const Card = ({ card, index, total }: { card: any, index: number, total: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"]
  });

  // Calculate scaling and stacking effect
  // The higher the index, the later it comes into view
  // We want cards to stack with a slight offset

  return (
    <motion.div
      ref={ref}
      className="sticky top-24 md:top-32 mb-12"
      style={{
        zIndex: index + 1,
      }}
    >
      <div
        className="bg-[#4299e1] rounded-lg p-6 md:p-12 text-center text-white shadow-xl border-t-2 border-black mx-auto transition-all duration-500 ease-out w-full"
        style={{
          // Ensure all cards have the same width and visual weight
          width: '100%'
        }}
      >
        <div className="flex justify-center mb-4">
          <Check className="w-8 h-8 text-black" strokeWidth={1.5} />
        </div>
        <h3 className="text-3xl font-medium mb-4">{card.title}</h3>
        <p className="text-blue-50 text-lg leading-relaxed max-w-2xl mx-auto">
          {card.description}
        </p>
      </div>
    </motion.div>
  );
};

export default StackedCards;
