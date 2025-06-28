"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Creative Director & Co-Founder",
      bio: "With over 8 years in digital design, Sarah leads our creative vision and ensures every project tells a compelling story.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=400&h=400&fit=crop&crop=face",
      skills: ["Brand Strategy", "UI/UX Design", "Creative Direction"],
      social: {
        linkedin: "#",
        twitter: "#",
        dribbble: "#"
      }
    },
    {
      name: "Marcus Rodriguez",
      role: "Lead Developer & Co-Founder",
      bio: "Marcus brings technical excellence to life, specializing in modern web technologies and scalable architecture solutions.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      skills: ["React/Next.js", "Node.js", "Cloud Architecture"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "Emily Watson",
      role: "Senior UX Designer",
      bio: "Emily crafts user experiences that are both beautiful and functional, with a focus on accessibility and user research.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      skills: ["User Research", "Prototyping", "Accessibility"],
      social: {
        linkedin: "#",
        dribbble: "#",
        behance: "#"
      }
    },
    {
      name: "David Kim",
      role: "Full-Stack Developer",
      bio: "David specializes in building robust backend systems and creating seamless integrations that power our applications.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      skills: ["Python/Django", "API Development", "Database Design"],
      social: {
        linkedin: "#",
        github: "#",
        stackoverflow: "#"
      }
    },
    {
      name: "Jessica Thompson",
      role: "Digital Strategist",
      bio: "Jessica ensures our projects align with business goals and user needs, driving strategy and client success.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      skills: ["Digital Strategy", "Analytics", "Client Relations"],
      social: {
        linkedin: "#",
        twitter: "#",
        medium: "#"
      }
    },
    {
      name: "Alex Johnson",
      role: "Frontend Developer",
      bio: "Alex creates pixel-perfect interfaces and smooth animations that bring our designs to life with modern web technologies.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      skills: ["React", "TypeScript", "Animation"],
      social: {
        linkedin: "#",
        github: "#",
        codepen: "#"
      }
    }
  ];

  const values = [
    {
      title: "Collaborative Spirit",
      desc: "We believe the best ideas emerge when diverse perspectives come together in a supportive environment.",
      icon: "https://cdn-icons-png.flaticon.com/512/1055/1055646.png"
    },
    {
      title: "Continuous Learning",
      desc: "We invest in our team's growth through workshops, conferences, and continuous skill development.",
      icon: "https://cdn-icons-png.flaticon.com/512/3073/3073873.png"
    },
    {
      title: "Work-Life Balance",
      desc: "We promote healthy work habits and flexible arrangements that support both professional and personal growth.",
      icon: "https://cdn-icons-png.flaticon.com/512/4341/4341134.png"
    },
    {
      title: "Innovation Focus",
      desc: "We encourage experimentation and creative problem-solving to stay at the forefront of digital innovation.",
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828911.png"
    }
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

  const cardHoverVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const getSocialIcon = (platform) => {
    const icons = {
      linkedin: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      github: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      twitter: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      dribbble: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/>
        </svg>
      ),
      behance: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.07 6.35H15.8v1.45h4.27v-1.45zm-2.35 3.6c.4 0 .77.04 1.11.13.34.1.63.24.87.45.24.2.43.46.56.77.13.32.2.7.2 1.13v.15H17.5c.03.62.25 1.04.67 1.28.26.15.57.22.93.22.38 0 .7-.09.94-.26.12-.09.23-.2.32-.34h1.74c-.27.72-.67 1.24-1.2 1.56-.53.32-1.17.48-1.92.48-.49 0-.94-.08-1.35-.25-.41-.16-.76-.4-1.05-.7-.29-.31-.51-.68-.67-1.11-.16-.43-.24-.91-.24-1.43 0-.51.08-.98.23-1.4.16-.43.38-.79.67-1.09.29-.3.64-.53 1.04-.69.41-.16.86-.24 1.35-.24zm.67 2.77c-.02-.5-.18-.86-.49-1.09-.31-.23-.68-.34-1.12-.34-.32 0-.59.06-.82.17-.23.12-.42.27-.57.46-.15.2-.26.42-.32.67-.07.25-.1.49-.11.71h3.43v-.58zM9.63 9.95c.42 0 .79.06 1.12.18.33.12.62.29.85.51.23.22.41.48.53.78.12.3.18.63.18.98 0 .39-.08.74-.23 1.04-.15.31-.36.58-.62.8.39.2.68.48.87.83.19.35.29.75.29 1.2 0 .41-.08.78-.24 1.11-.16.33-.38.61-.66.84-.28.23-.61.4-.98.52-.37.12-.77.18-1.19.18H3.63V9.95h5.9zm-.84 3.43c.26 0 .49-.06.68-.17.19-.12.28-.3.28-.56 0-.13-.03-.25-.08-.35-.05-.1-.12-.19-.21-.26-.09-.07-.2-.12-.32-.15-.12-.04-.25-.05-.39-.05H6.26v1.54h2.53zm.1 3.67c.16 0 .31-.02.44-.06.14-.04.26-.1.36-.18.1-.08.18-.18.24-.3.06-.12.09-.26.09-.42 0-.32-.1-.55-.3-.69-.2-.14-.46-.21-.77-.21H6.26v1.86h2.63z"/>
        </svg>
      ),
      medium: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
        </svg>
      ),
      codepen: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 8.182l-.018-.087-.017-.05c-.01-.024-.018-.05-.03-.075-.003-.018-.015-.034-.02-.05l-.035-.067-.03-.05-.044-.06-.046-.045-.06-.045-.046-.03-.06-.044-.044-.04-.015-.02L12.58.19c-.347-.232-.796-.232-1.142 0L.453 7.502l-.015.015-.044.035-.06.05-.038.04-.05.056-.037.045-.05.06c-.02.017-.03.03-.03.046l-.05.06-.02.06c-.02.01-.02.04-.03.07l-.01.05C0 8.12 0 8.15 0 8.18v7.497c0 .044.003.09.01.135l.01.046c.005.03.01.06.02.086l.015.05c.01.027.016.053.027.075l.022.05c0 .01.015.04.03.06l.03.04c.015.01.03.04.045.06l.03.04.04.04c.01.013.01.03.03.03l.06.042.04.03.01.014 10.97 7.33c.164.12.375.163.57.163s.39-.06.57-.18l10.99-7.28.014-.01.046-.037.06-.043.048-.036.052-.058.033-.045.04-.06.03-.05.03-.07.016-.052.03-.077.015-.045.03-.08v-7.5c0-.05 0-.095-.016-.14l-.014-.045.044.003zm-11.99 6.28l-3.65-2.44 3.65-2.442 3.65 2.44-3.65 2.44zm-1.034-6.674l-4.473 2.99L2.89 8.362l8.086-5.39V14.28zm-6.33 4.233l-2.582 1.73V10.3l2.582 1.726zm1.857 1.25l4.473 2.99v1.426L2.89 15.69l3.618-2.417zm6.537 2.99l4.474-2.98 3.613 2.42-8.087 5.39v-4.83zm6.33-4.23l2.583-1.72v3.456l-2.583-1.73zm-1.855-1.24L13.042 7.8V6.38l8.085 5.39-3.612 2.415z"/>
        </svg>
      ),
      stackoverflow: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z"/>
        </svg>
      )
    };
    return icons[platform] || null;
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white font-['Roboto'] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
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
            Get to know the passionate individuals who bring creativity, technical expertise, and innovative thinking to every project we undertake.
          </motion.p>
        </motion.div>
      </section>

      {/* Team Members Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {teamMembers.map((member, i) => (
            <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group ..."
            >

              <div className="relative overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[#0466c8] transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-[#0466c8] font-semibold mb-4 uppercase text-sm tracking-wide">
                  {member.role}
                </p>
                <p className="text-gray-400 group-hover:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
                  {member.bio}
                </p>
                
                {/* Skills */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-700 group-hover:bg-gradient-to-r group-hover:from-[#0466c8] group-hover:to-[#034078] text-gray-300 group-hover:text-white text-xs rounded-full transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  {Object.entries(member.social).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      className="w-10 h-10 bg-gray-700 hover:bg-gradient-to-r hover:from-[#0466c8] hover:to-[#034078] rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform"
                    >
                      {getSocialIcon(platform)}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Team Values Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] mb-6 text-white">
              Our Team <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0466c8] to-[#034078]">Values</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0466c8] to-[#034078] mx-auto mb-8"></div>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              These core values guide how we work together and serve our clients every day.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-[#034078]/20 transition-all duration-500 text-center border border-gray-700 hover:border-[#034078]/50"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0466c8] to-[#034078] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <Image
                    src={value.icon}
                    alt={value.title}
                    width={64}
                    height={64}
                    className="mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300"
                  />
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
        </div>
      </section>

      {/* Join Our Team CTA */}
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
            We're always looking for talented individuals who share our passion for creating exceptional digital experiences. Join our team and help shape the future of digital innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/careers"
              className="group inline-flex items-center bg-white hover:bg-gray-100 text-[#001f54] px-10 py-4 rounded-full uppercase text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              View Open Positions
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-9 py-4 rounded-full uppercase text-sm transition"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}