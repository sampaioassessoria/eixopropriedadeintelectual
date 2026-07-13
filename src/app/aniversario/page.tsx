'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, Shield, Gift, PartyPopper, Sparkles, ShieldCheck, Cake } from 'lucide-react';
import { formatPhone } from '../../utils/masks';
import GlowingBorder from '../../components/ui/GlowingBorder';
import ServicesCarousel from '../../components/ServicesCarousel';
import DangerSection from '../../components/DangerSection';
import HowItWorks from '../../components/HowItWorks';
import BenefitsSection from '../../components/BenefitsSection';
import StatsSection from '../../components/StatsSection';
import TestimonialsStack from '../../components/TestimonialsStack';

// Deterministic confetti pieces (avoids SSR hydration mismatch)
const CONFETTI = [
    { left: '4%', delay: 0, dur: 6.5, color: '#facc15', size: 10, rot: 45 },
    { left: '11%', delay: 1.2, dur: 7.5, color: '#ffffff', size: 8, rot: 120 },
    { left: '18%', delay: 2.4, dur: 6.0, color: '#f472b6', size: 12, rot: 200 },
    { left: '25%', delay: 0.6, dur: 8.0, color: '#38bdf8', size: 9, rot: 15 },
    { left: '32%', delay: 3.0, dur: 6.8, color: '#facc15', size: 11, rot: 300 },
    { left: '39%', delay: 1.8, dur: 7.2, color: '#ffffff', size: 7, rot: 80 },
    { left: '46%', delay: 0.3, dur: 6.3, color: '#34d399', size: 10, rot: 160 },
    { left: '53%', delay: 2.7, dur: 7.8, color: '#facc15', size: 12, rot: 250 },
    { left: '60%', delay: 1.0, dur: 6.6, color: '#f472b6', size: 8, rot: 30 },
    { left: '67%', delay: 3.4, dur: 7.0, color: '#38bdf8', size: 11, rot: 190 },
    { left: '74%', delay: 0.9, dur: 6.9, color: '#ffffff', size: 9, rot: 100 },
    { left: '81%', delay: 2.1, dur: 7.6, color: '#facc15', size: 10, rot: 220 },
    { left: '88%', delay: 1.5, dur: 6.2, color: '#34d399', size: 8, rot: 60 },
    { left: '94%', delay: 3.2, dur: 7.4, color: '#f472b6', size: 12, rot: 330 },
    { left: '8%', delay: 4.0, dur: 8.2, color: '#38bdf8', size: 9, rot: 140 },
    { left: '29%', delay: 4.6, dur: 6.7, color: '#ffffff', size: 7, rot: 210 },
    { left: '50%', delay: 5.1, dur: 7.1, color: '#facc15', size: 11, rot: 20 },
    { left: '71%', delay: 4.3, dur: 6.4, color: '#f472b6', size: 10, rot: 170 },
    { left: '85%', delay: 5.4, dur: 7.9, color: '#34d399', size: 8, rot: 280 },
    { left: '15%', delay: 5.8, dur: 6.1, color: '#38bdf8', size: 12, rot: 90 },
];

const Confetti = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {CONFETTI.map((c, i) => (
            <span
                key={i}
                className="confetti-piece"
                style={{
                    left: c.left,
                    width: c.size,
                    height: c.size * 0.6,
                    backgroundColor: c.color,
                    animationDelay: `${c.delay}s`,
                    animationDuration: `${c.dur}s`,
                    ['--rot' as string]: `${c.rot}deg`,
                }}
            />
        ))}
    </div>
);

export default function Aniversario() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        employees: ''
    });

    return (
        <>
            {/* Hero - Anniversary themed */}
            <section
                id="home"
                className="relative min-h-screen flex flex-col pt-24 pb-32 lg:pb-0 z-20 overflow-hidden"
                style={{ background: 'linear-gradient(90deg, #1480c8 0%, #65bdf8 100%)' }}
            >
                {/* Background Overlay Image */}
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

                {/* Festive glow shapes */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute -left-[10%] top-[20%] w-[60vw] md:w-[40vw] h-[60vw] md:h-[40vw] bg-blue-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute right-[10%] bottom-[10%] w-[50vw] md:w-[30vw] h-[50vw] md:h-[30vw] bg-yellow-300/20 rounded-full blur-3xl"></div>
                </div>

                {/* Confetti */}
                <Confetti />

                {/* Floating balloons */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
                    {[
                        { left: '6%', delay: 0, dur: 7, color: '#facc15', size: 44 },
                        { left: '20%', delay: 2.5, dur: 9, color: '#ffffff', size: 34 },
                        { left: '82%', delay: 1.2, dur: 8, color: '#f472b6', size: 40 },
                        { left: '92%', delay: 3.4, dur: 10, color: '#facc15', size: 30 },
                        { left: '73%', delay: 4.2, dur: 8.5, color: '#ffffff', size: 36 },
                    ].map((b, i) => (
                        <div
                            key={i}
                            className="balloon"
                            style={{
                                left: b.left,
                                animationDelay: `${b.delay}s`,
                                animationDuration: `${b.dur}s`,
                            }}
                        >
                            <div
                                style={{
                                    width: b.size,
                                    height: b.size * 1.2,
                                    background: `radial-gradient(circle at 35% 30%, rgba(255,255,255,0.7), ${b.color})`,
                                    borderRadius: '50% 50% 48% 48%',
                                }}
                            />
                            <div style={{ width: 1, height: b.size * 0.9, background: 'rgba(255,255,255,0.5)', margin: '0 auto' }} />
                        </div>
                    ))}
                </div>

                {/* Floating sparkles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[
                        { top: '15%', left: '8%', delay: 0 },
                        { top: '30%', left: '85%', delay: 0.4 },
                        { top: '65%', left: '12%', delay: 0.8 },
                        { top: '75%', left: '78%', delay: 1.2 },
                        { top: '45%', left: '48%', delay: 1.6 }
                    ].map((s, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-yellow-200"
                            style={{ top: s.top, left: s.left }}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.1, 0.5] }}
                            transition={{ duration: 3, repeat: Infinity, delay: s.delay }}
                        >
                            <Sparkles className="w-6 h-6" />
                        </motion.div>
                    ))}
                </div>

                <div className="flex-grow flex items-center relative z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            {/* Left Column */}
                            <div className="lg:col-span-7 text-center lg:text-left">
                                {/* Festive announcement ribbon */}
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-300 text-black text-xs md:text-sm font-extrabold uppercase tracking-wide mb-6 shadow-lg"
                                >
                                    <span className="text-base">🎉</span>
                                    Estamos comemorando com você!
                                    <span className="text-base">🎂</span>
                                </motion.div>

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

                                {/* Anniversary badge */}
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/30 backdrop-blur-sm text-white text-sm font-semibold mb-6"
                                >
                                    <Cake className="w-4 h-4 text-yellow-300" />
                                    Promoção de Aniversário da Eixo
                                </motion.div>

                                {/* Headline */}
                                <div className="space-y-4 mb-6">
                                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                        Aproveite a promoção<br />de <span className="text-yellow-300">Aniversário</span> da Eixo
                                    </h1>

                                    {/* 50% OFF Highlight */}
                                    <div className="flex items-baseline justify-center lg:justify-start gap-3 pt-2">
                                        <span className="text-white/80 text-xl md:text-2xl font-light uppercase tracking-wide">até</span>
                                        <span className="text-5xl md:text-7xl font-extrabold text-yellow-300 drop-shadow-[0_2px_10px_rgba(250,204,21,0.35)]">
                                            50% OFF
                                        </span>
                                    </div>

                                    <p className="text-lg md:text-2xl text-blue-100 font-light mt-4 max-w-lg mx-auto lg:mx-0">
                                        Aqui você encontra experiência, segurança e um ótimo atendimento.
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
                                        {/* Discount ribbon on form */}
                                        <div className="flex items-center justify-center gap-2 mb-5 py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-300 text-black font-bold text-sm uppercase tracking-wide">
                                            <Gift className="w-4 h-4" />
                                            Garanta até 50% de desconto
                                        </div>

                                        <form className="space-y-4" onSubmit={async (e) => {
                                            e.preventDefault();
                                            try {
                                                await fetch('https://n8n.smpdev.site/webhook/75c86d88-3d63-43c5-ba19-8531323f28b2', {
                                                    method: 'POST',
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                    },
                                                    body: JSON.stringify({ ...formState, origem: 'aniversario' }),
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
            </section>

            {/* Sua empresa pode estar correndo perigo */}
            <DangerSection />

            {/* O que é possível ser registrado */}
            <ServicesCarousel />

            {/* NÃO PERCA ESSA CHANCE! 50% OFF - Discount banner */}
            <section className="py-24 bg-[#007bff] relative overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none opacity-30 mix-blend-overlay flex items-center justify-center">
                    <Image
                        src="/sobreposicao_bg.png"
                        alt=""
                        fill
                        sizes="100vw"
                        className="object-contain opacity-30 mix-blend-overlay"
                    />
                </div>

                {/* Confetti */}
                <Confetti />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/30 text-white text-sm font-semibold mb-6">
                            <PartyPopper className="w-4 h-4 text-yellow-300" />
                            Oferta de aniversário por tempo limitado
                        </div>

                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2 leading-tight uppercase">
                            Não perca essa chance!
                        </h2>
                        <div className="text-6xl md:text-8xl font-extrabold text-yellow-300 mb-6 drop-shadow-[0_2px_12px_rgba(250,204,21,0.35)]">
                            50% OFF
                        </div>

                        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                            Registre sua marca, patente ou software com o melhor custo-benefício do mercado. Comemore o aniversário da Eixo com a gente protegendo o seu patrimônio.
                        </p>

                        <button
                            onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-[#111111] text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2"
                        >
                            <Gift className="w-5 h-5 text-yellow-300" /> Resgatar Desconto
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Como funciona */}
            <HowItWorks />

            {/* As vantagens são muitas */}
            <section className="py-24 bg-black relative overflow-hidden">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

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
                            <span className="text-blue-500 text-sm uppercase tracking-widest font-medium">Vantagens</span>
                            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-blue-500"></div>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold text-white mb-6"
                        >
                            As vantagens são muitas
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: ShieldCheck, title: 'Proteção Contra a Concorrência Desleal', description: 'Garanta a exclusividade da sua marca e evite que terceiros se aproveitem do seu nome, evitando a concorrência desleal.' },
                            { icon: Sparkles, title: 'Valorização do seu Negócio', description: 'Uma marca registrada é um ativo: aumenta o valor da sua empresa e abre portas para franquias, licenciamento e novos negócios.' },
                            { icon: Shield, title: 'Segurança Jurídica', description: 'Tenha respaldo legal para agir contra cópias e uso indevido, protegendo o patrimônio que você construiu.' }
                        ].map((v, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 + (index * 0.15) }}
                                viewport={{ once: true }}
                                className="bg-[#0f1535] rounded-2xl p-8 text-center border border-blue-900/30 hover:border-blue-500/50 transition-colors duration-300"
                            >
                                <div className="flex justify-center mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-blue-400">
                                        <v.icon size={32} strokeWidth={1.5} />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{v.title}</h3>
                                <p className="text-blue-100/80 leading-relaxed text-sm">{v.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button
                            onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-white text-blue-900 px-8 py-3 rounded-full font-medium text-sm hover:bg-blue-50 transition-all duration-300 shadow-lg"
                        >
                            Solicite uma Análise
                        </button>
                    </div>
                </div>
            </section>

            {/* Benefícios */}
            <BenefitsSection />

            {/* Números / Provas sociais */}
            <StatsSection />

            {/* Depoimentos */}
            <TestimonialsStack />

            {/* CTA final de aniversário */}
            <section className="py-24 bg-[#007bff] relative overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none opacity-30 mix-blend-overlay flex items-center justify-center">
                    <Image
                        src="/sobreposicao_bg.png"
                        alt=""
                        fill
                        sizes="100vw"
                        className="object-contain opacity-30 mix-blend-overlay"
                    />
                </div>

                {/* Confetti */}
                <Confetti />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex justify-center mb-6">
                            <PartyPopper className="w-12 h-12 text-yellow-300" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Ainda em dúvida sobre os nossos<br />serviços para registro de marca?
                        </h2>

                        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                            Conte com nossa equipe para ajudar você. Aproveite a promoção de aniversário da Eixo e garanta até 50% de desconto no registro do seu ativo.
                        </p>

                        <button
                            onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-[#111111] text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2"
                        >
                            <Gift className="w-5 h-5 text-yellow-300" /> Solicitar Análise com Desconto
                        </button>

                        <p className="text-blue-200/70 text-xs mt-10">
                            Eixo Propriedade Intelectual · Registro/Documento: SCCCP-CNIO 4440/00046
                        </p>
                    </motion.div>
                </div>
            </section>

            <style>{`
                .confetti-piece {
                    position: absolute;
                    top: -24px;
                    border-radius: 2px;
                    opacity: 0.9;
                    animation-name: confettiFall;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                    will-change: transform;
                }
                @keyframes confettiFall {
                    0% { transform: translateY(-10vh) rotate(0deg); opacity: 0; }
                    10% { opacity: 0.95; }
                    100% { transform: translateY(105vh) rotate(var(--rot)); opacity: 0.9; }
                }
                .balloon {
                    position: absolute;
                    bottom: -140px;
                    animation-name: balloonRise;
                    animation-timing-function: ease-in;
                    animation-iteration-count: infinite;
                    will-change: transform;
                }
                @keyframes balloonRise {
                    0% { transform: translateY(0) translateX(0); opacity: 0; }
                    15% { opacity: 0.85; }
                    50% { transform: translateY(-55vh) translateX(12px); }
                    85% { opacity: 0.85; }
                    100% { transform: translateY(-110vh) translateX(-12px); opacity: 0; }
                }
                @media (prefers-reduced-motion: reduce) {
                    .confetti-piece, .balloon { animation: none; opacity: 0; }
                }
            `}</style>
        </>
    );
}
