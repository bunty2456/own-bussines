"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-gray-950 text-white font-['Roboto']">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
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
          <h1 className="text-4xl md:text-6xl font-bold text-pink-400 font-['Playfair_Display'] mb-4">
            About Us
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg">
            Discover the story behind YourBrand and what drives our team to deliver excellence.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-pink-400 font-['Playfair_Display'] mb-4">
            Our Mission
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            At YourBrand, we’re on a mission to empower businesses through innovative design and impactful digital strategies. 
            We believe in honesty, creativity, and building long-term partnerships.
          </p>
        </motion.div>

        {/* Values Grid */}
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
              className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-pink-500/20 transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Teaser */}
      <section className="py-20 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-black text-center">
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
          <p className="text-lg">
            We’re a passionate group of designers, developers, and strategists who thrive on building great things together.
          </p>
          <div className="mt-8">
            <a
              href="/team"
              className="inline-block bg-black text-white px-6 py-2 rounded-full text-sm uppercase hover:bg-gray-800 transition"
            >
              View Full Team
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
