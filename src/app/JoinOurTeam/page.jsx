"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  const benefits = [
    {
      title: "Remote-First Culture",
      desc: "Work from anywhere with flexible hours and a focus on results, not location.",
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828747.png",
    },
    {
      title: "Growth & Learning",
      desc: "Continuous learning budget, conference attendance, and skill development programs.",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      title: "Health & Wellness",
      desc: "Comprehensive health insurance, mental health support, and wellness stipends.",
      icon: "https://cdn-icons-png.flaticon.com/512/2382/2382533.png",
    },
    {
      title: "Creative Freedom",
      desc: "Autonomy to innovate, experiment, and bring your best ideas to life.",
      icon: "https://cdn-icons-png.flaticon.com/512/3176/3176369.png",
    },
  ];

  const openPositions = [
    {
      title: "Senior Full-Stack Developer",
      department: "engineering",
      location: "Remote",
      type: "Full-time",
      desc: "Join our engineering team to build scalable web applications using React, Node.js, and modern cloud technologies.",
      requirements: ["5+ years experience", "React/Next.js expertise", "Node.js proficiency", "AWS/Cloud experience"],
    },
    {
      title: "UI/UX Designer",
      department: "design",
      location: "Remote",
      type: "Full-time",
      desc: "Create beautiful, user-centered designs for web and mobile applications that drive business results.",
      requirements: ["3+ years experience", "Figma mastery", "User research skills", "Design systems experience"],
    },
    {
      title: "Digital Marketing Specialist",
      department: "marketing",
      location: "Remote",
      type: "Full-time",
      desc: "Drive growth through strategic digital marketing campaigns, SEO, and content marketing initiatives.",
      requirements: ["2+ years experience", "Google Ads/Analytics", "Content strategy", "SEO expertise"],
    },
    {
      title: "Project Manager",
      department: "operations",
      location: "Remote",
      type: "Full-time",
      desc: "Lead cross-functional teams to deliver exceptional client projects on time and within budget.",
      requirements: ["PMP certification preferred", "Agile/Scrum experience", "Client management", "3+ years PM experience"],
    },
    {
      title: "Frontend Developer",
      department: "engineering",
      location: "Remote",
      type: "Contract",
      desc: "Build responsive, interactive user interfaces using modern JavaScript frameworks and cutting-edge tools.",
      requirements: ["3+ years experience", "React/Vue.js", "TypeScript", "CSS/Tailwind expertise"],
    },
    {
      title: "Brand Strategist",
      department: "design",
      location: "Remote",
      type: "Part-time",
      desc: "Develop compelling brand strategies and visual identities that resonate with target audiences.",
      requirements: ["Brand strategy experience", "Market research", "Creative thinking", "Portfolio required"],
    },
  ];

  const cultureValues = [
    {
      title: "Innovation First",
      desc: "We encourage bold ideas and creative solutions to complex problems.",
      icon: "💡",
    },
    {
      title: "Collaborative Spirit",
      desc: "We believe the best work comes from diverse perspectives working together.",
      icon: "🤝",
    },
    {
      title: "Quality Obsessed",
      desc: "We take pride in delivering exceptional results that exceed expectations.",
      icon: "⭐",
    },
    {
      title: "Continuous Growth",
      desc: "We invest in our team's development and celebrate learning opportunities.",
      icon: "🚀",
    },
  ];

  const departments = [
    { id: "all", name: "All Positions", count: openPositions.length },
    { id: "engineering", name: "Engineering", count: openPositions.filter(p => p.department === "engineering").length },
    { id: "design", name: "Design", count: openPositions.filter(p => p.department === "design").length },
    { id: "marketing", name: "Marketing", count: openPositions.filter(p => p.department === "marketing").length },
    { id: "operations", name: "Operations", count: openPositions.filter(p => p.department === "operations").length },
  ];

  const filteredPositions = selectedDepartment === "all" 
    ? openPositions 
    : openPositions.filter(pos => pos.department === selectedDepartment);

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
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0466c8] to-[#034078]">Team</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-300 text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Build the future of digital experiences with a team that values innovation, creativity, and meaningful impact.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#positions"
              className="group inline-flex items-center bg-gradient-to-r from-[#001f54] to-[#034078] hover:from-[#034078] hover:to-[#0466c8] text-white px-8 py-4 rounded-full transition-all duration-300 text-sm uppercase font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              View Open Positions
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            
            <Link
              href="/about"
              className="inline-block bg-blue-700 hover:bg-blue-600 text-white px-8 py-4 rounded-full uppercase text-sm transition"
            >
              Learn About Us
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

      {/* Culture Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] mb-6 text-white">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0466c8] to-[#034078]">Culture</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0466c8] to-[#034078] mx-auto mb-8"></div>
          <p className="text-gray-300 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            We're building more than just great products—we're creating a workplace where creativity thrives, diverse perspectives are celebrated, and every team member can do their best work.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {cultureValues.map((value, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-[#034078]/20 transition-all duration-500 text-center border border-gray-700 hover:border-[#034078]/50"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#0466c8] transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-[#0a1128] via-[#001f54] to-[#034078]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] mb-6 text-white">
            Why You'll <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#87ceeb] to-[#ffffff]">Love</span> Working Here
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#87ceeb] to-[#ffffff] mx-auto mb-8"></div>
          <p className="text-gray-200 text-lg max-w-3xl mx-auto">
            We believe that when our team thrives, our clients and projects do too. That's why we've built a comprehensive benefits package that supports your whole life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group bg-white/10 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 border border-white/20 hover:border-white/40"
            >
              <div className="flex items-start space-x-6">
                <div className="relative flex-shrink-0">
                  <div className="relative bg-white/20 p-4 rounded-xl group-hover:bg-white/30 transition-all duration-300">
                    <Image
                      src={benefit.icon}
                      alt={benefit.title}
                      width={48}
                      height={48}
                      className="brightness-0 invert group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#87ceeb] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-200 group-hover:text-white transition-colors duration-300 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Open Positions Section */}
      <section id="positions" className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] mb-6 text-white">
            Open <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0466c8] to-[#034078]">Positions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0466c8] to-[#034078] mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Find your next opportunity to grow, create, and make an impact with our growing team.
          </p>
        </motion.div>

        {/* Department Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setSelectedDepartment(dept.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedDepartment === dept.id
                  ? 'bg-gradient-to-r from-[#0466c8] to-[#034078] text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {dept.name} ({dept.count})
            </button>
          ))}
        </motion.div>

        {/* Job Listings */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {filteredPositions.map((position, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-[#034078]/20 transition-all duration-500 border border-gray-700 hover:border-[#034078]/50"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[#0466c8] transition-colors duration-300">
                    {position.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {position.location}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {position.type}
                    </span>
                    <span className="px-3 py-1 bg-[#034078] text-white rounded-full text-xs uppercase font-medium">
                      {position.department}
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <button className="group/btn inline-flex items-center bg-gradient-to-r from-[#001f54] to-[#034078] hover:from-[#034078] hover:to-[#0466c8] text-white px-6 py-3 rounded-full transition-all duration-300 text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform">
                    Apply Now
                    <svg className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {position.desc}
              </p>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Key Requirements:</h4>
                <div className="flex flex-wrap gap-2">
                  {position.requirements.map((req, reqIndex) => (
                    <span
                      key={reqIndex}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm group-hover:bg-gray-600 transition-colors duration-300"
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Apply CTA */}
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
            Don't See Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#87ceeb] to-[#ffffff]">Perfect Role?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#87ceeb] to-[#ffffff] mx-auto mb-8"></div>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-3xl mx-auto">
            We're always looking for talented individuals who share our passion for creating exceptional digital experiences. Send us your resume and tell us what you'd love to work on.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:careers@codera.com"
              className="group inline-flex items-center bg-white hover:bg-gray-100 text-[#001f54] px-10 py-4 rounded-full uppercase text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Send Us Your Resume
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            
            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-9 py-4 rounded-full uppercase text-sm transition"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}