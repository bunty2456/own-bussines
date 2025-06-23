'use client';

import { motion } from 'framer-motion';
import {
  FaUserSecret,
  FaDatabase,
  FaCog,
  FaCookieBite,
  FaShareAlt,
  FaUserCheck,
  FaSyncAlt,
  FaEnvelope,
} from 'react-icons/fa';

const sections = [
  {
    title: '1. Introduction',
    icon: <FaUserSecret />,
    content:
      'We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information.',
  },
  {
    title: '2. Information We Collect',
    icon: <FaDatabase />,
    content:
      'We may collect personal information such as your name, email address, payment information, and any data you provide through our services.',
  },
  {
    title: '3. How We Use Your Information',
    icon: <FaCog />,
    content:
      'Your information is used to provide and improve our services, process transactions, communicate with you, and ensure security.',
  },
  {
    title: '4. Cookies and Tracking',
    icon: <FaCookieBite />,
    content:
      'We use cookies and similar technologies to analyze usage and personalize content. You can disable cookies in your browser settings.',
  },
  {
    title: '5. Third-Party Sharing',
    icon: <FaShareAlt />,
    content:
      'We do not sell your data. We may share information with trusted partners who assist in delivering our services under confidentiality agreements.',
  },
  {
    title: '6. Your Rights',
    icon: <FaUserCheck />,
    content:
      'You have the right to access, correct, or delete your personal data. Contact us if you’d like to exercise these rights.',
  },
  {
    title: '7. Updates to This Policy',
    icon: <FaSyncAlt />,
    content:
      'We may update this policy periodically. We will notify you of significant changes through our website or via email.',
  },
  {
    title: '8. Contact Us',
    icon: <FaEnvelope />,
    content:
      'For any questions regarding this policy, please contact us at privacy@example.com.',
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main
      className="min-h-screen bg-gradient-to-b from-[#0a1128] via-[#001f54] to-[#034078] text-white px-4 sm:px-6 py-16"
      aria-labelledby="privacy-heading"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h1
          id="privacy-heading"
          className="text-4xl sm:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Privacy Policy
        </motion.h1>

        <section className="space-y-10">
          {sections.map((section, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/10 border border-white/20 backdrop-blur-xl shadow-md hover:shadow-blue-500/30 transition-shadow rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-4"
              aria-labelledby={`section-${index}`}
            >
              <motion.div
                className="text-3xl text-blue-300"
                whileHover={{ scale: 1.2, rotate: 6 }}
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
}
