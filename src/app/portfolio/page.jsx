'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Creative Landing Page',
    category: 'Web Design',
    image: 'https://images.pexels.com/photos/3184451/pexels-photo-3184451.jpeg',
  },
  {
    id: 2,
    title: 'Startup Website',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
  },
  {
    id: 3,
    title: 'E-commerce UI',
    category: 'UI/UX',
    image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg',
  },
  {
    id: 4,
    title: 'Personal Portfolio',
    category: 'Web Design',
    image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg',
  },
];

const categories = ['All', 'Web Design', 'Web Development', 'UI/UX'];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <main className="bg-gray-950 text-white font-['Roboto']">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
          alt="Portfolio Background"
          fill
          className="object-cover -z-10 opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-black/70 -z-10" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold text-pink-400 font-['Playfair_Display']">
            Our Portfolio
          </h1>
          <p className="text-gray-300 mt-4 max-w-xl mx-auto">
            A collection of our favorite projects—each crafted with care and precision.
          </p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 max-w-6xl mx-auto text-center">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm uppercase transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-pink-500 text-white'
                  : 'bg-gray-800 hover:bg-pink-500 hover:text-white text-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-pink-500/30 transition"
            >
              <div className="relative w-full h-60">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-pink-400">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-black text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] mb-4">
            Inspired by Our Work?
          </h2>
          <p className="text-lg mb-6">
            Let’s make something amazing together. Reach out and start your next project with us!
          </p>
          <a
            href="/contact"
            className="inline-block bg-black text-white px-6 py-3 rounded-full uppercase text-sm hover:bg-gray-800 transition"
          >
            Contact Us
          </a>
        </motion.div>
      </section>
    </main>
  );
}
