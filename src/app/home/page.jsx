"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const services = [
    {
      title: "Web Design",
      desc: "Elegant, modern, responsive web designs tailored for your business.",
      href: "/services/web-design",
    },
    {
      title: "Brand Strategy",
      desc: "We help define your brand’s voice, mission, and identity.",
      href: "/services/brand-strategy",
    },
    {
      title: "Digital Marketing",
      desc: "Drive traffic and grow fast with smart digital strategies.",
      href: "/services/digital-marketing",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-white font-['Roboto']">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/7876046/pexels-photo-7876046.jpeg"
          alt="Hero Background"
          fill
          style={{ objectFit: "cover" }}
          className="-z-10 opacity-70"
          priority
        />
        <div className="bg-black/60 absolute inset-0 -z-10" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-['Playfair_Display']">
            Welcome to Codera
          </h1>
          <p className="text-gray-500 text-lg md:text-xl mb-6">
            We craft stunning experiences that connect people to brands.
          </p>
          <Link
            href="/services"
            className="bg-[#001f54] hover:bg-[#034078] text-white px-6 py-3 rounded-full transition-all duration-300 text-sm uppercase"
          >
            Explore Services
          </Link>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold text-white font-['Playfair_Display'] mb-10">
          What We Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <Link
                href={service.href}
                className="block bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-[#034078] hover:bg-gray-700 transition duration-300 group"
              >
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300">
                  {service.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#0a1128] via-[#001f54] to-[#034078] text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Elevate My Brand?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full uppercase text-sm transition"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
