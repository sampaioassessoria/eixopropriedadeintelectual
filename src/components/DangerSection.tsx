'use client';

import React from 'react';

import { motion } from 'framer-motion';

const DangerSection: React.FC = () => {
  // Placeholder data for news clippings to simulate the collage


  return (
    <section id="artigos" className="py-16 md:py-24 bg-white relative overflow-hidden">
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
            <span className="text-blue-500 text-sm uppercase tracking-widest font-medium">Cuidado</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-blue-500"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight"
          >
            Sua Empresa Pode<br />
            Estar Correndo Perigo
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-3xl mx-auto text-lg"
          >
            Não registrar uma marca ou patente no INPI (Instituto Nacional da<br />
            Propriedade Industrial) pode ser perigoso por várias razões
          </motion.p>
        </div>

        {/* News Image */}
        <div className="relative w-full max-w-5xl mx-auto mb-20 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/imagem noticias.png"
              alt="Notícias sobre riscos de marca"
              className="max-w-full h-auto drop-shadow-2xl rounded-lg"
            />
          </motion.div>
        </div>

        {/* Bottom CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-black rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden"
        >
          {/* Grid pattern overlay on black bar */}
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white relative z-10">
            Solicite uma Análise
          </h3>

          <button
            onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-900 px-8 py-3 rounded-full font-medium text-sm hover:bg-blue-50 transition-all duration-300 shadow-lg transform hover:-translate-y-1 relative z-10"
          >
            Solicite uma Análise
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default DangerSection;
