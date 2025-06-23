'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const WebDesignPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a1128] via-[#001f54] to-[#034078] text-white px-4 sm:px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-['Playfair_Display']">
            Custom Web Design Services
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            We create visually stunning, high-performing websites that deliver exceptional user experiences.
          </p>
        </motion.div>

        {/* Image Showcase */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src="https://images.pexels.com/photos/6476582/pexels-photo-6476582.jpeg"
            alt="Web Design Showcase"
            width={1200}
            height={700}
            className="w-full object-cover"
          />
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              title: 'Responsive & Mobile-First',
              desc: 'Our designs work flawlessly on every device—from mobile phones to large monitors.',
            },
            {
              title: 'SEO Optimized',
              desc: 'We build websites with SEO in mind to help your business rank higher in search engines.',
            },
            {
              title: 'Fast & Lightweight',
              desc: 'Our websites are optimized for speed, delivering lightning-fast experiences for your users.',
            },
            {
              title: 'Scalable Design Systems',
              desc: 'Built to grow with your brand and easily expand as your needs evolve.',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-md hover:shadow-blue-400/30 transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Let’s build your dream website
          </h2>
          <Link
            href="/contact"
            className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full uppercase text-sm transition"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </main>
  );
};

export default WebDesignPage;
