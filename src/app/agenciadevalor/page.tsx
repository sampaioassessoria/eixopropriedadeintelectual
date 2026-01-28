'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Shield, CheckCircle, ArrowRight, Star, Users, Briefcase, DollarSign, Headphones } from 'lucide-react';
import StatsSection from '@/components/StatsSection';
import TestimonialsStack from '@/components/TestimonialsStack';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-4 px-6 flex items-center bg-[#f5f5f5] hover:bg-white transition-colors rounded-lg group"
            >
                <div className="mr-4">
                    {isOpen ?
                        <span className="text-2xl font-light text-black leading-none block align-middle">-</span> :
                        <span className="text-2xl font-light text-black leading-none block align-middle">+</span>
                    }
                </div>
                <span className="text-lg font-medium text-black text-left">{question}</span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-[#f5f5f5] rounded-b-lg -mt-2 pt-2 pb-6 px-16"
                    >
                        <p className="text-gray-600 leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function AgenciaDeValor() { // Renamed to default export function for Next.js page convention
    const router = useRouter();
    // const partnersSteps - Removed if unused or used elsewhere

    // Unused definition partnerSteps was in original file but unused in render, keeping it clean by omitting if truly unused. 
    // Wait, the original file had partnersSteps defined but NOT used in the JSX shown? 
    // Ah, I see `partnersSteps` defined but I don't see it used in the JSX I read. 
    // Let me double check usage in original file content... 
    // It seems `partnersSteps` was NOT used! It was defined but the JSX uses hardcoded sections "Você indica", "A Eixo assume", "Você lucra".
    // I will remove it to clean up code.

    const faqs = [
        {
            question: "Preciso vender algo?",
            answer: "Não. Você apenas indica e acompanha."
        },
        {
            question: "Recebo quanto por indicação?",
            answer: "Você ganha uma porcentagem sobre cada contrato fechado, de acordo com o serviço."
        },
        {
            question: "A Eixo avisa quando o contrato for fechado?",
            answer: "Sim! Você é informado sobre cada etapa do processo."
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden relative">
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0"></div>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
                                <Star className="w-4 h-4 mr-2 text-yellow-500 fill-yellow-500" />
                                Programa de Parceria Exclusivo
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                Você cria. A Eixo protege. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                    E você ainda lucra.
                                </span>
                            </h1>
                            <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
                                Indique clientes e ganhe participação em todos os contratos fechados.
                                <br /><br />
                                Confie em uma empresa NOTA MÁXIMA em avaliações dos clientes, e que possui mais de 90% de aprovação nos processos de registros.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 items-start">
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center text-gray-300">
                                        <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                                        <span>Aumente seu Ticket Médio</span>
                                    </div>
                                    <div className="flex items-center text-gray-300">
                                        <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                                        <span>Fidelize seus Clientes</span>
                                    </div>
                                    <div className="flex items-center text-gray-300">
                                        <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                                        <span>Suporte Jurídico Especializado</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Custom Form Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-[#111111] rounded-2xl p-8 border border-gray-800 shadow-2xl relative overflow-hidden group hover:border-blue-500/30 transition-colors"
                            id="form-parceria"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-400"></div>
                            <h3 className="text-2xl font-bold mb-2">Seja um Parceiro</h3>
                            <p className="text-gray-400 mb-6 text-sm">Junte-se a nós e leve mais segurança aos seus clientes.</p>

                            <form className="space-y-4" onSubmit={(e) => {
                                e.preventDefault();
                                router.push('/obrigado-parceria');
                            }}>
                                <div>
                                    <label htmlFor="nome" className="block text-sm font-medium text-gray-400 mb-1">Nome do Responsável</label>
                                    <input type="text" id="nome" className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600" placeholder="Seu nome completo" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">E-mail Corporativo</label>
                                    <input type="email" id="email" className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600" placeholder="seu@email.com.br" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-400 mb-1">WhatsApp</label>
                                        <input type="tel" id="whatsapp" className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600" placeholder="(00) 00000-0000" />
                                    </div>
                                    <div>
                                        <label htmlFor="agencia" className="block text-sm font-medium text-gray-400 mb-1">Nome da Agência</label>
                                        <input type="text" id="agencia" className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600" placeholder="Sua Agência" />
                                    </div>
                                </div>

                                <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg shadow-blue-500/20 uppercase tracking-wide text-sm mt-2 flex items-center justify-center gap-2">
                                    Solicitar Parceria <ArrowRight className="w-4 h-4" />
                                </button>
                                <p className="text-xs text-center text-gray-500 mt-4">
                                    Seus dados estão seguros. Entraremos em contato em breve.
                                </p>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* How it Works / Benefits Section */}
            <section className="py-24 bg-[#0a0a0a] z-10 relative border-t border-gray-900 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            Como funciona? <br />
                            <span className="text-gray-400">Veja o passo a passo da indicação.</span>
                        </h2>
                    </div>

                    <div className="space-y-24">
                        {/* Step 1: Você indica */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-3xl font-bold mb-4">Você indica</h3>
                                <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                                    Pode ser um aluno, cliente ou conhecido. Basta preencher o formulário e fazer a ponte com a gente.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-gray-800">
                                    <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay"></div>
                                    <img
                                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                                        alt="Business Meeting"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </motion.div>
                        </div>

                        {/* Step 2: A Eixo assume */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="relative order-2 md:order-1"
                            >
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-gray-800">
                                    <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay"></div>
                                    <img
                                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                                        alt="Support Team"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="order-1 md:order-2 pl-0 md:pl-12"
                            >
                                <h3 className="text-3xl font-bold mb-4">A Eixo assume</h3>
                                <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                                    Nosso time entra em contato, faz a análise gratuita da marca e conduz com agilidade e segurança.
                                </p>
                            </motion.div>
                        </div>

                        {/* Step 3: Você lucra */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-3xl font-bold mb-4">Você lucra</h3>
                                <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                                    Você acompanha o andamento e recebe sua comissão direto com a gente. Simples assim.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-gray-800">
                                    <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay"></div>
                                    <img
                                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
                                        alt="Success"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Footer Icons */}
                    <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-800 pt-16">
                        {[
                            { icon: Shield, text: "Confiança garantida" },
                            { icon: Star, text: "Sem dor de cabeça" },
                            { icon: DollarSign, text: "Renda extra" },
                            { icon: CheckCircle, text: "Diferencial próprio" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                                    <item.icon className="w-6 h-6" strokeWidth={1.5} />
                                </div>
                                <span className="font-medium text-sm text-gray-300">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <StatsSection />

            {/* Experience / Testimonials Section */}
            <TestimonialsStack />

            {/* FAQ Section */}
            <section className="py-24 bg-black border-t border-gray-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-left mb-12">
                        <h2 className="text-3xl md:text-5xl font-light text-white mb-4">
                            FAQ (Perguntas Frequentes)
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <FAQItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-gray-400 mb-6">Ainda tem dúvidas?</p>
                        <a
                            href="https://wa.me/5548988364246"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-3 border border-gray-700 rounded-full hover:bg-white/5 hover:border-blue-500 transition-all text-white font-medium gap-2"
                        >
                            <Headphones className="w-5 h-5" /> Fale com um Especialista
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};
