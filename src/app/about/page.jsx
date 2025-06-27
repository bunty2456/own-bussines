"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  const features = [
    {
      title: "Creative Strategy",
      desc: "We design solutions tailored to your brand voice and audience goals.",
      icon: "https://cdn-icons-png.flaticon.com/512/3595/3595455.png",
    },
    {
      title: "User-Centered Design",
      desc: "Our designs focus on enhancing user experiences across all platforms.",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      title: "Results-Driven",
      desc: "We measure success with real outcomes, not just visuals.",
      icon: "https://cdn-icons-png.flaticon.com/512/4255/4255406.png",
    },
  ];

  return (
    <main className="bg-gray-950 text-white font-['Roboto']">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg"
          alt="About Background"
          fill
          className="-z-10 object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-black/60 -z-10" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white font-['Playfair_Display'] mb-4">
            About Us
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Discover the story behind YourBrand and what drives our team to deliver excellence.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold font-['Playfair_Display'] mb-4">
            Our Mission
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            At YourBrand, our mission is to create innovative digital experiences that build
            trust, deliver impact, and grow businesses. We believe in strategy-backed design,
            strong partnerships, and results that speak.
          </p>
        </motion.div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Innovation",
              desc: "We embrace change and encourage fresh, creative thinking in everything we do.",
            },
            {
              title: "Integrity",
              desc: "We uphold the highest standards of honesty and transparency in our work.",
            },
            {
              title: "Excellence",
              desc: "We are committed to delivering outstanding results that exceed expectations.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-[#034078] transition"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 font-['Playfair_Display']"
        >
          What We Offer
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-[#034078] transition text-center"
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                width={60}
                height={60}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0a1128] via-[#001f54] to-[#034078] text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-300">
            We’re a passionate group of designers, developers, and strategists who thrive on building great things together.
          </p>
          <div className="mt-8">
            <a
              href="/team"
              className="inline-block bg-black text-white px-6 py-2 rounded-full text-sm uppercase hover:bg-[#034078] transition"
            >
              View Full Team
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
