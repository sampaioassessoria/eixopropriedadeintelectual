'use client';

import React from 'react';

import { motion } from 'framer-motion';
import { LayoutGrid, CreditCard, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: LayoutGrid,
      title: "Pesquisa",
      description: "Nós fazemos a pesquisa de viabilidade da sua marca através da consultoria",
      delay: 0.2
    },
    {
      icon: CreditCard,
      title: "Pagamento",
      description: "Protocolamos o seu processo em até 48 horas após o pagamento da taxa do INPI",
      delay: 0.4
    },
    {
      icon: ArrowRight,
      title: "Acompanhamento",
      description: "Pronto! Nós fazemos todo o acompanhamento para você.",
      delay: 0.6
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-blue-500"></div>
            <span className="text-blue-500 text-sm uppercase tracking-widest font-medium">Confira</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-blue-500"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Como<br />Funciona?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto text-lg mb-8"
          >
            Aqui na Eixo o cliente sabe exatamente qual será o investimento e tem acesso à todas as movimentações do processo.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: true }}
            onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            Solicite uma Análise
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: step.delay }}
              viewport={{ once: true }}
              className="bg-[#0f1535] rounded-2xl p-8 text-center border border-blue-900/30 hover:border-blue-500/50 transition-colors duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white">
                  <step.icon size={32} strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-blue-100/80 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
