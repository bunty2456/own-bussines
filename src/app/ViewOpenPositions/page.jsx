"use client";
import { motion } from "framer-motion";
import { MapPin, Clock, Users, Star, Send, Heart, Zap, Target, ChevronDown } from 'lucide-react';

export default function JobPositionPage() {
  const benefits = [
    {
      title: "Health & Wellness",
      desc: "Comprehensive health coverage including medical, dental, and vision insurance for you and your family.",
      icon: <Heart className="w-8 h-8" />,
    },
    {
      title: "Growth Opportunities", 
      desc: "Continuous learning & development programs, conferences, and career advancement paths.",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "Amazing Team",
      desc: "Collaborative work environment with passionate professionals who support each other.",
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Flexible Work",
      desc: "Remote & hybrid options with flexible hours to maintain work-life balance.",
      icon: <Target className="w-8 h-8" />,
    },
  ];

  const requirements = [
    "5+ years of experience in full-stack development",
    "Proficiency in React, Node.js, and modern JavaScript",
    "Experience with database design and optimization",
    "Strong problem-solving and communication skills",
    "Passion for creating exceptional user experiences"
  ];

  const jobDetails = [
    { icon: <MapPin className="w-5 h-5" />, label: "Remote / San Francisco" },
    { icon: <Clock className="w-5 h-5" />, label: "Full-time" },
    { icon: <Star className="w-5 h-5" />, label: "$120k - $180k" },
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
    visible: { y: 0, opacity: 1 }
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block bg-gradient-to-r from-[#0466c8] to-[#034078] text-transparent bg-clip-text mb-4"
          >
            <div className="text-sm font-semibold tracking-wider uppercase">
              We're Hiring
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 font-['Playfair_Display'] leading-tight"
          >
            Senior Full Stack Developer
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 text-gray-300 mb-8"
          >
            {jobDetails.map((detail, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="text-[#0466c8]">{detail.icon}</div>
                <span>{detail.label}</span>
              </div>
            ))}
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-gray-300 text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Join our innovative team and help us build the next generation of digital experiences with cutting-edge technologies.
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <ChevronDown className="w-8 h-8 text-white animate-bounce" />
        </motion.div>
      </section>

      {/* About the Role Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] mb-6 text-white">
            About the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0466c8] to-[#034078]">Role</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0466c8] to-[#034078] mx-auto mb-8"></div>
          <p className="text-gray-300 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            As a Senior Full Stack Developer at Codera, you'll work with cutting-edge technologies and collaborate with talented individuals who share your passion for excellence. You'll be responsible for building scalable web applications and contributing to our innovative digital solutions.
          </p>
        </motion.div>

        {/* Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 p-12 rounded-3xl shadow-lg border border-gray-700 mb-16"
        >
          <h3 className="text-3xl font-bold mb-8 text-white text-center">
            Requirements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {requirements.map((req, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-4 rounded-xl bg-gray-700/50 hover:bg-gray-700 transition-all duration-300"
              >
                <div className="w-2 h-2 bg-[#0466c8] rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-gray-300 text-lg leading-relaxed">{req}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto bg-gradient-to-b from-gray-950 to-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] mb-6 text-white">
            Benefits & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0466c8] to-[#034078]">Perks</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0466c8] to-[#034078] mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We believe in taking care of our team members and providing an environment where everyone can thrive and grow.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {benefits.map((benefit, i) => (
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
                    <div className="text-white group-hover:text-white">
                      {benefit.icon}
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#0466c8] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Application CTA */}
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
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#87ceeb] to-[#ffffff]">Join Us?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#87ceeb] to-[#ffffff] mx-auto mb-8"></div>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-3xl mx-auto">
            Take the next step in your career and become part of our amazing team. We're excited to see what we can build together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/contact">
            <button className="group inline-flex items-center bg-white hover:bg-gray-100 text-[#001f54] px-10 py-4 rounded-full uppercase text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform">
              <Send className="mr-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              Apply Now
            </button>
            </a>
            <a 
              href="/about" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-9 py-4 rounded-full uppercase text-sm transition"
            >
              Learn More About Us
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}