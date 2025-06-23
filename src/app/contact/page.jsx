'use client';

import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

export default function ContactPage() {
  return (
    <main className="bg-gray-950 text-white font-['Roboto']">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden bg-[url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70 -z-10" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-pink-400 font-['Playfair_Display']">
            Get in Touch
          </h1>
          <p className="text-gray-200 mt-4 text-lg">
            We'd love to hear from you. Let’s start a conversation.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-pink-400 font-['Playfair_Display'] mb-6">
              Contact Information
            </h2>
            <ul className="space-y-6 text-gray-300">
              <li className="flex items-start gap-4">
                <FiMapPin className="text-pink-500 mt-1" size={22} />
                <div>
                  <strong>Address</strong>
                  <p>123 Creative Avenue, Digital City</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FiPhone className="text-pink-500 mt-1" size={22} />
                <div>
                  <strong>Phone</strong>
                  <p>+1 (234) 567-890</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FiMail className="text-pink-500 mt-1" size={22} />
                <div>
                  <strong>Email</strong>
                  <p>hello@yourbrand.com</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#4f030c]"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#4f030c]"
              ></textarea>
              <button
                type="submit"
                className="bg-[#4f030c] hover:bg-[#5c0711] transition-all px-6 py-2 rounded-full uppercase text-sm font-medium"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-10 text-center text-gray-400 text-sm border-t border-pink-500/20">
        &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
      </section>
    </main>
  );
}
