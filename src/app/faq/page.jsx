'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: 'What is your return policy?',
    answer:
      'We accept returns within 30 days of purchase. Items must be in original condition.',
  },
  {
    question: 'Do you offer international shipping?',
    answer:
      'Yes, we ship worldwide. Shipping costs may vary depending on location.',
  },
  {
    question: 'How can I track my order?',
    answer:
      'After placing your order, you will receive an email with tracking information.',
  },
  {
    question: 'Can I change my order after placing it?',
    answer:
      'Changes can be made within 12 hours of placing the order by contacting support.',
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <main
      className="min-h-screen bg-gradient-to-b from-[#0a1128] via-[#001f54] to-[#034078] text-white px-4 sm:px-6 py-16"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          id="faq-heading"
          className="text-4xl sm:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h1>

        <section className="space-y-8">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.article
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className={`group border border-white/20 bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8 transition-all duration-300 hover:bg-white/15 hover:shadow-blue-500/20 hover:shadow-lg`}
              >
                <button
                  className="w-full flex items-center justify-between text-left text-lg font-semibold text-white hover:text-blue-300 transition-colors"
                  onClick={() => toggleFAQ(index)}
                  aria-controls={`faq-answer-${index}`}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-2 text-blue-200 group-hover:text-blue-300"
                  >
                    <FaChevronDown />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      id={`faq-answer-${index}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-white/90 leading-relaxed text-base sm:text-lg">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </section>
      </div>
    </main>
  );
}
