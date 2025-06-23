'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';

const CustomerSupportPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', form);
    alert('Thank you! Our support team will reach out shortly.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a1128] via-[#001f54] to-[#034078] text-white px-4 sm:px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Customer Support
        </motion.h1>

        <motion.p
          className="text-center text-white/80 mb-10 max-w-2xl mx-auto text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          We're here to help! Contact us with questions, feedback, or concerns—our team typically responds within 24 hours.
        </motion.p>

        {/* Contact Info Section */}
        <motion.div
          className="bg-white/10 border border-white/20 backdrop-blur-md rounded-xl p-6 sm:p-8 mb-10 shadow-md hover:shadow-blue-400/20 transition"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">📬 Contact Information</h2>
          <ul className="space-y-2 text-white/90">
            <li className="flex items-center gap-2"><FaPhoneAlt /> +92 (333) 651-6071</li>
            <li className="flex items-center gap-2"><FaEnvelope /> abrahamrandhawa@gmail.com</li>
            <li className="flex items-center gap-2"><FaClock /> Mon–Fri, 9:00 AM–6:00 PM</li>
          </ul>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/10 border border-white/20 backdrop-blur-md rounded-xl p-6 sm:p-8 space-y-5 shadow-md hover:shadow-blue-400/20 transition"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-2">📝 Send Us a Message</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            className="w-full p-3 rounded bg-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 active:bg-blue-700 font-semibold text-white transition"
          >
            <FaPaperPlane className="text-sm" />
            Submit
          </motion.button>
        </motion.form>
      </div>
    </main>
  );
};

export default CustomerSupportPage;
