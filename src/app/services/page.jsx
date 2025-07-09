"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function ServicesPage() {
  const heroRef = useRef(null);
  const [activeService, setActiveService] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Custom Icons as SVG components
  const CodeIcon = () => (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16,18 22,12 16,6"></polyline>
      <polyline points="8,6 2,12 8,18"></polyline>
    </svg>
  );

  const DesignIcon = () => (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
      <line x1="16" y1="8" x2="2" y2="22"></line>
      <line x1="17.5" y1="15" x2="9" y2="15"></line>
    </svg>
  );

  const StarIcon = () => (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"></polygon>
    </svg>
  );

  const TrendingIcon = () => (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="23,6 13.5,15.5 8.5,10.5 1,18"></polyline>
      <polyline points="17,6 23,6 23,12"></polyline>
    </svg>
  );

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

  const services = [
    {
      title: "Web Development",
      icon: <CodeIcon />,
      desc: "Custom-built, high-performance websites optimized for speed, scalability, and your unique business needs.",
      features: ["React/Next.js", "Performance Optimization", "Responsive Design", "SEO Ready"],
    },
    {
      title: "UI/UX Design",
      icon: <DesignIcon />,
      desc: "Intuitive, visually stunning interfaces designed to maximize user engagement and conversions.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    },
    {
      title: "Brand Strategy",
      icon: <StarIcon />,
      desc: "Crafting authentic brand identities that resonate deeply and leave a lasting impression.",
      features: ["Brand Identity", "Logo Design", "Visual Guidelines", "Brand Voice"],
    },
    {
      title: "Digital Marketing",
      icon: <TrendingIcon />,
      desc: "Data-driven SEO, social media, and PPC campaigns that amplify reach and deliver measurable results.",
      features: ["SEO Optimization", "Social Media", "PPC Campaigns", "Analytics"],
    },
  ];

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
    { number: "5+", label: "Years Experience" },
  ];

  const processSteps = [
    { 
      step: "01", 
      title: "Discovery", 
      desc: "Understanding your goals, challenges, and vision through detailed consultation and research." 
    },
    { 
      step: "02", 
      title: "Strategy", 
      desc: "Crafting a tailored approach and roadmap designed for optimal results and success." 
    },
    { 
      step: "03", 
      title: "Execution", 
      desc: "Bringing your project to life with precision, quality, and attention to every detail." 
    },
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-white font-['Roboto']">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden"
      >
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
              Premium Digital Services
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-['Playfair_Display']">
            Our Services
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-6 max-w-3xl mx-auto">
            Transform your vision into reality with our comprehensive digital solutions designed for the modern world.
          </p>

          <button className="inline-block bg-[#001f54] hover:bg-[#034078] text-white px-6 py-3 rounded-full transition-all duration-300 text-sm uppercase cursor-pointer border-none">
            Get Started
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

      {/* Services Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto bg-gray-950">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold font-['Playfair_Display'] mb-4 text-white">
            What We Offer
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0466c8] to-[#034078] mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            From concept to launch, we provide end-to-end services that drive growth and exceed expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              onHoverStart={() => setActiveService(i)}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-[#034078] hover:bg-gray-700 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#034078] group-hover:text-blue-400 transition-colors duration-300"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-400 text-base leading-relaxed mb-6">
                {service.desc}
              </p>

              <div className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
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

              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-[#034078] hover:text-blue-400 font-medium text-sm group/btn transition-colors duration-300 cursor-pointer border-none bg-transparent"
              >
                Learn More
                <ArrowRightIcon />
              </motion.button>
            </motion.div>
          ))}
        </div>
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
              Our Process
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0466c8] to-[#034078] mx-auto mb-8"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A proven methodology that ensures exceptional results every time
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {processSteps.map((item, i) => (
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
                  {i < 2 && (
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
              Ready to Get Started?
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] mb-4 text-white">
            Let's Create Something
            <span className="block">Extraordinary</span>
          </h2>
          
          <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            Ready to transform your digital presence? Let's discuss your project and create something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition-all duration-300 uppercase text-sm cursor-pointer border-none">
                Start Your Project
                <ArrowRightIcon />
              </button>
            </motion.div>
            <a href="/portfolio">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full uppercase text-sm transition">
                View Our Work
              </button>
            </motion.div>
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}