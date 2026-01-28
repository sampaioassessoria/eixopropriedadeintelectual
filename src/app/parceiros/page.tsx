'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Star, CheckCircle, ArrowRight } from 'lucide-react';
import { formatPhone } from '@/utils/masks';

export default function Parceiros() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        empresa: ''
    });

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = formatPhone(e.target.value);
        setFormData({ ...formData, telefone: formatted });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push('/obrigado-parceria');
    };

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
                                Seja nosso parceiro e blinde o <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                    patrimônio intelectual dos seus clientes.
                                </span>
                            </h1>

                            <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
                                Consultoria com o sócio fundador Guilherme Stefanello,
                                advogado, especialista em Propriedade Intelectual pela UCB.
                                <br /><br />
                                Confie em uma empresa NOTA MÁXIMA em avaliações dos clientes,
                                e que possui mais de 90% de aprovação nos processos de registros.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 items-start">
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center text-gray-300">
                                        <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                                        <span>Atendimento Exclusivo</span>
                                    </div>
                                    <div className="flex items-center text-gray-300">
                                        <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                                        <span>Reviews 5 Estrelas</span>
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

                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="nome" className="block text-sm font-medium text-gray-400 mb-1">Nome</label>
                                    <input
                                        type="text"
                                        id="nome"
                                        value={formData.nome}
                                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                                        className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600"
                                        placeholder="Seu nome completo"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600"
                                        placeholder="Seu melhor e-mail"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="telefone" className="block text-sm font-medium text-gray-400 mb-1">Telefone</label>
                                        <input
                                            type="tel"
                                            id="telefone"
                                            value={formData.telefone}
                                            onChange={handlePhoneChange}
                                            className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600"
                                            placeholder="(00) 00000-0000"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="empresa" className="block text-sm font-medium text-gray-400 mb-1">Empresa</label>
                                        <input
                                            type="text"
                                            id="empresa"
                                            value={formData.empresa}
                                            onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                                            className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600"
                                            placeholder="Sua Empresa"
                                            required
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg shadow-blue-500/20 uppercase tracking-wide text-sm mt-2 flex items-center justify-center gap-2"
                                >
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
        </div>
    );
};
