'use client';

import React from 'react';

import { motion } from 'framer-motion';

const CTABand: React.FC = () => {
  return (
    <section className="py-24 bg-[#007bff] relative overflow-hidden">
      {/* Background Overlay Image */}
      {/* Background Overlay Image */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 mix-blend-overlay flex items-center justify-center">
        import Image from 'next/image';

        // ... (top of file)

        <Image
          src="/sobreposicao_bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-contain opacity-30 mix-blend-overlay"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Cuide bem do patrimônio da<br />sua empresa.
          </h2>

          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Clique no botão de abaixo e solicite uma análise de marca gratuita
          </p>

          <button
            onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#111111] text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Solicitar Análise
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABand;
