"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiCodesandbox, FiTrendingUp, FiFeather, FiStar } from "react-icons/fi";

export default function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      icon: <FiCodesandbox size={28} />,
      desc: "Custom, high-performance websites tailored to your brand and business goals.",
    },
    {
      title: "UI/UX Design",
      icon: <FiFeather size={28} />,
      desc: "User-first design that’s both beautiful and conversion-optimized.",
    },
    {
      title: "Brand Strategy",
      icon: <FiStar size={28} />,
      desc: "We help build memorable brand identities that connect emotionally.",
    },
    {
      title: "Digital Marketing",
      icon: <FiTrendingUp size={28} />,
      desc: "SEO, social media, and PPC strategies that drive real results.",
    },
  ];

  return (
    <main className="bg-gray-950 text-white font-['Roboto']">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
          alt="Services Background"
          fill
          className="-z-10 object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-black/60 -z-10" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold text-white font-['Playfair_Display']">
            Our Services
          </h1>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            We provide creative, strategic, and data-driven solutions to build and grow digital brands.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white font-['Playfair_Display'] mb-4">
            What We Offer
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We specialize in complete digital transformations—from concept to launch and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-[#034078] transition"
            >
              <div className="flex items-center gap-4 mb-4 text-white">
                {service.icon}
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0a1128] via-[#001f54] to-[#034078] text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-lg mb-6 text-gray-400">
            Let’s build something amazing. Contact us today to get started on your next big idea.
          </p>
          <a
            href="/contact"
            className="inline-block bg-black text-white px-6 py-3 rounded-full uppercase text-sm hover:bg-[#034078] transition"
          >
            Contact Us
          </a>
        </motion.div>
      </section>
    </main>
  );
}
