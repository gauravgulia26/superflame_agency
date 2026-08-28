import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Scale, CheckCircle2, Lock, Truck, Award } from 'lucide-react';
import { SAFETY_PROTOCOLS, BUSINESS_INFO } from '../data/businessData';

export const SafetyTrustSection: React.FC = () => {
  const stepIcons = [
    <Scale className="w-4 h-4 text-[#14422E]" />,
    <CheckCircle2 className="w-4 h-4 text-[#C4841D]" />,
    <Lock className="w-4 h-4 text-[#0B3B70]" />,
    <Truck className="w-4 h-4 text-[#14422E]" />
  ];

  return (
    <section id="safety" className="py-8 sm:py-14 bg-[#FAF8F4] relative overflow-hidden border-t border-[#DCD2C0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-1.5"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#FAF0DC] border border-[#C4841D]/40 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#9A6410]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#14422E]" />
            <span>Super Gas Certified Protocols</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl text-[#181F1C] font-bold tracking-tight">
            Safety & Quality <span className="italic font-serif text-[#14422E]">Guarantee</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#5A6660]">
            Every Super Gas cylinder undergoes rigorous 4-step safety inspection before dispatch.
          </p>
        </motion.div>

        {/* 4-Step Safety Process Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {SAFETY_PROTOCOLS.map((protocol, idx) => (
            <motion.div
              key={idx}
              className="luxury-card rounded-2xl p-3 sm:p-4 border border-[#DCD2C0] shadow-luxury-xs text-left"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-lg font-bold text-[#14422E]/30">
                  {protocol.step}
                </span>
                <div className="p-1.5 rounded-lg bg-[#FAF8F4] border border-[#DCD2C0]">
                  {stepIcons[idx]}
                </div>
              </div>

              <h3 className="font-serif font-bold text-xs sm:text-sm text-[#181F1C] mb-1">
                {protocol.title}
              </h3>

              <p className="text-[11px] text-[#5A6660] leading-snug">
                {protocol.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Safety Callout Strip */}
        <motion.div 
          className="mt-6 luxury-card rounded-2xl p-3.5 sm:p-4 border border-[#C4841D]/35 flex flex-col sm:flex-row items-center justify-between gap-3 text-left shadow-2xs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#E2EFE7] text-[#14422E] shrink-0">
              <Award className="w-5 h-5 text-[#C4841D]" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-[#181F1C]">
                100% Tamper-Evident Seal Guarantee
              </div>
              <div className="text-[10px] sm:text-xs text-[#5A6660]">
                Broken seal? Instant free replacement with zero questions asked.
              </div>
            </div>
          </div>

          <a
            href={`tel:${BUSINESS_INFO.rawPhone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#14422E] text-white text-xs font-bold whitespace-nowrap hover:bg-[#1D5A3F] transition-colors shrink-0"
          >
            Helpline: {BUSINESS_INFO.phone}
          </a>
        </motion.div>

      </div>
    </section>
  );
};
