'use client';

import React from 'react';

import { motion } from 'framer-motion';
import { DollarSign, ShieldCheck, MessageCircle } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: MessageCircle,
      title: "Atendimento",
      description: "Tire suas dúvidas a qualquer momento. Nosso atendimento é online.",
      isHighlight: false
    },
    {
      icon: DollarSign,
      title: "Economia",
      description: "Melhor custo benefício em propriedade intelectual",
      isHighlight: true
    },
    {
      icon: ShieldCheck,
      title: "Segurança e Agilidade",
      description: "Profissionais extremamente capacitados para cuidar de todo o seu processo de registro",
      isHighlight: true
    }
  ];

  return (
    <section id="beneficios" className="py-24 bg-white relative overflow-hidden">
      {/* Top Purple Glow Effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[300px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-blue-500"></div>
            <span className="text-blue-500 text-sm uppercase tracking-widest font-medium">Benefícios</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-blue-500"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight"
          >
            Quais são os<br />
            Benefícios de<br />
            Contratar a Eixo?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            A Eixo Propriedade Intelectual te proporciona registrar seus ativos<br />
            com segurança e velocidade
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.2) }}
              viewport={{ once: true }}
              className="bg-[#0a0e24] rounded-2xl p-8 text-center relative overflow-hidden group hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Card Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex justify-center mb-8">
                  {index === 0 ? (
                    // Atendimento Icon placeholder based on image (looks like chat/support)
                    <div className="w-24 h-24 flex items-center justify-center">
                      <MessageCircle className="w-16 h-16 text-blue-500" strokeWidth={1.5} />
                    </div>
                  ) : (
                    // Large Circle Icons for Economy and Security
                    <div className="w-24 h-24 rounded-full border-4 border-blue-600 flex items-center justify-center relative">
                      <benefit.icon className="w-10 h-10 text-blue-500" strokeWidth={2} />
                      {/* Decorative dots/elements around circle */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full"></div>
                      <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-400 rounded-full"></div>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#0f1535] text-white px-8 py-3 rounded-full font-medium text-sm hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Solicite uma Análise
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
