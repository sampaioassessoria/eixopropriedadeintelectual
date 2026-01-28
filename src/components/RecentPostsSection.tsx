'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Copied interface from BlogClient or imported if shared
interface Post {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    category: string;
    coverImage?: string;
}

export default function RecentPostsSection({ posts }: { posts: Post[] }) {
    return (
        <section className="py-20 bg-[#111111] relative overflow-hidden">
            {/* Background Element */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Últimas do <span className="text-[#007bff]">Blog</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-xl">
                            Fique por dentro das novidades sobre propriedade intelectual, inovação e estratégias de negócios.
                        </p>
                    </div>
                    <Link
                        href="/blog"
                        className="inline-flex items-center px-6 py-3 bg-[#1a1a1a] hover:bg-[#252525] border border-gray-800 hover:border-blue-500/50 text-white rounded-full font-medium transition-all duration-300 group"
                    >
                        Ver todos os artigos
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform text-[#007bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {posts.map(({ slug, date, title, excerpt, coverImage, category }, index) => (
                        <motion.div
                            key={slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={`/blog/${slug}`} className="group h-full block">
                                <article className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-800 hover:border-blue-500/50 h-full flex flex-col">
                                    <div className="relative h-48 w-full overflow-hidden">
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
                                        <div className="absolute top-3 left-3">
                                            <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded border border-white/10 uppercase tracking-widest">
                                                {category || 'Geral'}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-5 flex-1 flex flex-col">
                                        <div className="flex items-center text-xs text-blue-400 mb-3 font-medium">
                                            <time dateTime={date}>{new Date(date).toLocaleDateString('pt-BR', { day: 'numeric', month: 'short', year: 'numeric' })}</time>
                                        </div>
                                        <h3 className="text-lg font-bold mb-3 text-white group-hover:text-[#65bdf8] transition-colors leading-tight line-clamp-2">
                                            {title}
                                        </h3>
                                        <p className="text-gray-400 text-sm line-clamp-3 mb-4 flex-1 leading-relaxed">
                                            {excerpt}
                                        </p>
                                        <span className="inline-flex items-center text-[#65bdf8] font-semibold text-xs uppercase tracking-wider group/link">
                                            Ler mais <span className="group-hover/link:translate-x-1 transition-transform ml-1">→</span>
                                        </span>
                                    </div>
                                </article>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
