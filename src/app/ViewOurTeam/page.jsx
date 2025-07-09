"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function TeamPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      department: "leadership",
      image: "https://images.pexels.com/photos/19613394/pexels-photo-19613394.jpeg?_gl=1*1qn409i*_ga*MTc4NzI1ODA4NC4xNzI1ODg5NTEy*_ga_8JE65Q40S6*czE3NTIwODUzMDEkbzE0JGcxJHQxNzUyMDg1MzM1JGoyNiRsMCRoMA..",
      bio: "Visionary leader with 15+ years in tech, passionate about building products that make a difference.",
      skills: ["Strategic Planning", "Product Vision", "Team Leadership"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@codera.com"
      }
    },
    {
      name: "Michael Chen",
      role: "Head of Engineering",
      department: "engineering",
      image: "https://images.pexels.com/photos/1824273/pexels-photo-1824273.jpeg?_gl=1*15k925a*_ga*MTc4NzI1ODA4NC4xNzI1ODg5NTEy*_ga_8JE65Q40S6*czE3NTIwODUzMDEkbzE0JGcxJHQxNzUyMDg1Mzk3JGo1NCRsMCRoMA..",
      bio: "Full-stack architect who loves solving complex problems with elegant, scalable solutions.",
      skills: ["System Architecture", "Cloud Computing", "Team Mentoring"],
      social: {
        linkedin: "#",
        github: "#",
        email: "michael@codera.com"
      }
    },
    {
      name: "Emma Rodriguez",
      role: "Creative Director",
      department: "design",
      image: "https://images.pexels.com/photos/15481505/pexels-photo-15481505.jpeg?_gl=1*141zgci*_ga*MTc4NzI1ODA4NC4xNzI1ODg5NTEy*_ga_8JE65Q40S6*czE3NTIwODUzMDEkbzE0JGcxJHQxNzUyMDg1NDI5JGoyMiRsMCRoMA..",
      bio: "Design thinker who crafts beautiful, user-centered experiences that tell compelling stories.",
      skills: ["UI/UX Design", "Brand Strategy", "Creative Leadership"],
      social: {
        linkedin: "#",
        dribbble: "#",
        email: "emma@codera.com"
      }
    },
    {
      name: "David Kim",
      role: "Senior Full-Stack Developer",
      department: "engineering",
      image: "https://images.pexels.com/photos/2815057/pexels-photo-2815057.jpeg?_gl=1*hseyzy*_ga*MTc4NzI1ODA4NC4xNzI1ODg5NTEy*_ga_8JE65Q40S6*czE3NTIwODUzMDEkbzE0JGcxJHQxNzUyMDg1NDQ0JGo3JGwwJGgw",
      bio: "Code enthusiast who transforms ideas into robust, performant applications with clean architecture.",
      skills: ["React/Next.js", "Node.js", "Database Design"],
      social: {
        linkedin: "#",
        github: "#",
        email: "david@codera.com"
      }
    },
    {
      name: "Lisa Thompson",
      role: "UX Research Lead",
      department: "design",
      image: "https://images.pexels.com/photos/7648307/pexels-photo-7648307.jpeg?_gl=1*v1ppx5*_ga*MTc4NzI1ODA4NC4xNzI1ODg5NTEy*_ga_8JE65Q40S6*czE3NTIwODUzMDEkbzE0JGcxJHQxNzUyMDg1NDg2JGozMyRsMCRoMA..",
      bio: "User advocate who uncovers insights that drive meaningful design decisions and product innovation.",
      skills: ["User Research", "Data Analysis", "Design Thinking"],
      social: {
        linkedin: "#",
        medium: "#",
        email: "lisa@codera.com"
      }
    },
    {
      name: "Alex Martinez",
      role: "DevOps Engineer",
      department: "engineering",
      image: "https://images.pexels.com/photos/3859776/pexels-photo-3859776.jpeg?_gl=1*12bidjr*_ga*MTc4NzI1ODA4NC4xNzI1ODg5NTEy*_ga_8JE65Q40S6*czE3NTIwODUzMDEkbzE0JGcxJHQxNzUyMDg1NTkyJGo0MSRsMCRoMA..",
      bio: "Infrastructure wizard who ensures our systems run smoothly and scale effortlessly.",
      skills: ["AWS/Azure", "CI/CD", "Monitoring"],
      social: {
        linkedin: "#",
        github: "#",
        email: "alex@codera.com"
      }
    },
    {
      name: "Rachel Green",
      role: "Product Marketing Manager",
      department: "marketing",
      image: "https://images.pexels.com/photos/29906769/pexels-photo-29906769.jpeg?_gl=1*1ci8rxy*_ga*MTc4NzI1ODA4NC4xNzI1ODg5NTEy*_ga_8JE65Q40S6*czE3NTIwODUzMDEkbzE0JGcxJHQxNzUyMDg1NjAxJGozMiRsMCRoMA..",
      bio: "Growth strategist who connects our products with the people who need them most.",
      skills: ["Growth Marketing", "Content Strategy", "Analytics"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "rachel@codera.com"
      }
    },
    {
      name: "James Wilson",
      role: "Senior UI Designer",
      department: "design",
      image: "https://images.pexels.com/photos/10921437/pexels-photo-10921437.jpeg?_gl=1*1nkqptr*_ga*MTc4NzI1ODA4NC4xNzI1ODg5NTEy*_ga_8JE65Q40S6*czE3NTIwODUzMDEkbzE0JGcxJHQxNzUyMDg1NjUxJGo1NiRsMCRoMA..",
      bio: "Visual storyteller who brings brands to life through thoughtful, impactful design.",
      skills: ["Interface Design", "Prototyping", "Design Systems"],
      social: {
        linkedin: "#",
        dribbble: "#",
        email: "james@codera.com"
      }
    },
    {
      name: "Nina Patel",
      role: "Frontend Developer",
      department: "engineering",
      image: "https://images.pexels.com/photos/5065813/pexels-photo-5065813.jpeg?_gl=1*2sbyl3*_ga*MTc4NzI1ODA4NC4xNzI1ODg5NTEy*_ga_8JE65Q40S6*czE3NTIwODUzMDEkbzE0JGcxJHQxNzUyMDg1Njc3JGozMCRsMCRoMA..",
      bio: "Frontend specialist who creates pixel-perfect, interactive experiences users love.",
      skills: ["React", "TypeScript", "CSS/Tailwind"],
      social: {
        linkedin: "#",
        github: "#",
        email: "nina@codera.com"
      }
    }
  ];

  const departments = [
    { id: "all", name: "All Team", count: teamMembers.length },
    { id: "leadership", name: "Leadership", count: teamMembers.filter(m => m.department === "leadership").length },
    { id: "engineering", name: "Engineering", count: teamMembers.filter(m => m.department === "engineering").length },
    { id: "design", name: "Design", count: teamMembers.filter(m => m.department === "design").length },
    { id: "marketing", name: "Marketing", count: teamMembers.filter(m => m.department === "marketing").length },
  ];

  const filteredMembers = selectedDepartment === "all" 
    ? teamMembers 
    : teamMembers.filter(member => member.department === selectedDepartment);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const getSocialIcon = (platform) => {
    switch (platform) {
      case 'linkedin':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        );
      case 'twitter':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        );
      case 'github':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        );
      case 'dribbble':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm9.568 7.34c.77 1.027 1.261 2.246 1.397 3.572-.43-.084-2.639-.496-5.032-.496-.454 0-.928.011-1.404.035-.065-.158-.13-.325-.2-.492-.696-1.715-1.444-3.222-1.404-3.222 3.207-1.383 6.643.476 6.643.603zM12 2.453c2.247 0 4.312.857 5.86 2.263-.403.279-2.585 1.755-6.102.336C10.51 3.644 9.5 2.453 12 2.453zm-5.658 1.219c2.633 1.581 4.29 4.06 4.29 4.06s-5.467.747-10.308.747c-.835 0-1.642-.043-2.324-.1.747-2.098 2.317-3.946 4.342-5.246.398.201.398.201.398.201s3.967.338 3.602.338zM2.478 12c0-.077.003-.154.009-.23.675.043 1.525.065 2.438.065 5.469 0 11.199-.81 11.199-.81-.065.174-.13.357-.2.531-1.699.538-3.063 2.034-4.917 3.717C7.933 16.91 5.455 19.36 2.478 12zm7.973 9.447c-1.945 0-3.744-.543-5.282-1.488.811-1.674 2.509-3.49 5.097-5.097 1.563-1.563 2.98-2.772 4.088-3.667.22.451.425.934.614 1.428 1.319 3.451 1.842 6.397 1.842 6.397-1.837 1.548-4.2 2.427-6.359 2.427zm7.789-3.158c-.22-.065-1.716-2.585-2.585-5.469 2.007-.022 3.783.22 4.917.336-.165 2.132-.923 4.084-2.332 5.133z"/>
          </svg>
        );
      case 'email':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      default:
        return null;
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
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0466c8] to-[#034078]">Team</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-300 text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            The creative minds, technical wizards, and strategic thinkers who bring exceptional digital experiences to life.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#team"
              className="group inline-flex items-center bg-gradient-to-r from-[#001f54] to-[#034078] hover:from-[#034078] hover:to-[#0466c8] text-white px-8 py-4 rounded-full transition-all duration-300 text-sm uppercase font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Meet the Team
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            
            <Link
              href="/JoinOurTeam"
              className="inline-block bg-blue-700 hover:bg-blue-600 text-white px-8 py-4 rounded-full uppercase text-sm transition"
            >
              Join Our Team
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

      {/* Team Stats Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-[#0a1128] via-[#001f54] to-[#034078]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-[#87ceeb] transition-colors duration-300">
                {teamMembers.length}+
              </div>
              <div className="text-gray-200 text-lg">Team Members</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-[#87ceeb] transition-colors duration-300">
                50+
              </div>
              <div className="text-gray-200 text-lg">Projects Delivered</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-[#87ceeb] transition-colors duration-300">
                5+
              </div>
              <div className="text-gray-200 text-lg">Years Experience</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-[#87ceeb] transition-colors duration-300">
                100%
              </div>
              <div className="text-gray-200 text-lg">Remote Team</div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Team Members Section */}
      <section id="team" className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] mb-6 text-white">
            Our Amazing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0466c8] to-[#034078]">Team</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0466c8] to-[#034078] mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Meet the passionate individuals who bring creativity, expertise, and innovation to every project we tackle.
          </p>
        </motion.div>

        {/* Department Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
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

        {/* Team Grid */}
        <motion.div
          key={selectedDepartment}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredMembers.map((member, i) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredMember(member.name)}
              onHoverEnd={() => setHoveredMember(null)}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#034078]/20 transition-all duration-500 border border-gray-700 hover:border-[#034078]/50"
            >
              {/* Member Image */}
              <div className="relative overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Social Links Overlay */}
                <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {Object.entries(member.social).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      className="flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 hover:scale-110 transition-all duration-300 text-white"
                    >
                      {getSocialIcon(platform)}
                    </a>
                  ))}
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#0466c8] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-[#0466c8] font-medium text-sm uppercase tracking-wide">
                    {member.role}
                  </p>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {member.bio}
                </p>
                
                {/* Skills */}
                <div className="space-y-2">
                  <h4 className="text-white font-medium text-sm">Expertise:</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-xs group-hover:bg-gray-600 group-hover:text-gray-200 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#0466c8] to-[#034078] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Join Team CTA */}
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
            Want to Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#87ceeb] to-[#ffffff]">Team?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#87ceeb] to-[#ffffff] mx-auto mb-8"></div>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-3xl mx-auto">
            We're always looking for talented, passionate people who want to make a real impact. Join our remote-first team and help us create exceptional digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/ViewOpenPositions"
              className="group inline-flex items-center bg-white hover:bg-gray-100 text-[#001f54] px-10 py-4 rounded-full uppercase text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              View Open Positions
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <a
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-9 py-4 rounded-full uppercase text-sm transition"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </section>

      {/* Culture Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] mb-6 text-white">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0466c8] to-[#034078]">Culture</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0466c8] to-[#034078] mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            What makes our team special? It's the culture we've built together - one that celebrates creativity, supports growth, and values every voice.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-[#034078]/20 transition-all duration-500 border border-gray-700 hover:border-[#034078]/50"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              🚀
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#0466c8] transition-colors duration-300">
              Innovation Driven
            </h3>
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
              We encourage experimentation and bold ideas. Our team thrives on pushing boundaries and exploring new technologies to deliver cutting-edge solutions.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-[#034078]/20 transition-all duration-500 border border-gray-700 hover:border-[#034078]/50"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              🤝
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#0466c8] transition-colors duration-300">
              Collaborative Spirit
            </h3>
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
              We believe the best solutions come from diverse perspectives working together. Our open communication and mutual respect create magic.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-[#034078]/20 transition-all duration-500 border border-gray-700 hover:border-[#034078]/50"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              📚
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#0466c8] transition-colors duration-300">
              Continuous Learning
            </h3>
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
              Growth never stops. We invest in our team's development through training, conferences, and mentorship programs that help everyone reach their potential.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-[#034078]/20 transition-all duration-500 border border-gray-700 hover:border-[#034078]/50"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              🌍
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#0466c8] transition-colors duration-300">
              Work-Life Balance
            </h3>
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
              We understand that great work comes from balanced lives. Our flexible, remote-first culture supports your personal and professional wellbeing.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}