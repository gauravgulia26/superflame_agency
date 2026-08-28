import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '../data/businessData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-10 sm:py-20 bg-[#FAF8F4] relative overflow-hidden border-t border-[#DCD2C0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-6 sm:mb-8 space-y-1.5"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#FAF0DC] border border-[#C4841D]/40 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#9A6410]">
            <HelpCircle className="w-3 h-3 text-[#C4841D]" />
            <span>Help & FAQs</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl text-[#181F1C] font-bold tracking-tight">
            Frequently Asked <span className="italic font-serif text-[#14422E]">Questions</span>
          </h2>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 text-left">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                className="luxury-card rounded-2xl border border-[#DCD2C0] overflow-hidden shadow-luxury-xs transition-all"
                initial={{ opacity: 0, scale: 0.96, filter: 'blur(4px)', y: 15 }}
                whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-3 hover:bg-[#FAF8F4] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-xs sm:text-base text-[#181F1C]">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-[#FAF8F4] border border-[#DCD2C0] text-[#14422E] shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#14422E] text-white' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-[#5A6660] leading-relaxed border-t border-[#DCD2C0]/50 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Still Have Questions? WhatsApp Card */}
        <div className="mt-8 p-4 rounded-2xl bg-white border border-[#DCD2C0] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
          <div>
            <div className="text-xs font-bold text-[#181F1C]">Have a specific commercial inquiry?</div>
            <div className="text-[11px] text-[#5A6660]">Chat directly with Neeraj Dabas for instant rate cards and delivery scheduling.</div>
          </div>
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#25D366] text-white text-xs font-bold whitespace-nowrap hover:bg-[#20BE5C] transition-colors shrink-0 shadow-xs"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
