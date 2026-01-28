'use client';

import React from 'react';
import { Star, ArrowDown, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const LinksPage: React.FC = () => {

    const services = [
        { name: "Software", color: "text-purple-400" },
        { name: "Infoproduto", color: "text-yellow-400" },
        { name: "StartUps", color: "text-red-400" },
        { name: "Direitos Autorais", color: "text-blue-400" },
        { name: "Desenhos Industriais", color: "text-green-400" },
        { name: "Patentes", color: "text-purple-500" },
        { name: "Marcas Nacionais e Internacionais", color: "text-orange-400" },
    ];

    // Duplicate services for seamless loop
    const tickerItems = [...services, ...services, ...services, ...services];

    return (
        <div className="min-h-screen bg-black text-white flex flex-col font-sans overflow-x-hidden relative">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-20 z-0"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}>
            </div>

            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none z-0"></div>


            {/* Content Container */}
            <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center pt-16 pb-12">

                {/* Logo */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-br from-blue-500 to-cyan-400 shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                        <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center relative">
                            <Image src="/logo pg links.png" alt="Eixo Propriedade Intelectual" fill className="object-cover" />
                        </div>
                    </div>
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl font-bold mb-8 text-center"
                >
                    Eixo Propriedade Intelectual
                </motion.h1>

                {/* Centered Service Ticker */}
                <div className="w-full max-w-md mx-auto px-6 mb-12">
                    <div className="w-full bg-[#0a0e17]/80 backdrop-blur-sm border border-white/10 rounded-2xl py-3 overflow-hidden relative"
                        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                        <div className="flex w-max animate-ticker">
                            {tickerItems.map((item, i) => (
                                <div key={i} className="flex items-center mx-4 gap-2">
                                    <span className={`text-lg ${item.color}`}>✦</span>
                                    <span className="text-gray-300 text-xs font-semibold tracking-wider uppercase whitespace-nowrap">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Links Importantes Header */}
                <div className="text-center mb-8">
                    <h2 className="text-xl font-medium text-white mb-2">Links Importantes</h2>
                    <ArrowDown className="w-6 h-6 mx-auto text-gray-500 animate-bounce" />
                </div>

                {/* Main Action Card - Registre Sua Marca */}
                <motion.a
                    href="/#home"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="w-full px-6 mb-8 block group"
                >
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-800 to-cyan-500 p-6 shadow-lg shadow-blue-900/20 transition-transform duration-300 group-hover:scale-[1.02]">
                        <div className="flex items-center gap-5">
                            <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm shrink-0 relative w-16 h-16">
                                <Image src="/logo principal.png" fill className="object-contain brightness-[100] drop-shadow-md" alt="Logo" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1">Registre Sua Marca</h3>
                                <p className="text-blue-100 text-xs leading-relaxed max-w-[200px]">Blinde o seu patrimônio intelectual. Evite o risco de perder sua marca ou patente.</p>
                            </div>
                        </div>
                    </div>
                </motion.a>

                {/* Centered Reviews Strip */}
                <div className="w-full max-w-md mx-auto px-6 mb-12">
                    <div className="w-full bg-gradient-to-r from-blue-900/40 to-blue-800/40 backdrop-blur-md border border-blue-500/20 rounded-2xl py-3 overflow-hidden relative"
                        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                        <div className="flex w-max animate-marquee whitespace-nowrap">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="flex items-center space-x-4 mx-6">
                                    <span className="text-gray-300 text-xs font-light">Conte com a empresa mais bem avaliada do Sul do Brasil</span>
                                    <span className="flex items-center text-white font-bold text-xs bg-black/30 px-2 py-1 rounded-full border border-white/5">
                                        Reviews <span className="text-blue-400 ml-1">Google</span>
                                        <div className="flex ml-1.5 gap-0.5">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star key={star} className="w-2.5 h-2.5 text-yellow-400 fill-current" />
                                            ))}
                                        </div>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Secondary Links Stack */}
                <div className="w-full px-6 space-y-4">

                    {/* Fale Conosco */}
                    <LinkButton
                        href="https://wa.me/5548988364246"
                        title="Fale Conosco"
                        subtext="Atendimento via WhatsApp"
                        icon="/fale_conosco_icon.png"
                        gradient="from-blue-600 to-sky-400"
                        delay={0.4}
                    />

                    {/* Linkedin */}
                    <LinkButton
                        href="https://www.linkedin.com/company/eixo-propriedade-intelectual/"
                        title="Linkedin"
                        subtext="Siga nossa página"
                        icon="/linkedin_icon.png"
                        gradient="from-blue-700 to-blue-500"
                        delay={0.5}
                    />

                    {/* Artigos */}
                    <LinkButton
                        href="/#artigos"
                        title="Artigos"
                        subtext="Fique por dentro das novidades"
                        icon="/artigos_icon.png"
                        gradient="from-cyan-600 to-blue-400"
                        delay={0.6}
                    />

                </div>

                {/* Footer */}
                <footer className="mt-16 text-center">
                    <div className="relative w-32 h-6 mx-auto mb-4 opacity-70">
                        <Image src="/logo principal.png" alt="Eixo" fill className="object-contain" />
                    </div>
                    <p className="text-gray-600 text-xs mb-4">© 2026 Copyright - Eixo Propriedade Intelectual</p>
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-500 text-xs hover:text-white transition-colors flex items-center justify-center gap-1 mx-auto">
                        Voltar para o Topo <ArrowDown className="w-3 h-3 rotate-180" />
                    </button>
                </footer>

            </div>

            <style>{`
                @keyframes ticker {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-ticker {
                    animation: ticker 40s linear infinite;
                }
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 20s linear infinite;
                }
            `}</style>
        </div>
    );
};

interface LinkButtonProps {
    href: string;
    title: string;
    subtext?: string;
    icon: string;
    gradient: string;
    delay: number;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, title, subtext, icon, gradient, delay }) => (
    <motion.a
        href={href}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay }}
        target={href.startsWith('http') ? "_blank" : "_self"}
        rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
        className="block group"
    >
        <div className={`relative overflow-hidden rounded-xl h-24 bg-gradient-to-r ${gradient} p-[1px] shadow-lg transition-transform duration-300 group-hover:scale-[1.02]`}>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            <div className="relative h-full w-full bg-gradient-to-r from-black/20 to-transparent flex items-center px-4">
                <div className="w-16 h-16 rounded-lg bg-black/20 backdrop-blur-sm shrink-0 overflow-hidden mr-4 border border-white/10 relative">
                    <Image src={icon} alt={title} fill className="object-cover" />
                </div>
                <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white leading-tight">{title}</h3>
                    {subtext && <p className="text-white/80 text-xs">{subtext}</p>}
                </div>
                <ExternalLink className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
            </div>
        </div>
    </motion.a>
);

export default LinksPage;
