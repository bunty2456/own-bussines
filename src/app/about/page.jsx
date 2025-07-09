"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const features = [
    {
      title: "Creative Strategy",
      desc: "We design solutions tailored to your brand voice and audience goals, ensuring every element serves a purpose.",
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
    },
    {
      title: "User-Centered Design",
      desc: "Our designs focus on enhancing user experiences across all platforms with intuitive and accessible interfaces.",
      icon: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
    },
    {
      title: "Results-Driven",
      desc: "We measure success with real outcomes and data-driven insights, not just beautiful visuals.",
      icon: "https://cdn-icons-png.flaticon.com/512/4255/4255406.png",
    },
    {
      title: "Technical Excellence",
      desc: "Cutting-edge development practices meet innovative design to create robust, scalable solutions.",
      icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
    },
  ];

  const coreValues = [
    {
      title: "Innovation",
      desc: "We embrace change and encourage fresh, creative thinking in everything we do, staying ahead of industry trends.",
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828911.png",
    },
    {
      title: "Integrity",
      desc: "We uphold the highest standards of honesty and transparency in our work, building lasting partnerships.",
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828665.png",
    },
    {
      title: "Excellence",
      desc: "We are committed to delivering outstanding results that exceed expectations and drive real business value.",
      icon: "https://cdn-icons-png.flaticon.com/512/709/709496.png",
    },
    {
      title: "Collaboration",
      desc: "We believe the best solutions emerge from close partnerships and open communication with our clients.",
      icon: "https://cdn-icons-png.flaticon.com/512/1055/1055646.png",
    },
  ];

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "25+", label: "Happy Clients" },
    { number: "98%", label: "Client Satisfaction" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white font-['Roboto'] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center text-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#034078] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-[#001f54] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-20 w-72 h-72 bg-[#0466c8] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/60 to-gray-950 z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl px-6 z-20"
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 font-['Playfair_Display'] leading-tight"
          >
            About Codera
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-300 text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Discover the story behind Codera and what drives our team to deliver excellence in every digital experience we craft.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center bg-gradient-to-r from-[#001f54] to-[#034078] hover:from-[#034078] hover:to-[#0466c8] text-white px-8 py-4 rounded-full transition-all duration-300 text-sm uppercase font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Get in Touch
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <Link
              href="/portfolio"
              className="inline-block bg-blue-700 hover:bg-blue-600 text-white px-8 py-4 rounded-full uppercase text-sm transition"
            >
              View Our Work
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#0a1128] via-[#001f54] to-[#034078]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-['Playfair_Display']">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] mb-6 text-white">
            Our <span>Mission</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0466c8] to-[#034078] mx-auto mb-8"></div>
          <p className="text-gray-300 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            At Codera, our mission is to create innovative digital experiences that build trust, deliver measurable impact, and accelerate business growth. We believe in strategy-backed design, authentic partnerships, and results that truly matter.
          </p>
        </motion.div>

        {/* Core Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {coreValues.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-[#034078]/20 transition-all duration-500 text-center border border-gray-700 hover:border-[#034078]/50"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0466c8] to-[#034078] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#0466c8] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto bg-gradient-to-b from-gray-950 to-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] mb-6 text-white">
            What We Offer
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0466c8] to-[#034078] mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Our comprehensive suite of services is designed to elevate your digital presence and drive meaningful results.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-[#034078]/20 transition-all duration-500 border border-gray-700 hover:border-[#034078]/50"
            >
              <div className="flex items-start space-x-6">
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0466c8] to-[#034078] rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="relative bg-gray-700 p-4 rounded-xl group-hover:bg-gradient-to-r group-hover:from-[#0466c8] group-hover:to-[#034078] transition-all duration-300">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={48}
                      height={48}
                      className="group-hover:brightness-0 group-hover:invert transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#0466c8] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Team CTA */}
      <section className="py-24 bg-gradient-to-r from-[#0a1128] via-[#001f54] to-[#034078] text-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-6 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] mb-6 text-white">
            Meet Our Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0466c8] to-[#034078] mx-auto mb-8"></div>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-3xl mx-auto">
            We're a passionate group of designers, developers, and strategists who thrive on building exceptional digital experiences and lasting partnerships.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/ViewOurTeam"
              className="group inline-flex items-center bg-white hover:bg-gray-100 text-[#001f54] px-10 py-4 rounded-full uppercase text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              View Our Team
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <Link
              href="/JoinOurTeam"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-9 py-4  rounded-full uppercase text-sm transition"
            >
              Join Our Team
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}