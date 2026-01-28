'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

// This data would typically be passed from the server component
// creating a client component wrapper for the interactive parts
type Post = {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    category: string;
    coverImage?: string;
};

const CATEGORIES = [
    'Todas',
    'Novidades',
    'Software',
    'Direitos Autorais',
    'Patentes',
    'Infoproduto',
    'Marcas nacionais e Internacionais',
    'Desenho Empresarial',
    'Desenhos Industriais'
];

export default function BlogClient({ posts }: { posts: Post[] }) {
    const [selectedCategory, setSelectedCategory] = useState('Todas');

    const filteredPosts = selectedCategory === 'Todas'
        ? posts
        : posts.filter(post => post.category === selectedCategory);

    return (
        <div className="min-h-screen bg-[#111111] text-white pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        Nossos Artigos
                    </h1>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed mb-12">
                        Acompanhe nossas atualizações sobre propriedade intelectual, inovação e proteção de marcas e patentes.
                    </p>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {CATEGORIES.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={clsx(
                                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                                    selectedCategory === category
                                        ? "bg-[#007bff] border-[#007bff] text-white shadow-lg shadow-blue-500/25"
                                        : "bg-[#1a1a1a] border-gray-800 text-gray-400 hover:border-gray-600 hover:text-white"
                                )}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredPosts.map(({ slug, date, title, excerpt, coverImage, category }) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={slug}
                            >
                                <Link href={`/blog/${slug}`} className="group h-full block">
                                    <article className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-800 hover:border-gray-700 h-full flex flex-col">
                                        <div className="relative h-56 w-full overflow-hidden">
                                            {coverImage ? (
                                                <Image
                                                    src={coverImage}
                                                    alt={title}
                                                    fill
                                                    className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gradient-to-br from-[#1480c8] to-[#65bdf8] flex items-center justify-center">
                                                    <span className="text-4xl text-white opacity-50">📝</span>
                                                </div>
                                            )}
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-[#007bff]/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                                                    {category || 'Geral'}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-8 flex-1 flex flex-col">
                                            <div className="flex items-center text-sm text-blue-400 mb-4 font-medium">
                                                <time dateTime={date}>{new Date(date).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
                                            </div>
                                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#65bdf8] transition-colors leading-tight">
                                                {title}
                                            </h3>
                                            <p className="text-gray-400 line-clamp-3 mb-6 flex-1 leading-relaxed">
                                                {excerpt}
                                            </p>
                                            <span className="inline-flex items-center text-[#65bdf8] font-semibold group-hover:translate-x-1 transition-transform uppercase tracking-wider text-sm">
                                                Ler artigo <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                            </span>
                                        </div>
                                    </article>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredPosts.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20 bg-[#1a1a1a] rounded-xl border border-gray-800 border-dashed"
                    >
                        <h3 className="text-2xl font-bold text-gray-300 mb-2">Nenhum post encontrado</h3>
                        <p className="text-gray-400">Não há artigos nesta categoria no momento.</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
