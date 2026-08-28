import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown, Flame } from 'lucide-react';
import { FAQS } from '../data/businessData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-14 md:py-20 bg-[#FAF8F4]/80 relative border-t border-[#DCD2C0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Blur+Zoom scroll effect */}
        <motion.div 
          className="text-center mb-10 space-y-2.5"
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(6px)', y: 20 }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF0DC] border border-[#C4841D]/40 text-xs font-bold uppercase tracking-wider text-[#9A6410]">
            <HelpCircle className="w-3.5 h-3.5 text-[#C4841D]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#181F1C] font-bold tracking-tight">
            Commercial & Bulk LPG <span className="italic font-serif text-[#14422E]">Inquiries</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#5A6660] leading-relaxed">
            Clear information about our Bharatgas distribution operations in Pooth Khurd, cylinder sizes, and delivery logistics.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                className="luxury-card rounded-2xl border border-[#DCD2C0] overflow-hidden transition-all duration-200"
                initial={{ opacity: 0, scale: 0.96, filter: 'blur(4px)', y: 15 }}
                whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <Flame className="w-4 h-4 text-[#14422E] shrink-0" />
                    <span className="font-serif font-bold text-sm sm:text-base text-[#181F1C]">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-[#5A6660] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#C4841D]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#2D3833] leading-relaxed border-t border-[#DCD2C0] bg-[#FAF8F4]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
