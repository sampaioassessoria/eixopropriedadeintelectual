import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-4 text-center">
            <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse">
                404
            </h1>
            <h2 className="mt-4 text-3xl font-bold text-white mb-6">
                Página não encontrada
            </h2>
            <p className="text-gray-400 max-w-md mx-auto mb-8 text-lg">
                Desculpe, a página que você está procurando não existe ou foi movida.
            </p>

            <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-600/20"
            >
                <ArrowLeft className="w-5 h-5" />
                Voltar para o Início
            </Link>
        </div>
    );
}
