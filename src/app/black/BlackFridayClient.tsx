'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import {
    AlertTriangle,
    ArrowRight,
    BellRing,
    CheckCircle2,
    Clock,
    FileSearch,
    Layers,
    Percent,
    RefreshCcw,
    SearchX,
    Shield,
    Star,
    Store,
    XCircle,
    Zap,
} from 'lucide-react';
import { formatPhone } from '../../utils/masks';
import StatsSection from '../../components/StatsSection';
import TestimonialsStack from '../../components/TestimonialsStack';

// Condição da campanha. Para mudar o desconto ou as datas, altere só aqui.
const OFFER = {
    discount: 30,
    start: new Date('2026-11-17T00:00:00-03:00').getTime(),
    end: new Date('2026-11-30T23:59:59-03:00').getTime(),
    periodLabel: '17 a 30/11',
    endLabel: '30/11',
};

const WEBHOOK_URL = 'https://n8n.smpdev.site/webhook/75c86d88-3d63-43c5-ba19-8531323f28b2';

type Phase = 'before' | 'live' | 'ended';

type Countdown = {
    phase: Phase;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

// Calculado só no navegador, para o HTML do servidor não divergir do cliente.
function useCountdown(): Countdown | null {
    const [now, setNow] = useState<number | null>(null);

    useEffect(() => {
        const tick = () => setNow(Date.now());
        const first = setTimeout(tick, 0);
        const timer = setInterval(tick, 1000);
        return () => {
            clearTimeout(first);
            clearInterval(timer);
        };
    }, []);

    if (now === null) return null;

    const phase: Phase = now < OFFER.start ? 'before' : now <= OFFER.end ? 'live' : 'ended';
    const target = phase === 'before' ? OFFER.start : OFFER.end;
    const total = Math.max(0, Math.floor((target - now) / 1000));

    return {
        phase,
        days: Math.floor(total / 86400),
        hours: Math.floor((total % 86400) / 3600),
        minutes: Math.floor((total % 3600) / 60),
        seconds: total % 60,
    };
}

const scrollToForm = () => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
};

/* ---------- Peças ---------- */

const Digit = ({ value, unit }: { value: number | undefined; unit: string }) => {
    const text = value === undefined ? '--' : String(value).padStart(2, '0');
    return (
        <div className="w-[68px] md:w-20 py-2.5 rounded-xl bg-black/60 border border-white/10 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <div className="relative h-8 md:h-9 overflow-hidden">
                <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                        key={text}
                        initial={{ y: '-100%', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: '100%', opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        className="text-2xl md:text-3xl font-bold text-white tabular-nums leading-8 md:leading-9"
                    >
                        {text}
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider mt-0.5">{unit}</div>
        </div>
    );
};

const CountdownDisplay = ({ countdown }: { countdown: Countdown | null }) => {
    if (countdown?.phase === 'ended') {
        return (
            <p className="text-gray-300 text-sm md:text-base">
                A Black Friday da Eixo terminou. Você ainda pode pedir sua análise gratuita.
            </p>
        );
    }

    return (
        <div>
            <p className="flex items-center justify-center lg:justify-start gap-2 text-gray-400 text-xs uppercase tracking-[0.2em] mb-3">
                <Clock className="w-4 h-4 text-[#3b9bff]" aria-hidden="true" />
                {countdown?.phase === 'before' ? 'Começa em' : 'Termina em'}
            </p>
            <div className="flex justify-center lg:justify-start gap-2 md:gap-3" role="timer" aria-live="off">
                <Digit value={countdown?.days} unit="dias" />
                <Digit value={countdown?.hours} unit="horas" />
                <Digit value={countdown?.minutes} unit="min" />
                <Digit value={countdown?.seconds} unit="seg" />
            </div>
        </div>
    );
};

// Borda com brilho girando, usada nos cartões de destaque.
const SpinBorder = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <div className={`relative rounded-2xl p-px overflow-hidden ${className}`}>
        <div className="spin-border absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,#3b9bff_60deg,transparent_120deg,transparent_360deg)]" aria-hidden="true" />
        <div className="relative rounded-2xl bg-[#0a0d14] h-full">{children}</div>
    </div>
);

const TapeRow = ({ dark = false, reverse = false }: { dark?: boolean; reverse?: boolean }) => {
    const items = Array.from({ length: 8 }, (_, i) => (
        <span key={i} className="flex items-center gap-6 pr-6">
            <span>Black Friday Eixo</span>
            <span className={dark ? 'text-[#3b9bff]' : 'text-white'}>{OFFER.discount}% off</span>
            <span>Só até {OFFER.endLabel}</span>
            <Zap className="w-4 h-4 fill-current" aria-hidden="true" />
        </span>
    ));
    return (
        <div className={`py-3 overflow-hidden ${dark ? 'bg-white text-black' : 'bg-[#007bff] text-black'}`}>
            <div
                className={`ticker-track flex w-max font-extrabold uppercase tracking-wider text-sm md:text-base whitespace-nowrap ${reverse ? 'ticker-reverse' : ''}`}
            >
                {items}
                {items}
            </div>
        </div>
    );
};

const Tapes = () => (
    <div className="relative h-36 md:h-44 bg-[#050505] overflow-hidden" aria-hidden="true">
        <div className="absolute left-[-10%] right-[-10%] top-1/2 -translate-y-1/2 rotate-[-3deg] shadow-2xl z-10">
            <TapeRow />
        </div>
        <div className="absolute left-[-10%] right-[-10%] top-1/2 -translate-y-1/2 rotate-[3deg] opacity-90">
            <TapeRow dark reverse />
        </div>
    </div>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-flex items-center gap-2 text-[#3b9bff] text-xs md:text-sm uppercase tracking-[0.2em] font-semibold">
        <span className="h-px w-6 bg-[#3b9bff]" aria-hidden="true" />
        {children}
        <span className="h-px w-6 bg-[#3b9bff]" aria-hidden="true" />
    </span>
);

/* ---------- Conteúdo ---------- */

const RISKS = [
    {
        icon: RefreshCcw,
        title: 'Você pode ter que trocar de nome',
        text: 'Quem registra primeiro passa a ter o uso exclusivo da marca. Você pode ser obrigado a abandonar o nome que construiu.',
    },
    {
        icon: Store,
        title: 'Fachada, site e redes refeitos do zero',
        text: 'Placa, embalagens, domínio, perfil no Instagram. Tudo o que leva o nome antigo precisa mudar, e isso custa caro.',
    },
    {
        icon: BellRing,
        title: 'Notificação para parar de usar',
        text: 'O dono do registro pode exigir que você pare de usar a marca e ainda cobrar pelo uso indevido.',
    },
    {
        icon: SearchX,
        title: 'Clientes procurando você e achando outro',
        text: 'Anos de reputação ficam com quem registrou. Seus clientes passam a encontrar outra empresa com o seu nome.',
    },
];

const WITHOUT = [
    'Qualquer um pode registrar o seu nome antes',
    'Sem base legal para impedir cópias',
    'Risco de trocar de nome depois de anos',
    'Sem segurança para vender, licenciar ou franquear',
];

const WITH = [
    'Uso exclusivo da marca em todo o Brasil',
    'Respaldo legal para agir contra cópias',
    'Análise de viabilidade antes de investir',
    'A marca vira um ativo que valoriza a empresa',
];

const BENEFITS = [
    {
        icon: FileSearch,
        title: 'Você só investe se a marca tiver chance',
        text: 'A análise gratuita mostra a viabilidade da sua marca antes de qualquer pedido.',
    },
    {
        icon: Percent,
        title: `${OFFER.discount}% menos nos honorários`,
        text: 'O mesmo serviço completo da Eixo, com desconto direto até 30/11.',
    },
    {
        icon: Zap,
        title: 'Pedido no INPI em até 48h',
        text: 'Protocolamos o seu processo em até 48 horas após o pagamento da taxa do INPI.',
    },
];

const STEPS = [
    {
        title: 'Análise gratuita',
        text: 'Você envia seus dados e nossa equipe verifica se a sua marca pode ser registrada.',
    },
    {
        title: 'Pedido no INPI',
        text: `Com ${OFFER.discount}% de desconto nos honorários, protocolamos em até 48h após a taxa do INPI.`,
    },
    {
        title: 'Acompanhamento',
        text: 'Cuidamos de cada etapa do processo até a decisão do INPI.',
    },
];

const FAQ = [
    {
        q: 'O desconto vale para quê?',
        a: 'Para os honorários da Eixo no registro de marca, patente, software e desenho industrial. As taxas oficiais do INPI são cobradas à parte, como em qualquer escritório.',
    },
    {
        q: 'Até quando vale a condição?',
        a: 'De 17 a 30 de novembro de 2026, até 23h59 (horário de Brasília). Depois disso, os honorários voltam ao valor normal.',
    },
    {
        q: 'E se a minha marca não puder ser registrada?',
        a: 'É para isso que serve a análise gratuita: ela mostra a viabilidade da marca antes de você contratar. Se houver risco, avisamos antes de você investir.',
    },
    {
        q: 'A Eixo garante que minha marca será aprovada?',
        a: 'Não. Quem decide é o INPI, e nenhum escritório sério pode prometer o deferimento. O que fazemos é a análise de viabilidade antes do pedido, para você entrar com mais segurança e menos risco de indeferimento.',
    },
    {
        q: 'Em quanto tempo o pedido é protocolado?',
        a: 'Em até 48 horas após o pagamento da taxa do INPI. Depois, acompanhamos tudo até a decisão.',
    },
];

/* ---------- Página ---------- */

export default function BlackFridayClient() {
    const countdown = useCountdown();
    const ended = countdown?.phase === 'ended';

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        marca: '',
    });
    const [sending, setSending] = useState(false);

    // Barra fixa no celular aparece quando o formulário sai da tela.
    const { ref: formRef, inView: formInView } = useInView({ initialInView: true });
    const { ref: finalRef, inView: finalInView } = useInView();
    const showStickyBar = !formInView && !finalInView;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);
        try {
            await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formState, origem: 'black-friday-2026' }),
            });
        } catch (error) {
            console.error('Error sending data to webhook:', error);
        }
        window.location.href = '/obrigado';
    };

    const inputClass =
        'w-full bg-white/[0.04] text-gray-100 px-4 py-3.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#3b9bff] focus:ring-2 focus:ring-[#3b9bff]/30 placeholder-gray-500 transition-colors';

    return (
        <div className="bg-[#050505]">
            {/* ===== Hero ===== */}
            <section id="home" className="relative min-h-screen flex flex-col pt-28 pb-20 lg:pb-16 z-20 overflow-hidden">
                <div
                    className="absolute inset-0 pointer-events-none opacity-[0.07]"
                    style={{
                        backgroundImage:
                            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
                        backgroundSize: '56px 56px',
                        maskImage: 'radial-gradient(ellipse at 30% 40%, black 30%, transparent 75%)',
                        WebkitMaskImage: 'radial-gradient(ellipse at 30% 40%, black 30%, transparent 75%)',
                    }}
                    aria-hidden="true"
                />
                <div className="blob-a absolute -left-[15%] top-[5%] w-[75vw] md:w-[45vw] h-[75vw] md:h-[45vw] bg-[#007bff]/30 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
                <div className="blob-b absolute right-[-10%] bottom-[-5%] w-[55vw] md:w-[32vw] h-[55vw] md:h-[32vw] bg-[#3b9bff]/15 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
                {/* Marca d'água */}
                <div
                    className="absolute right-[-4%] top-[8%] text-[38vw] md:text-[26vw] font-black leading-none text-transparent [-webkit-text-stroke:1px_rgba(59,155,255,0.12)] select-none pointer-events-none hidden lg:block"
                    aria-hidden="true"
                >
                    {OFFER.discount}%
                </div>

                <div className="flex-grow flex items-center relative z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            {/* Coluna da promessa */}
                            <div className="lg:col-span-7 text-center lg:text-left">
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#3b9bff]/30 bg-[#007bff]/10 text-[11px] md:text-sm font-semibold uppercase tracking-[0.04em] md:tracking-[0.14em] text-white mb-7"
                                >
                                    <span className="relative flex w-2 h-2" aria-hidden="true">
                                        <span className="absolute inline-flex h-full w-full rounded-full bg-[#3b9bff] opacity-75 animate-ping" />
                                        <span className="relative inline-flex w-2 h-2 rounded-full bg-[#3b9bff]" />
                                    </span>
                                    <span>
                                        Black Friday · <span className="hidden sm:inline">Registro de marca</span>
                                        <span className="sm:hidden">Marca</span> com {OFFER.discount}% off
                                    </span>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="text-4xl md:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-5"
                                >
                                    Blinde a sua marca{' '}
                                    <span className="bg-gradient-to-r from-[#3b9bff] to-[#8cc8ff] bg-clip-text text-transparent">
                                        antes que alguém registre primeiro.
                                    </span>
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed"
                                >
                                    Se outra empresa registrar antes de você, ela passa a ter o uso exclusivo do nome.
                                    Você pode ser obrigado a trocar de marca e refazer fachada, site e redes sociais,
                                    depois de anos conquistando clientes.
                                </motion.p>

                                <ul className="space-y-2.5 max-w-xl mx-auto lg:mx-0 mb-8 text-left w-fit">
                                    {[
                                        'Você só investe se a marca tiver chance',
                                        'Pedido no INPI em até 48h após a taxa',
                                        'Acompanhamento até a decisão do INPI',
                                    ].map((item, i) => (
                                        <motion.li
                                            key={item}
                                            initial={{ opacity: 0, x: -16 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                                            className="flex items-center gap-3 text-gray-200"
                                        >
                                            <CheckCircle2 className="w-5 h-5 text-[#3b9bff] shrink-0" aria-hidden="true" />
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* Oferta: o motivo para fazer agora */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    className="max-w-xl mx-auto lg:mx-0 mb-8"
                                >
                                    <SpinBorder>
                                        <div className="p-5 md:p-6 text-center lg:text-left bg-gradient-to-br from-[#007bff]/[0.12] to-transparent rounded-2xl">
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start gap-x-4 gap-y-1 mb-4">
                                                <span className="text-4xl md:text-5xl font-black text-white leading-none">
                                                    {OFFER.discount}% OFF
                                                </span>
                                                <span className="text-gray-300 text-sm md:text-base leading-snug">
                                                    nos honorários na Black Friday.
                                                    <br className="hidden sm:block" /> A mesma segurança,{' '}
                                                    {OFFER.discount}% menos.
                                                </span>
                                            </div>
                                            <div className="min-h-[92px]">
                                                <CountdownDisplay countdown={countdown} />
                                            </div>
                                            <p className="text-xs text-gray-500 mt-3">
                                                Vale para marca, patente, software e desenho industrial. Taxas do INPI à
                                                parte.
                                            </p>
                                        </div>
                                    </SpinBorder>
                                </motion.div>

                                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-lg flex items-center" aria-label="Google">
                                            <span className="text-blue-400">G</span>
                                            <span className="text-red-500">o</span>
                                            <span className="text-yellow-400">o</span>
                                            <span className="text-blue-400">g</span>
                                            <span className="text-green-500">l</span>
                                            <span className="text-red-500">e</span>
                                        </span>
                                        <div className="flex space-x-0.5" aria-label="5 estrelas">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-gray-400 text-sm max-w-sm text-center sm:text-left leading-snug">
                                        <strong className="text-white">+ de 1.500 marcas registradas</strong> e + de 400
                                        startups protegidas. Consultoria com o sócio fundador Guilherme Stefanello.
                                    </p>
                                </div>
                            </div>

                            {/* Formulário */}
                            <div className="lg:col-span-5" ref={formRef}>
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    <SpinBorder className="shadow-[0_0_80px_rgba(0,123,255,0.18)]">
                                        <div className="p-5 md:p-8">
                                            <div className="text-center mb-6">
                                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#007bff] text-white text-xs font-bold uppercase tracking-wider mb-3">
                                                    <Percent className="w-3.5 h-3.5" aria-hidden="true" />
                                                    {ended ? 'Análise gratuita' : `${OFFER.discount}% off até ${OFFER.endLabel}`}
                                                </div>
                                                <h2 className="text-xl md:text-2xl font-bold text-white">
                                                    Descubra se a sua marca pode ser registrada
                                                </h2>
                                                <p className="text-gray-400 text-sm mt-1">
                                                    Análise gratuita e sem compromisso com a nossa equipe.
                                                </p>
                                            </div>

                                            <form className="space-y-3.5" onSubmit={handleSubmit}>
                                                <input
                                                    required
                                                    type="text"
                                                    name="marca"
                                                    aria-label="Qual marca você quer registrar?"
                                                    value={formState.marca}
                                                    onChange={(e) => setFormState({ ...formState, marca: e.target.value })}
                                                    placeholder="Qual marca você quer registrar?"
                                                    className={`${inputClass} border-[#3b9bff]/40`}
                                                />
                                                <input
                                                    required
                                                    type="text"
                                                    name="name"
                                                    aria-label="Seu nome"
                                                    value={formState.name}
                                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                                    placeholder="Seu nome"
                                                    className={inputClass}
                                                />
                                                <input
                                                    required
                                                    type="email"
                                                    name="email"
                                                    aria-label="Email"
                                                    value={formState.email}
                                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                                    placeholder="digiteaqui@seuemail.com"
                                                    className={inputClass}
                                                />
                                                <input
                                                    required
                                                    type="tel"
                                                    name="phone"
                                                    aria-label="Telefone (WhatsApp)"
                                                    value={formState.phone}
                                                    onChange={(e) =>
                                                        setFormState({ ...formState, phone: formatPhone(e.target.value) })
                                                    }
                                                    maxLength={15}
                                                    placeholder="WhatsApp: (DD) 99999-9999"
                                                    className={inputClass}
                                                />
                                                <input
                                                    required
                                                    type="text"
                                                    name="company"
                                                    aria-label="Nome da sua empresa"
                                                    value={formState.company}
                                                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                                                    placeholder="Nome da sua empresa"
                                                    className={inputClass}
                                                />

                                                <button
                                                    type="submit"
                                                    disabled={sending}
                                                    className="cta-shine relative overflow-hidden w-full bg-[#007bff] hover:bg-[#2b8cff] disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-colors text-base mt-2 inline-flex items-center justify-center gap-2 shadow-[0_8px_30px_rgba(0,123,255,0.35)]"
                                                >
                                                    {sending ? 'Enviando...' : 'Quero analisar minha marca grátis'}
                                                    {!sending && <ArrowRight className="w-5 h-5" aria-hidden="true" />}
                                                </button>

                                                <p className="text-[10px] text-gray-500 text-center leading-tight pt-1">
                                                    De acordo com as Leis 12.965/2014 e 13.709/2018, que regulam o uso da
                                                    Internet e o tratamento de dados pessoais no Brasil, autorizo Eixo
                                                    Propriedade Intelectual a enviar notificações por e-mail ou outros
                                                    meios e concordo com sua Política de Privacidade.
                                                </p>

                                                <div className="flex items-center justify-center space-x-2 pt-1 text-gray-400">
                                                    <Shield className="w-4 h-4 text-white" aria-hidden="true" />
                                                    <span className="text-sm font-medium text-white">Site Blindado</span>
                                                    <span className="text-sm">|</span>
                                                    <span className="text-sm text-gray-400">100% seguro!</span>
                                                </div>
                                            </form>
                                        </div>
                                    </SpinBorder>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Tapes />

            {/* ===== Faixa de oferta ===== */}
            <section className="py-24 relative overflow-hidden border-t border-white/5">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[50vw] h-[40vw] md:h-[25vw] bg-[#007bff]/25 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
                        <p className="text-gray-400 uppercase tracking-[0.25em] text-xs md:text-sm mb-4">
                            Só de {OFFER.periodLabel}
                        </p>
                        <motion.div
                            initial={{ scale: 0.85, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: 'spring', stiffness: 120, damping: 14 }}
                            className="text-7xl md:text-9xl font-black text-white leading-none mb-4"
                        >
                            {OFFER.discount}%
                            <span className="text-transparent [-webkit-text-stroke:2px_#3b9bff] ml-3">OFF</span>
                        </motion.div>
                        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                            A mesma segurança de sempre para registrar sua marca, patente ou software, com {OFFER.discount}%
                            menos nos honorários.
                        </p>
                        <button
                            onClick={scrollToForm}
                            className="cta-shine relative overflow-hidden bg-[#007bff] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#2b8cff] transition-colors shadow-[0_0_40px_rgba(0,123,255,0.4)] inline-flex items-center gap-2"
                        >
                            Quero meus {OFFER.discount}% off <ArrowRight className="w-5 h-5" aria-hidden="true" />
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* ===== O risco ===== */}
            <section className="py-20 md:py-28 relative overflow-hidden">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[70vw] h-[30vw] bg-red-500/[0.06] rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-14">
                        <span className="inline-flex items-center gap-2 text-red-400 text-xs md:text-sm uppercase tracking-[0.2em] font-semibold">
                            <AlertTriangle className="w-4 h-4" aria-hidden="true" />
                            O risco de esperar
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 leading-tight">
                            O que acontece se alguém registrar a sua marca antes de você
                        </h2>
                        <p className="text-gray-400 text-lg mt-5">
                            No Brasil, a marca é de quem registra primeiro no INPI, não de quem usa há mais tempo.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {RISKS.map((risk, i) => (
                            <motion.div
                                key={risk.title}
                                {...fadeUp}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="group relative rounded-2xl p-7 bg-white/[0.03] border border-white/10 hover:border-red-400/40 hover:bg-white/[0.05] transition-all duration-300 overflow-hidden"
                            >
                                <span className="absolute right-5 top-3 text-6xl font-black text-white/[0.04] group-hover:text-red-400/10 transition-colors" aria-hidden="true">
                                    0{i + 1}
                                </span>
                                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 mb-5">
                                    <risk.icon size={22} strokeWidth={1.75} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{risk.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{risk.text}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        {...fadeUp}
                        transition={{ duration: 0.6 }}
                        className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-3xl bg-white p-6 md:p-10"
                    >
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-black leading-tight mb-3">
                                Não é exagero. Acontece de verdade.
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Disputas por marca viram notícia com empresas de todos os tamanhos. Quem não tem o registro
                                quase sempre sai perdendo.
                            </p>
                            <button
                                onClick={scrollToForm}
                                className="bg-black text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[#007bff] transition-colors inline-flex items-center gap-2"
                            >
                                Proteger minha marca agora <ArrowRight className="w-4 h-4" aria-hidden="true" />
                            </button>
                        </div>
                        <Image
                            src="/imagem noticias.png"
                            alt="Manchetes de notícias sobre disputas de marca"
                            width={1042}
                            height={531}
                            className="w-full h-auto rounded-xl"
                        />
                    </motion.div>
                </div>
            </section>

            {/* ===== Sem registro x Com a Eixo ===== */}
            <section className="py-20 md:py-24 border-t border-white/5">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-12">
                        <SectionLabel>A diferença</SectionLabel>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">Sem registro × com a Eixo</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <motion.div
                            {...fadeUp}
                            transition={{ duration: 0.5 }}
                            className="rounded-2xl p-7 md:p-8 bg-white/[0.02] border border-white/10"
                        >
                            <p className="text-gray-400 font-semibold uppercase tracking-wider text-sm mb-6">Sem registro</p>
                            <ul className="space-y-4">
                                {WITHOUT.map((item) => (
                                    <li key={item} className="flex gap-3 text-gray-400">
                                        <XCircle className="w-5 h-5 text-red-400/80 shrink-0 mt-0.5" aria-hidden="true" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
                            <SpinBorder className="h-full">
                                <div className="p-7 md:p-8 h-full bg-gradient-to-br from-[#007bff]/15 to-transparent rounded-2xl">
                                    <p className="text-[#3b9bff] font-semibold uppercase tracking-wider text-sm mb-6">
                                        Com a Eixo
                                    </p>
                                    <ul className="space-y-4">
                                        {WITH.map((item) => (
                                            <li key={item} className="flex gap-3 text-white">
                                                <CheckCircle2 className="w-5 h-5 text-[#3b9bff] shrink-0 mt-0.5" aria-hidden="true" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </SpinBorder>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== O que você leva ===== */}
            <section className="py-20 md:py-24 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-14">
                        <SectionLabel>A oferta</SectionLabel>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">O que você leva na Black Friday</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {BENEFITS.map((item, i) => (
                            <motion.div
                                key={item.title}
                                {...fadeUp}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                whileHover={{ y: -6 }}
                                className="rounded-2xl p-7 bg-white/[0.03] border border-white/10 hover:border-[#3b9bff]/50 hover:shadow-[0_0_40px_rgba(0,123,255,0.15)] transition-[border-color,box-shadow] duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#007bff]/15 flex items-center justify-center text-[#3b9bff] mb-5">
                                    <item.icon size={22} strokeWidth={1.75} />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 leading-snug">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div
                        {...fadeUp}
                        transition={{ duration: 0.5 }}
                        className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm"
                    >
                        <Layers className="w-4 h-4 text-[#3b9bff]" aria-hidden="true" />
                        <span className="text-gray-400">A mesma condição vale para</span>
                        {['Registro de software', 'Desenho industrial'].map((t) => (
                            <span key={t} className="px-3 py-1 rounded-full border border-white/15 text-gray-200">
                                {t}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ===== Como funciona ===== */}
            <section className="py-20 md:py-24 border-t border-white/5">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-14">
                        <SectionLabel>Como funciona</SectionLabel>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">Três passos até a sua marca protegida</h2>
                    </motion.div>
                    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: 'easeInOut' }}
                            className="hidden md:block absolute top-7 left-[16%] right-[16%] h-px bg-gradient-to-r from-[#007bff] via-[#3b9bff] to-[#007bff] origin-left"
                            aria-hidden="true"
                        />
                        {STEPS.map((step, i) => (
                            <motion.div
                                key={step.title}
                                {...fadeUp}
                                transition={{ duration: 0.5, delay: 0.2 + i * 0.25 }}
                                className="relative text-center px-4"
                            >
                                <div className="relative z-10 mx-auto w-14 h-14 rounded-full bg-[#050505] border-2 border-[#3b9bff] flex items-center justify-center text-xl font-bold text-white mb-5 shadow-[0_0_30px_rgba(0,123,255,0.35)]">
                                    {i + 1}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-gray-400 leading-relaxed max-w-xs mx-auto">{step.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Provas ===== */}
            <StatsSection />
            <TestimonialsStack />

            {/* ===== Perguntas ===== */}
            <section className="py-24">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-12">
                        <SectionLabel>Dúvidas</SectionLabel>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">Perguntas sobre a oferta</h2>
                    </motion.div>
                    <div className="space-y-3">
                        {FAQ.map((item) => (
                            <details
                                key={item.q}
                                className="group rounded-xl border border-white/10 bg-white/[0.03] open:border-[#3b9bff]/40 open:bg-[#007bff]/[0.05] transition-colors"
                            >
                                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 text-white font-semibold [&::-webkit-details-marker]:hidden">
                                    {item.q}
                                    <span className="text-[#3b9bff] text-2xl leading-none transition-transform duration-200 group-open:rotate-45" aria-hidden="true">
                                        +
                                    </span>
                                </summary>
                                <p className="px-6 pb-5 text-gray-400 leading-relaxed">{item.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA final ===== */}
            <section ref={finalRef} className="py-24 md:py-28 bg-[#007bff] relative overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none opacity-30 mix-blend-overlay" aria-hidden="true">
                    <Image src="/sobreposicao_bg.png" alt="" fill sizes="100vw" className="object-contain" />
                </div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Dia {OFFER.endLabel} o desconto acaba.
                            <br />
                            <span className="text-black/80">
                                O risco de alguém registrar sua marca primeiro, não.
                            </span>
                        </h2>
                        <p className="text-blue-50 text-lg mb-10 max-w-2xl mx-auto">
                            Descubra hoje se a sua marca pode ser registrada, com análise gratuita e {OFFER.discount}% de
                            desconto nos honorários.
                        </p>
                        <button
                            onClick={scrollToForm}
                            className="bg-[#050505] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-black transition-all duration-300 shadow-lg hover:-translate-y-1 inline-flex items-center gap-2"
                        >
                            Quero analisar minha marca grátis <ArrowRight className="w-5 h-5" aria-hidden="true" />
                        </button>
                        <p className="text-blue-100/80 text-xs mt-10">
                            Desconto de {OFFER.discount}% sobre os honorários da Eixo, válido de 17 a 30/11/2026. Taxas do
                            INPI à parte.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ===== Barra fixa no celular ===== */}
            <AnimatePresence>
                {showStickyBar && (
                    <motion.div
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        exit={{ y: 100 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 28 }}
                        className="lg:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-[#050505]/95 backdrop-blur border-t border-white/10"
                    >
                        <button
                            onClick={scrollToForm}
                            className="w-full bg-[#007bff] text-white font-bold py-3.5 rounded-xl inline-flex items-center justify-center gap-2"
                        >
                            {ended ? 'Analisar minha marca grátis' : `${OFFER.discount}% off · Analisar minha marca grátis`}
                            <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                .ticker-track { animation: tickerScroll 40s linear infinite; }
                .ticker-reverse { animation-direction: reverse; }
                @keyframes tickerScroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                .spin-border { animation: spinBorder 6s linear infinite; }
                @keyframes spinBorder { to { transform: rotate(360deg); } }
                .blob-a { animation: blobA 14s ease-in-out infinite alternate; }
                .blob-b { animation: blobB 18s ease-in-out infinite alternate; }
                @keyframes blobA { to { transform: translate(8vw, 6vh) scale(1.1); } }
                @keyframes blobB { to { transform: translate(-6vw, -8vh) scale(1.15); } }
                .cta-shine::after {
                    content: '';
                    position: absolute;
                    top: 0; left: -60%;
                    width: 40%; height: 100%;
                    background: linear-gradient(100deg, transparent, rgba(255,255,255,0.35), transparent);
                    transform: skewX(-20deg);
                    animation: shine 3.5s ease-in-out infinite;
                }
                @keyframes shine {
                    0%, 60% { left: -60%; }
                    100% { left: 130%; }
                }
                @media (prefers-reduced-motion: reduce) {
                    .ticker-track, .spin-border, .blob-a, .blob-b, .cta-shine::after { animation: none; }
                }
            `}</style>
        </div>
    );
}
