'use client';

import React from 'react';
import { Instagram, Linkedin, ArrowUp } from 'lucide-react';
import Image from 'next/image';

const Footer: React.FC = () => {
  const currentYear = 2026;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white relative overflow-hidden pt-20 md:pt-32 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16 md:mb-32">
          {/* Left Column - Logo, Address and Copyright */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full min-h-[300px]">
            <div className="space-y-8">
              <Image
                src="/logo principal.png"
                alt="Eixo Intelectual Logo"
                width={150}
                height={40}
                className="h-8 w-auto mb-4"
              />

              <div>
                <h4 className="text-[#4a5568] text-lg font-medium mb-4">Endereço</h4>
                <p className="text-gray-400 leading-relaxed max-w-xs text-sm">
                  Edifício Somma Tower - R. Dr. Carlos Corrêa, 141 - Sala 503 - Agronômica, Florianópolis - SC, 88025-250
                </p>
              </div>
            </div>

            <div className="text-gray-500 text-xs mt-8 lg:mt-0">
              © {currentYear} Copyright - Eixo Propriedade Intelectual
            </div>
          </div>

          {/* Middle Column - Contact */}
          <div className="lg:col-span-4 space-y-12 pt-2">
            <div>
              <h4 className="text-[#4a5568] text-lg font-medium mb-4">Email</h4>
              <a href="mailto:contato@eixointelectual.com.br" className="text-gray-300 hover:text-white transition-colors text-sm block">
                contato@eixointelectual.com.br
              </a>
            </div>
            <div>
              <h4 className="text-[#4a5568] text-lg font-medium mb-4">Telefone</h4>
              <a href="tel:+5548988364246" className="text-gray-300 hover:text-white transition-colors text-sm block">
                +55 (48) 98836-4246
              </a>
            </div>
          </div>

          {/* Right Column - Social Icons and Back to Home */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full min-h-[300px] items-start lg:items-end pt-2">
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/eixointelectual/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                title="Instagram"
                aria-label="Instagram Eixo Intelectual"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/eixo-propriedade-intelectual/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                title="LinkedIn"
                aria-label="LinkedIn Eixo Intelectual"
              >
                <Linkedin size={20} />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center text-gray-400 hover:text-white text-sm transition-colors group mt-8 lg:mt-0"
              aria-label="Voltar para o topo"
            >
              Voltar para o topo
              <ArrowUp size={16} className="ml-2 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Giant Logo Background - Centered */}
      <div className="w-full flex justify-center items-end pb-0">
        <Image
          src="/logo-rodape.svg"
          alt="Eixo Intelectual Background"
          width={1200}
          height={400}
          className="w-[90%] md:w-[80%] max-w-7xl h-auto opacity-100 select-none pb-0"
        />
      </div>
    </footer>
  );
};

export default Footer;
