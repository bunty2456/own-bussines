'use client';

import { motion } from 'framer-motion';
import {
  FaGavel,
  FaEdit,
  FaUserShield,
  FaCrown,
  FaExclamationTriangle,
  FaBan,
  FaGlobe,
  FaEnvelope,
} from 'react-icons/fa';

const termsSections = [
  {
    title: '1. Acceptance of Terms',
    icon: <FaGavel />,
    content:
      'By accessing and using our website, you agree to be bound by these Terms and Conditions and all applicable laws and regulations.',
  },
  {
    title: '2. Changes to Terms',
    icon: <FaEdit />,
    content:
      'We reserve the right to modify these Terms at any time. Continued use of the site after changes indicates your acceptance.',
  },
  {
    title: '3. User Responsibilities',
    icon: <FaUserShield />,
    content:
      'You agree not to misuse the services provided. This includes not violating laws, infringing intellectual property, or engaging in fraudulent activities.',
  },
  {
    title: '4. Intellectual Property',
    icon: <FaCrown />,
    content:
      'All content, trademarks, and data on this website are the property of our company and are protected by intellectual property laws.',
  },
  {
    title: '5. Limitation of Liability',
    icon: <FaExclamationTriangle />,
    content:
      'We are not liable for any indirect, incidental, or consequential damages resulting from your use of the website or services.',
  },
  {
    title: '6. Termination',
    icon: <FaBan />,
    content:
      'We reserve the right to suspend or terminate your access to the website at our sole discretion, without notice.',
  },
  {
    title: '7. Governing Law',
    icon: <FaGlobe />,
    content:
      'These Terms are governed by the laws of your jurisdiction, without regard to conflict of law principles.',
  },
  {
    title: '8. Contact Information',
    icon: <FaEnvelope />,
    content:
      'If you have any questions regarding these Terms, please contact us at terms@example.com.',
  },
];

const TermsPage = () => {
  return (
    <main
      className="min-h-screen bg-gradient-to-b from-[#0a1128] via-[#001f54] to-[#034078] text-white px-4 sm:px-6 py-16"
      aria-labelledby="terms-heading"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h1
          id="terms-heading"
          className="text-4xl sm:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Terms & Conditions
        </motion.h1>

        <section className="space-y-10">
          {termsSections.map((section, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/10 border border-white/20 shadow-md hover:shadow-blue-500/30 transition-shadow backdrop-blur-xl rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-4"
              aria-labelledby={`section-${index}`}
            >
              <motion.div
                className="text-3xl text-blue-300 flex-shrink-0"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {section.icon}
              </motion.div>

              <div>
                <h2
                  id={`section-${index}`}
                  className="text-xl sm:text-2xl font-semibold mb-2 text-blue-100"
                >
                  {section.title}
                </h2>
                <p className="text-white/90 leading-relaxed text-base sm:text-lg">
                  {section.content}
                </p>
              </div>
            </motion.article>
          ))}
        </section>
      </div>
    </main>
  );
};

export default TermsPage;
