'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'A Eixo' },
    { id: 'recursos', label: 'Serviços' },
    { id: 'beneficios', label: 'Vantagens' },
    { id: 'como-funciona', label: 'Como Funciona?' },
    { id: 'blog', label: 'Blog' }
  ];

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle initial hash navigation when landing on home
  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [pathname]);


  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);

    if (sectionId === 'blog') {
      router.push('/blog');
      return;
    }

    if (pathname !== '/') {
      router.push(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    if (pathname.startsWith('/blog')) {
      setActiveSection('blog');
    }
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img
                src="/logo principal.png"
                alt="Eixo Intelectual"
                className="h-8 md:h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 relative group py-2 ${activeSection === item.id
                  ? 'text-white'
                  : 'text-gray-300 hover:text-white'
                  }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all duration-300 ${activeSection === item.id ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-50 group-hover:opacity-100 group-hover:scale-x-100'
                  }`} />
              </button>
            ))}

            <button className="flex items-center text-blue-100 hover:text-white px-3 py-2 rounded-full bg-blue-700/50">
              <Globe size={20} />
            </button>

            <button
              onClick={() => scrollToSection('home')}
              className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-2.5 rounded-full font-medium transition-colors"
            >
              Solicitar Análise
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 rounded-lg mt-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 text-base font-medium border-b border-gray-700 last:border-0 transition-colors duration-200 ${activeSection === item.id
                    ? 'text-blue-400 bg-gray-700/50'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;