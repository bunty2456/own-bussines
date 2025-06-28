'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Creative Agency Landing',
    category: 'Web Design',
    description: 'Modern landing page with interactive animations and stunning visuals that captivate users from the first glance.',
    image: 'https://images.pexels.com/photos/3184451/pexels-photo-3184451.jpeg',
    technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'GSAP'],
    year: '2024',
    client: 'Creative Studio',
    features: ['Responsive Design', 'Interactive Animations', 'SEO Optimized', 'Fast Loading'],
  },
  {
    id: 2,
    title: 'SaaS Platform Dashboard',
    category: 'Web Development',
    description: 'Full-stack web application with real-time analytics and comprehensive user management system.',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Socket.io'],
    year: '2024',
    client: 'Tech Startup',
    features: ['Real-time Analytics', 'User Management', 'API Integration', 'Cloud Deployment'],
  },
  {
    id: 3,
    title: 'E-commerce Mobile App',
    category: 'UI/UX',
    description: 'Intuitive shopping experience with seamless checkout flow and personalized recommendations.',
    image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg',
    technologies: ['Figma', 'Prototyping', 'User Testing', 'Adobe XD'],
    year: '2024',
    client: 'Retail Brand',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
  },
  {
    id: 4,
    title: 'Personal Portfolio Site',
    category: 'Web Design',
    description: 'Minimalist portfolio showcasing creative work with smooth interactions and elegant transitions.',
    image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg',
    technologies: ['Gatsby', 'GSAP', 'GraphQL', 'Netlify'],
    year: '2023',
    client: 'Artist',
    features: ['CMS Integration', 'Gallery System', 'Contact Forms', 'Blog Section'],
  },
  {
    id: 5,
    title: 'Corporate Website Redesign',
    category: 'Web Development',
    description: 'Complete overhaul of corporate presence with modern CMS integration and enhanced performance.',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
    technologies: ['WordPress', 'PHP', 'MySQL', 'AWS'],
    year: '2023',
    client: 'Fortune 500',
    features: ['Content Management', 'Multi-language', 'Performance Optimization', 'Security Features'],
  },
  {
    id: 6,
    title: 'Mobile Banking App',
    category: 'UI/UX',
    description: 'Secure and user-friendly banking interface with biometric authentication and intuitive navigation.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
    technologies: ['React Native', 'UX Research', 'Accessibility', 'Security'],
    year: '2023',
    client: 'FinTech',
    features: ['Biometric Auth', 'Transaction History', 'Budget Tracking', 'Security Alerts'],
  },
];

const categories = ['All', 'Web Design', 'Web Development', 'UI/UX'];

const stats = [
  { number: '50+', label: 'Projects Completed' },
  { number: '25+', label: 'Happy Clients' },
  { number: '3+', label: 'Years Experience' },
  { number: '100%', label: 'Client Satisfaction' },
];

// Custom Icons
const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20,6 9,17 4,12"></polyline>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12,5 19,12 12,19"></polyline>
  </svg>
);

const EyeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const handleCategoryChange = (category) => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedCategory(category);
      setIsLoading(false);
    }, 300);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white font-['Roboto']">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl px-4 z-20"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-2 bg-[#001f54]/20 border border-[#034078]/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm uppercase">
              Our Creative Work
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-['Playfair_Display']">
            Our Portfolio
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-6 max-w-3xl mx-auto">
            Discover our collection of exceptional projects that showcase innovation, creativity, and technical excellence.
          </p>

          <button className="inline-block bg-[#001f54] hover:bg-[#034078] text-white px-6 py-3 rounded-full transition-all duration-300 text-sm uppercase cursor-pointer border-none">
            View Projects
          </button>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-10 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => handleCategoryChange(cat)}
              className={`px-6 py-2 rounded-full text-sm uppercase font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-[#001f54] text-white shadow-lg'
                  : 'bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white border border-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-10 px-6 max-w-6xl mx-auto bg-gray-950">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold font-['Playfair_Display'] mb-4 text-white">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Each project represents our commitment to excellence, innovation, and delivering results that exceed expectations.
          </p>
        </motion.div>

        {/* Loading State */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center items-center py-20"
          >
            <div className="w-12 h-12 border-4 border-[#034078] border-t-transparent rounded-full animate-spin"></div>
          </motion.div>
        )}

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {!isLoading && (
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-10"
            >
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  onHoverStart={() => setActiveProject(i)}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 rounded-2xl shadow-md hover:shadow-[#034078] hover:bg-gray-700 transition-all duration-300 group cursor-pointer overflow-hidden"
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div 
                      className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url("${project.image}")` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Overlay with View Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#001f54] hover:bg-[#034078] text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 text-sm uppercase font-medium"
                      >
                        <EyeIcon />
                        View Project
                      </motion.button>
                    </div>

                    {/* Year Badge */}
                    <div className="absolute top-4 right-4 bg-[#034078] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {project.year}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-[#001f54] group-hover:bg-[#034078] rounded-full flex items-center justify-center transition-colors duration-300">
                        <span className="text-white font-bold text-sm">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <div>
                        <span className="text-[#034078] text-sm font-semibold uppercase tracking-wide block">
                          {project.category}
                        </span>
                        <h3 className="text-2xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 text-base leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {project.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * idx }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3"
                        >
                          <div className="text-green-400 flex-shrink-0">
                            <CheckIcon />
                          </div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-gray-700 group-hover:bg-gray-600 text-gray-300 px-3 py-1 rounded-full text-xs transition-colors duration-300">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Client & Action */}
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">Client: {project.client}</span>
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-[#034078] hover:text-blue-400 font-medium text-sm group/btn transition-colors duration-300 cursor-pointer border-none bg-transparent"
                      >
                        View Details
                        <ArrowRightIcon />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white font-['Playfair_Display'] mb-4">
              How We Work
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our proven process ensures every project delivers exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Research', desc: 'Deep dive into your goals and target audience' },
              { step: '02', title: 'Design', desc: 'Create stunning visuals and user experiences' },
              { step: '03', title: 'Develop', desc: 'Build with cutting-edge technologies' },
              { step: '04', title: 'Launch', desc: 'Deploy and provide ongoing support' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-[#034078] hover:bg-gray-700 transition-all duration-300 text-center group"
              >
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-[#001f54] group-hover:bg-[#034078] rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300"
                  >
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </motion.div>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#034078]/50 to-transparent" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0a1128] via-[#001f54] to-[#034078] text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-2 bg-white/10 border border-white/20 rounded-full text-white/90 text-sm font-medium backdrop-blur-sm uppercase">
              Ready to Start?
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] mb-4 text-white">
            Let's Create Your
            <span className="block">Next Project</span>
          </h2>
          
          <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            Transform your vision into reality with our expert team. From concept to launch, we're here to exceed your expectations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition-all duration-300 uppercase text-sm cursor-pointer border-none">
                Get Started
                <ArrowRightIcon />
              </button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full uppercase text-sm transition">
                View Services
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}