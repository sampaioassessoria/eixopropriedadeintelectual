'use client';

import React from 'react';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const INPISection: React.FC = () => {
  const tags = [
    { label: 'Marcas Nacionais e Internacionais', color: 'text-orange-400' },
    { label: 'Patentes', color: 'text-purple-400' },
    { label: 'Desenhos Industriais', color: 'text-green-400' },
    { label: 'Direitos Autorais', color: 'text-blue-400' },
    { label: 'StartUps', color: 'text-red-400' },
    { label: 'Infoproduto', color: 'text-yellow-400' },
    { label: 'Software', color: 'text-pink-400' }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-black overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">
      {/* Grid Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Horizontal Lines */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(to bottom, rgba(50, 50, 100, 0.2) 1px, transparent 1px)',
            backgroundSize: '100% 60px',
            transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(2)',
            transformOrigin: 'top center'
          }}>
        </div>
        {/* Vertical Lines */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(50, 50, 100, 0.2) 1px, transparent 1px)',
            backgroundSize: '60px 100%',
            transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(2)',
            transformOrigin: 'top center'
          }}>
        </div>

        {/* Radial Gradient Overlay for Fade Effect */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/80 to-black"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Top Button */}
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#0f1535] border border-blue-900/50 text-white px-6 py-2 rounded-full text-sm mb-12 hover:bg-blue-900/30 transition-colors flex items-center gap-2 mx-auto"
        >
          Solicite uma análise <ArrowUpRight size={16} />
        </motion.button>

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-6xl font-bold text-white mb-8 leading-tight"
        >
          Registro de Marca no <span className="text-blue-500">INPI</span>:<br />
          Protocolo em até 24h
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12"
        >
          Garanta a exclusividade da sua marca e evite a concorrência desleal. Proteção jurídica completa para o seu negócio.
        </motion.p>

        {/* Tags Grid */}
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {tags.map((tag, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
              className="bg-[#0a0e24] border border-blue-900/30 rounded-full px-6 py-3 flex items-center gap-2"
            >
              <span className={`text-lg ${tag.color}`}>✦</span>
              <span className="text-gray-300 text-sm md:text-base">{tag.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-gray-500 text-xs mt-8"
        >
          Seu Patrimônio Intelectual Seguro
        </motion.p>
      </div>
    </section>
  );
};

export default INPISection;
