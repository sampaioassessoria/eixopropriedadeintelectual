import Link from 'next/link';

export default function ThankYou() {
    return (
        <div className="relative min-h-[calc(100vh-200px)] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#1a9cea] via-[#2b90e9] to-[#bfdbfe]">
            {/* Grid Pattern Overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
                    backgroundSize: '40px 40px',
                    maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                    transform: 'perspective(500px) rotateX(60deg) translateY(100px) scale(2)',
                    transformOrigin: 'bottom center',
                    opacity: 0.5
                }}
            ></div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-black mb-8 leading-tight">
                    Sua solicitação de análise de<br />
                    marca foi concluída com<br />
                    sucesso!
                </h1>

                <p className="text-gray-800 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                    Assim que possível, nossa equipe entrará em contato com você<br />
                    para agendarmos a análise.
                </p>

                <Link
                    href="/"
                    className="inline-block px-12 py-4 bg-blue-100/80 hover:bg-white text-blue-600 font-semibold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transform hover:-translate-y-1 backdrop-blur-sm"
                >
                    Voltar para o Inicio
                </Link>
            </div>
        </div>
    );
}
