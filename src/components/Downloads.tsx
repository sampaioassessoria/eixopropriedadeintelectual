import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Image, BookOpen, CheckCircle } from 'lucide-react';

const Downloads: React.FC = () => {
  const [downloadedItems, setDownloadedItems] = useState<Set<string>>(new Set());

  const downloads = [
    {
      id: '1',
      title: 'Apresentação Corporativa',
      description: 'Conheça nossa empresa, valores e serviços em detalhes',
      icon: FileText,
      size: '2.5 MB',
      type: 'PDF',
      color: 'from-blue-600 to-blue-800'
    },
    {
      id: '2',
      title: 'Portfólio de Projetos',
      description: 'Veja nossos cases de sucesso e projetos realizados',
      icon: Image,
      size: '15.2 MB',
      type: 'PDF',
      color: 'from-green-600 to-green-800'
    },
    {
      id: '3',
      title: 'Whitepaper: Transformação Digital',
      description: 'Guia completo sobre transformação digital para empresas',
      icon: BookOpen,
      size: '5.8 MB',
      type: 'PDF',
      color: 'from-purple-600 to-purple-800'
    },
    {
      id: '4',
      title: 'Catálogo de Serviços',
      description: 'Todos nossos serviços e soluções tecnológicas',
      icon: FileText,
      size: '3.1 MB',
      type: 'PDF',
      color: 'from-orange-600 to-orange-800'
    },
    {
      id: '5',
      title: 'Infográfico: Tendências Tech',
      description: 'As principais tendências tecnológicas para 2024',
      icon: Image,
      size: '8.7 MB',
      type: 'PNG',
      color: 'from-red-600 to-red-800'
    },
    {
      id: '6',
      title: 'E-book: Segurança Digital',
      description: 'Guia essencial de segurança para empresas modernas',
      icon: BookOpen,
      size: '4.3 MB',
      type: 'PDF',
      color: 'from-indigo-600 to-indigo-800'
    }
  ];

  const handleDownload = (id: string, title: string) => {
    // Simulate download
    setDownloadedItems(prev => new Set(prev).add(id));
    
    // Create a fake download link
    const link = document.createElement('a');
    link.href = '#';
    link.download = `${title.replace(/\s+/g, '_')}.pdf`;
    link.click();
    
    // Reset after 3 seconds
    setTimeout(() => {
      setDownloadedItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Recursos e Materiais
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Baixe nossos materiais exclusivos e conheça mais sobre nossas soluções
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {downloads.map((download, index) => (
            <motion.div
              key={download.id}
              variants={itemVariants}
              className={`group relative bg-gradient-to-br ${download.color} rounded-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden`}
            >
              {/* Stacked card effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl transform translate-x-1 translate-y-1 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl transform translate-x-2 translate-y-2 -z-20 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 bg-white/20 rounded-lg backdrop-blur-sm`}>
                    <download.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-white/70 mb-1">{download.type}</div>
                    <div className="text-xs text-white/70">{download.size}</div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {download.title}
                </h3>
                
                <p className="text-white/90 text-sm mb-6 leading-relaxed">
                  {download.description}
                </p>

                <button
                  onClick={() => handleDownload(download.id, download.title)}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    downloadedItems.has(download.id)
                      ? 'bg-green-500 text-white'
                      : 'bg-white text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {downloadedItems.has(download.id) ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      <span>Baixado!</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>Baixar Agora</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-800 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Receba mais recursos exclusivos
            </h3>
            <p className="text-gray-300 mb-6">
              Cadastre-se para receber novos materiais, whitepapers e atualizações tecnológicas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                Cadastrar
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Downloads;