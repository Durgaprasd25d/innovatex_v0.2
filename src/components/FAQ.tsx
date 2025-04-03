import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is the purpose of this hackathon?',
      answer: 'InnovateX Hackathon aims to bring together talented developers to solve real-world challenges through technology and innovation.',
    },
    {
      question: 'How do I register for the hackathon?',
      answer: 'Click on the "Register Now" button at the top of the page and fill out the registration form. Make sure to complete all required fields.',
    },
    {
      question: 'What are the prizes for the winners?',
      answer: 'The top three teams will receive cash prizes: ₹50,000 for first place, ₹30,000 for second place, and ₹20,000 for third place.',
    },
    {
      question: 'Can I participate as a solo developer?',
      answer: 'Yes, you can participate either as an individual or as part of a team. However, we encourage team participation for better collaboration and learning.',
    },
  ];

  return (
    <section id="faq" className="py-16 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-lg neon-border bg-glass overflow-hidden"
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-500" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-400">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;