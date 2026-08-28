import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, CheckCircle, Flame, Building2, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface AboutSectionProps {
  onOpenOrderModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenOrderModal }) => {
  return (
    <section id="about" className="py-10 sm:py-20 bg-[#FAF8F4] relative overflow-hidden border-t border-[#DCD2C0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-14 space-y-2 sm:space-y-3"
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(6px)', y: 20 }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF0DC] border border-[#C4841D]/40 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#9A6410]">
            <Building2 className="w-3.5 h-3.5 text-[#C4841D]" />
            <span>Authorized Super Gas Dealership</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl text-[#181F1C] font-bold tracking-tight">
            Trust & Excellence with <span className="italic font-serif text-[#14422E]">Balaji Gas</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#5A6660] leading-relaxed">
            Led by Proprietor <strong className="text-[#181F1C] font-bold">{BUSINESS_INFO.proprietor}</strong>, Balaji Gas delivers certified Super Gas LPG energy with verified weight accuracy, maximum safety standards, and dedicated commercial priority across Delhi NCR.
          </p>
        </motion.div>

        {/* 2-Column Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
          
          {/* Left Column: Official Accreditation Card */}
          <motion.div 
            className="lg:col-span-6 space-y-4 text-left"
            initial={{ opacity: 0, scale: 0.94, filter: 'blur(6px)', x: -20 }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)', x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="luxury-card rounded-2xl p-4 sm:p-7 border border-[#C4841D]/35 shadow-luxury-md relative overflow-hidden">
              
              <div className="flex items-center gap-3 border-b border-[#DCD2C0] pb-3 sm:pb-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#14422E] to-[#0B3B70] flex items-center justify-center text-white border border-[#C4841D]/40 shadow-xs shrink-0">
                  <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-[#E59C24]" />
                </div>
                <div>
                  <div className="font-serif font-bold text-base sm:text-xl text-[#181F1C]">
                    {BUSINESS_INFO.brandName}
                  </div>
                  <div className="text-[10px] sm:text-xs text-[#9A6410] font-bold tracking-wide uppercase">
                    {BUSINESS_INFO.dealerTitle}
                  </div>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-[#5A6660] leading-relaxed">
                <p>
                  As an authorized Super Gas dealer, we are dedicated to providing: <em className="font-serif text-[#14422E] font-bold">“More Power. Everyday Confidence.”</em> We supply certified LPG fuel directly to commercial restaurants, industrial units, banquet halls, and domestic kitchens.
                </p>
                <p className="hidden sm:block">
                  Operating from our primary hub at Kanhaiya Dharam Kata in Pooth Khurd, we ensure guaranteed weight accuracy, multi-point valve inspections, and priority scheduled delivery fleets for high-volume commercial establishments.
                </p>
              </div>

              {/* Badges Strip */}
              <div className="mt-4 pt-3 border-t border-[#DCD2C0] grid grid-cols-2 gap-2 text-left">
                <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-[#DCD2C0]">
                  <div className="text-[9px] uppercase tracking-wider text-[#5A6660] font-bold">Dealership</div>
                  <div className="text-xs font-bold text-[#14422E] font-serif">Super Gas Authorized</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-[#DCD2C0]">
                  <div className="text-[9px] uppercase tracking-wider text-[#5A6660] font-bold">Proprietor</div>
                  <div className="text-xs font-bold text-[#181F1C] font-serif">{BUSINESS_INFO.proprietor}</div>
                </div>
              </div>

              {/* Address Footer */}
              <div className="mt-2.5 flex items-center gap-1.5 text-[10px] sm:text-xs text-[#5A6660] bg-white/70 p-2 rounded-xl border border-[#DCD2C0]">
                <MapPin className="w-3.5 h-3.5 text-[#C4841D] shrink-0" />
                <span className="truncate">{BUSINESS_INFO.address}</span>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Key Commitments */}
          <motion.div 
            className="lg:col-span-6 space-y-3 sm:space-y-4 text-left"
            initial={{ opacity: 0, scale: 0.94, filter: 'blur(6px)', x: 20 }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)', x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-2.5">
              
              <div className="p-3 sm:p-4 rounded-xl bg-white border border-[#DCD2C0] shadow-luxury-xs flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-[#E2EFE7] text-[#14422E] shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#181F1C]">100% Genuine Super Gas Supply</h3>
                  <p className="text-[11px] sm:text-xs text-[#5A6660] mt-0.5">
                    Strictly factory-sealed cylinders with serialized tamper-evident security caps directly from authorized bottling lines.
                  </p>
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-white border border-[#DCD2C0] shadow-luxury-xs flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-[#FAF0DC] text-[#9A6410] shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#181F1C]">Commercial Volume Advantage</h3>
                  <p className="text-[11px] sm:text-xs text-[#5A6660] mt-0.5">
                    Transparent official commercial tariffs with customized billing, credit cycles, and volume rebate tiers.
                  </p>
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-white border border-[#DCD2C0] shadow-luxury-xs flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-[#E4EEF8] text-[#0B3B70] shrink-0 mt-0.5">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#181F1C]">24/7 Commercial Emergency Helpline</h3>
                  <p className="text-[11px] sm:text-xs text-[#5A6660] mt-0.5">
                    Immediate emergency refill logistics so restaurants and factories never face interrupted operations.
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Action Button */}
            <div className="pt-1">
              <button
                onClick={onOpenOrderModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#14422E] to-[#1D5A3F] text-white text-xs font-bold uppercase tracking-wider hover:brightness-105 transition-all shadow-sm border border-[#C4841D]/40"
              >
                <span>Partner with Balaji Gas</span>
                <Flame className="w-3.5 h-3.5 text-[#E59C24]" />
              </button>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
