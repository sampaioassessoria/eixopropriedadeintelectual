import { getAllPostIds, getPostData } from '../../../lib/posts';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export async function generateStaticParams() {
    const paths = getAllPostIds();
    return paths.map((path) => ({
        slug: path.params.slug,
    }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const postData = await getPostData(slug);

    return (
        <div className="min-h-screen bg-[#111111] text-white pt-32 pb-20">
            <article className="max-w-4xl mx-auto px-4">
                {/* Header */}
                <header className="mb-12 text-center">
                    <Link href="/blog" className="inline-flex items-center text-[#65bdf8] hover:text-[#1480c8] mb-8 transition-colors font-medium">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Voltar para o Blog
                    </Link>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                        {postData.title}
                    </h1>

                    <div className="flex items-center justify-center text-gray-400 space-x-4">
                        {postData.category && (
                            <span className="bg-[#007bff]/10 border border-[#007bff]/20 px-4 py-1.5 rounded-full text-sm font-bold text-[#007bff] uppercase tracking-wider">
                                {postData.category}
                            </span>
                        )}
                        <time dateTime={postData.date} className="bg-[#1a1a1a] border border-gray-800 px-4 py-1.5 rounded-full text-sm font-medium text-blue-400">
                            {new Date(postData.date).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </time>
                    </div>
                </header>

                {/* Cover Image */}
                {postData.coverImage && (
                    <div className="relative w-full aspect-video mb-12 rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
                        <Image
                            src={postData.coverImage}
                            alt={postData.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                {/* Content */}
                <div
                    className="prose prose-lg prose-invert max-w-none 
            prose-headings:text-white prose-headings:font-bold 
            prose-p:text-gray-300 prose-p:leading-relaxed
            prose-a:text-[#65bdf8] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white
            prose-code:text-[#65bdf8] prose-code:bg-[#1a1a1a] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-[#1a1a1a] prose-pre:border prose-pre:border-gray-800
            prose-blockquote:border-l-[#007bff] prose-blockquote:bg-[#1a1a1a]/50 prose-blockquote:py-3 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:text-gray-300
            prose-img:rounded-xl prose-img:shadow-lg prose-img:border prose-img:border-gray-800
            prose-li:text-gray-300 prose-ul:marker:text-[#007bff] prose-ol:marker:text-[#007bff]"
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }}
                />

                {/* Footer */}
                <footer className="mt-20 pt-12 border-t border-gray-800 text-center">
                    <div className="p-10 bg-[#1a1a1a] rounded-2xl border border-gray-800">
                        <h3 className="text-2xl font-bold mb-3 text-white">Gostou deste artigo?</h3>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Compartilhe com seus amigos ou entre em contato para saber mais sobre nossos serviços.</p>
                        <Link href="/fale-conosco" className="inline-block bg-[#007bff] hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-lg transition-colors shadow-lg hover:shadow-blue-500/20 uppercase tracking-wide text-sm">
                            Fale Conosco
                        </Link>
                    </div>
                </footer>
            </article>
        </div>
    );
}
