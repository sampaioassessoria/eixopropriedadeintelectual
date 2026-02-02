'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, Shield, CheckCircle } from 'lucide-react';
import { formatPhone } from '../utils/masks';
import GlowingBorder from './ui/GlowingBorder';

const HeroSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    employees: ''
  });

  return (
    <section id="home" className="relative min-h-screen flex flex-col pt-24 pb-32 lg:pb-0 z-20 overflow-hidden" style={{ background: 'linear-gradient(90deg, #1480c8 0%, #65bdf8 100%)' }}>

      {/* Background Overlay Image - Left aligned X */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-overlay overflow-hidden">
        <Image
          src="/sobreposicao_bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-20 mix-blend-overlay"
        />
      </div>

      {/* Background Elements - Large faint X or shapes could be added here if needed */}
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -left-[10%] top-[20%] w-[60vw] md:w-[40vw] h-[60vw] md:h-[40vw] bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute right-[10%] bottom-[10%] w-[50vw] md:w-[30vw] h-[50vw] md:h-[30vw] bg-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="flex-grow flex items-center relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column - Brand and Text */}
            <div className="lg:col-span-7 text-center lg:text-left">
              {/* Large Brand Logotype */}
              {/* Large Brand Logotype */}
              <div className="mb-8 flex justify-center lg:justify-start w-full">
                <Image
                  src="/logo principal.png"
                  alt="Eixo Intelectual"
                  width={300}
                  height={100}
                  priority
                  className="w-[200px] md:w-[300px] h-auto"
                />
              </div>

              {/* Headline Text */}
              <div className="space-y-4 mb-8">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Blinde o seu<br />patrimônio<br />intelectual
                </h2>
                <p className="text-lg md:text-2xl text-blue-100 font-light mt-4 max-w-lg mx-auto lg:mx-0">
                  Evite o risco de perder sua marca ou patente.
                </p>
              </div>

              {/* Reviews */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
                <span className="text-white font-semibold text-lg">Reviews</span>
                <span className="text-blue-200 font-bold text-lg flex items-center"><span className="text-blue-400">G</span><span className="text-red-500">o</span><span className="text-yellow-400">o</span><span className="text-blue-400">g</span><span className="text-green-500">l</span><span className="text-red-500">e</span></span>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Profile */}
              {/* Profile */}
              <div className="flex flex-col items-center lg:items-start space-y-4 mt-8 max-w-lg mx-auto lg:mx-0">
                <div className="flex-shrink-0">
                  <Image
                    src="/atendimento exclusivo.png"
                    alt="Atendimento Exclusivo"
                    width={180}
                    height={180}
                    className="h-auto max-w-[180px]"
                  />
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-blue-100 text-sm leading-snug">
                    Consultoria com o sócio fundador Guilherme Stefanello, advogado, especialista em Propriedade Intelectual pela UCB.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Form Card */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <GlowingBorder
                  className="rounded-xl shadow-2xl"
                  containerClassName="bg-[#111111] rounded-xl p-5 md:p-8"
                  glowColor="#ffffff"
                >
                  <form className="space-y-4" onSubmit={async (e) => {
                    e.preventDefault();
                    try {
                      await fetch('https://n8n.sampaioservices.cloud/webhook/75c86d88-3d63-43c5-ba19-8531323f28b2', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(formState),
                      });
                    } catch (error) {
                      console.error('Error sending data to webhook:', error);
                    }
                    window.location.href = '/obrigado';
                  }}>
                    <div>
                      <input
                        required
                        type="text"
                        name="name"
                        aria-label="Qual seu nome?"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Qual seu nome?"
                        className="w-full bg-[#1a1a1a] text-gray-300 px-4 py-3.5 rounded-lg border border-gray-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-500"
                      />
                    </div>
                    <div>
                      <input
                        required
                        type="email"
                        name="email"
                        aria-label="Email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="digiteaqui@seuemail.com"
                        className="w-full bg-[#1a1a1a] text-gray-300 px-4 py-3.5 rounded-lg border border-gray-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-500"
                      />
                    </div>
                    <div>
                      <input
                        required
                        type="tel"
                        name="phone"
                        aria-label="Telefone (WhatsApp)"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: formatPhone(e.target.value) })}
                        maxLength={15}
                        placeholder="(DD) 99999-9999"
                        className="w-full bg-[#1a1a1a] text-gray-300 px-4 py-3.5 rounded-lg border border-gray-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-500"
                      />
                    </div>
                    <div>
                      <input
                        required
                        type="text"
                        name="company"
                        aria-label="Nome da sua empresa"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        placeholder="Nome da sua empresa..."
                        className="w-full bg-[#1a1a1a] text-gray-300 px-4 py-3.5 rounded-lg border border-gray-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-500"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Número de Funcionários</label>
                      <div className="relative">
                        <select
                          required
                          name="employees"
                          aria-label="Número de Funcionários"
                          value={formState.employees}
                          onChange={(e) => setFormState({ ...formState, employees: e.target.value })}
                          className="w-full bg-[#1a1a1a] text-gray-300 px-4 py-3.5 rounded-lg border border-gray-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 appearance-none"
                        >
                          <option value="">Selecione...</option>
                          <option value="1-5">1 a 5</option>
                          <option value="6-20">6 a 20</option>
                          <option value="21-50">21 a 50</option>
                          <option value="50+">Mais de 50</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>

                    <button type="submit" className="w-full bg-[#007bff] hover:bg-blue-600 text-white font-bold py-4 rounded-lg transition-colors uppercase tracking-wide text-sm mt-4">
                      Solicitar Análise
                    </button>

                    <p className="text-[10px] text-gray-500 text-center leading-tight mt-4">
                      De acordo com as Leis 12.965/2014 e 13.709/2018, que regulam o uso da Internet e o tratamento de dados pessoais no Brasil, autorizo Eixo Propriedade Intelectual a enviar notificações por e-mail ou outros meios e concordo com sua Política de Privacidade.
                    </p>

                    <div className="flex items-center justify-center space-x-2 mt-6 text-gray-400">
                      <Shield className="w-5 h-5 text-white" />
                      <span className="text-sm font-medium text-white">Site Blindado</span>
                      <span className="text-sm">|</span>
                      <span className="text-sm text-gray-400">100% seguro!</span>
                    </div>
                  </form>
                </GlowingBorder>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Angled Strip */}

    </section>
  );
};

export default HeroSection;
