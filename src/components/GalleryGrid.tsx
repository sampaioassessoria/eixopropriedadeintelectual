import React from 'react';
import { motion } from 'framer-motion';

const GalleryGrid: React.FC = () => {
  const images = [
    {
      id: 1,
      title: 'Escritório Principal',
      description: 'Ambiente moderno e colaborativo',
      url: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20tech%20office%20workspace%20with%20large%20windows%20natural%20light%20clean%20minimalist%20design%20professional%20environment&image_size=landscape_16_9'
    },
    {
      id: 2,
      title: 'Sala de Reuniões',
      description: 'Espaço para brainstorm e colaboração',
      url: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20conference%20room%20with%20large%20screen%20whiteboard%20comfortable%20seating%20professional%20meeting%20space%20tech%20company&image_size=landscape_16_9'
    },
    {
      id: 3,
      title: 'Área de Desenvolvimento',
      description: 'Onde a mágica acontece',
      url: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=developer%20workspace%20multiple%20monitors%20coding%20setup%20modern%20desk%20ergonomic%20chair%20tech%20environment%20professional&image_size=landscape_16_9'
    },
    {
      id: 4,
      title: 'Zona de Relaxamento',
      description: 'Espaço para descontrair e recarregar',
      url: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20office%20relaxation%20area%20comfortable%20seating%20plants%20natural%20light%20coffee%20area%20professional%20tech%20company%20lounge&image_size=landscape_16_9'
    },
    {
      id: 5,
      title: 'Recepção',
      description: 'Primeira impressão profissional',
      url: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20office%20reception%20area%20clean%20design%20professional%20welcome%20desk%20company%20logo%20tech%20corporate%20environment&image_size=landscape_16_9'
    },
    {
      id: 6,
      title: 'Laboratório de Inovação',
      description: 'Onde testamos novas ideias',
      url: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=tech%20innovation%20lab%20modern%20equipment%20testing%20devices%20professional%20research%20development%20area%20clean%20tech%20environment&image_size=landscape_16_9'
    }
  ];

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nosso Ambiente
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça nosso espaço de trabalho moderno e colaborativo
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl bg-gray-700 hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">
                    {image.title}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    {image.description}
                  </p>
                </div>
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 mb-6">
            Gostaria de conhecer nosso espaço pessoalmente?
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
            Agendar Visita
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryGrid;