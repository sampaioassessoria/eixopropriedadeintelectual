'use client';

import React from 'react';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Image from 'next/image';

const StatsSection: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#444_1px,transparent_1px),linear-gradient(to_bottom,#444_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,transparent_20%,black_100%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-start">
          {/* Left Column: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-blue-600"></div>
              <span className="text-gray-400 text-sm uppercase tracking-widest">Eixo Intelectual</span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-blue-600"></div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-12 leading-tight"
            >
              Nosso objetivo é<br />
              transformar sua ideia<br />
              em patrimônio.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center bg-[#111] border border-gray-800 rounded-full p-2 pr-8 gap-4 shadow-lg shadow-blue-900/10"
            >
              <div className="flex -space-x-3 pl-2">
                <Image className="rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" alt="User 1" width={40} height={40} />
                <Image className="rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" alt="User 2" width={40} height={40} />
                <Image className="rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64" alt="User 3" width={40} height={40} />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold">5/5</span>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
                <span className="text-xs text-gray-400">Baseado em mais de 139 Reviews</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Stats */}
          <div className="flex flex-col gap-10 lg:pl-20 pt-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-4xl md:text-6xl font-bold text-blue-600 mb-2">+ de 700</h3>
              <p className="text-gray-400 text-lg">Marcas Registradas</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-4xl md:text-6xl font-bold text-blue-600 mb-2">+ de 60</h3>
              <p className="text-gray-400 text-lg">Patentes Desenvolvidas</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-4xl md:text-6xl font-bold text-blue-600 mb-2">+ de 200</h3>
              <p className="text-gray-400 text-lg">Startups Protegidas!</p>
            </motion.div>
          </div>
        </div>

        {/* Infinite Scroll Carousel */}
        <div className="w-full overflow-hidden mt-10 relative">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30
            }}
          >
            {[
              "image 4.png", "image 5.png", "image 6.png", "image 7.png",
              "image 8.png", "image 9.png", "image 10.png", "image 11.png",
              "image 4.png", "image 5.png", "image 6.png", "image 7.png",
              "image 8.png", "image 9.png", "image 10.png", "image 11.png"
            ].map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 h-48 rounded-xl overflow-hidden border border-gray-800 relative group"
              >
                <Image
                  src={`/carrossel/${img}`}
                  alt={`Gallery Image ${index}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
