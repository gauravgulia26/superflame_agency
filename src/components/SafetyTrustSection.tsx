import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Scale, CheckCircle2, Lock, Truck, Award } from 'lucide-react';
import { SAFETY_PROTOCOLS } from '../data/businessData';

export const SafetyTrustSection: React.FC = () => {
  const stepIcons = [
    <Scale className="w-5 h-5 text-[#14422E]" />,
    <CheckCircle2 className="w-5 h-5 text-[#C4841D]" />,
    <Lock className="w-5 h-5 text-[#0B3B70]" />,
    <Truck className="w-5 h-5 text-[#14422E]" />
  ];

  return (
    <section id="safety" className="py-10 sm:py-20 bg-[#FAF8F4] relative overflow-hidden border-t border-[#DCD2C0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2"
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(6px)', y: 20 }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF0DC] border border-[#C4841D]/40 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#9A6410]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#14422E]" />
            <span>Super Gas Certified Safety Protocols</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl text-[#181F1C] font-bold tracking-tight">
            Your Safety Is Our <span className="italic font-serif text-[#14422E]">Top Priority</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#5A6660] leading-relaxed">
            As an authorized Super Gas dealer, every single cylinder dispatched from our Pooth Khurd hub follows rigorous safety checks and inspections.
          </p>
        </motion.div>

        {/* 4-Step Safety Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {SAFETY_PROTOCOLS.map((protocol, idx) => (
            <motion.div
              key={idx}
              className="luxury-card rounded-2xl p-4 sm:p-6 border border-[#DCD2C0] shadow-luxury-sm relative group hover:border-[#14422E]/40 transition-all text-left"
              initial={{ opacity: 0, scale: 0.94, filter: 'blur(6px)', y: 20 }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-2xl font-bold text-[#14422E]/25 group-hover:text-[#14422E] transition-colors">
                  {protocol.step}
                </span>
                <div className="p-2.5 rounded-xl bg-[#FAF8F4] border border-[#DCD2C0] shadow-xs">
                  {stepIcons[idx]}
                </div>
              </div>

              <h3 className="font-serif font-bold text-sm sm:text-base text-[#181F1C] mb-1.5 leading-snug">
                {protocol.title}
              </h3>

              <p className="text-xs text-[#5A6660] leading-relaxed">
                {protocol.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Safety Callout Strip */}
        <motion.div 
          className="mt-8 sm:mt-12 luxury-card rounded-2xl p-4 sm:p-6 border border-[#C4841D]/35 flex flex-col sm:flex-row items-center justify-between gap-4 text-left shadow-luxury-sm"
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#E2EFE7] text-[#14422E] border border-[#14422E]/20 shrink-0">
              <Award className="w-6 h-6 text-[#C4841D]" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-[#181F1C]">
                100% Tamper-Evident Seal Guarantee
              </div>
              <div className="text-[11px] sm:text-xs text-[#5A6660]">
                If the security seal or safety cap is broken upon delivery, we replace the cylinder immediately at zero cost.
              </div>
            </div>
          </div>

          <a
            href="tel:9899813581"
            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#14422E] text-white text-xs font-bold whitespace-nowrap hover:bg-[#1D5A3F] transition-colors shrink-0"
          >
            Emergency Helpline: 9899813581
          </a>
        </motion.div>

      </div>
    </section>
  );
};
