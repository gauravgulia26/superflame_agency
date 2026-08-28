import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, CheckCircle, Flame, Building2, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface AboutSectionProps {
  onOpenOrderModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenOrderModal }) => {
  return (
    <section id="about" className="py-8 sm:py-14 bg-[#FAF8F4] relative overflow-hidden border-t border-[#DCD2C0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-6 sm:mb-10 space-y-1.5"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#FAF0DC] border border-[#C4841D]/40 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#9A6410]">
            <Building2 className="w-3 h-3 text-[#C4841D]" />
            <span>Authorized Dealership</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl text-[#181F1C] font-bold tracking-tight">
            About <span className="italic font-serif text-[#14422E]">Balaji Gas</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#5A6660]">
            Managed by Proprietor <strong className="text-[#181F1C]">{BUSINESS_INFO.proprietor}</strong> — authorized Super Gas dealer providing safe, high-power LPG energy across Delhi NCR.
          </p>
        </motion.div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-center">
          
          {/* Left Column: Business Card */}
          <motion.div 
            className="lg:col-span-6 text-left"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="luxury-card rounded-2xl p-4 sm:p-5 border border-[#C4841D]/35 shadow-luxury-sm">
              
              <div className="flex items-center gap-3 border-b border-[#DCD2C0] pb-3 mb-3">
                <img
                  src="/images/balaji_gas_logo.svg"
                  alt="Balaji Gas Logo"
                  className="w-10 h-10 object-contain rounded-xl shadow-xs shrink-0"
                />
                <div>
                  <div className="font-serif font-bold text-base sm:text-lg text-[#181F1C]">
                    {BUSINESS_INFO.brandName}
                  </div>
                  <div className="text-[10px] text-[#9A6410] font-bold uppercase tracking-wide">
                    {BUSINESS_INFO.dealerTitle}
                  </div>
                </div>
              </div>

              <div className="text-xs text-[#5A6660] space-y-1.5">
                <p>
                  Official Super Gas supply hub located at <strong className="text-[#181F1C]">{BUSINESS_INFO.shortAddress}</strong>. We provide genuine, tamper-sealed LPG cylinders with prompt delivery for commercial and domestic users.
                </p>
              </div>

              {/* Badges Strip */}
              <div className="mt-3 pt-3 border-t border-[#DCD2C0] grid grid-cols-2 gap-2 text-left">
                <div className="p-2 rounded-xl bg-white border border-[#DCD2C0]">
                  <div className="text-[9px] uppercase tracking-wider text-[#5A6660] font-bold">Dealership</div>
                  <div className="text-xs font-bold text-[#14422E] font-serif">Super Gas Authorized</div>
                </div>
                <div className="p-2 rounded-xl bg-white border border-[#DCD2C0]">
                  <div className="text-[9px] uppercase tracking-wider text-[#5A6660] font-bold">Proprietor</div>
                  <div className="text-xs font-bold text-[#181F1C] font-serif">{BUSINESS_INFO.proprietor}</div>
                </div>
              </div>

              {/* Address Footer */}
              <div className="mt-2.5 flex items-center gap-1.5 text-[10px] text-[#5A6660] bg-white/70 p-2 rounded-xl border border-[#DCD2C0]">
                <MapPin className="w-3 h-3 text-[#C4841D] shrink-0" />
                <span className="truncate">{BUSINESS_INFO.address}</span>
              </div>

            </div>
          </motion.div>

          {/* Right Column: 3 Key Points */}
          <motion.div 
            className="lg:col-span-6 space-y-2.5 text-left"
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-3 rounded-xl bg-white border border-[#DCD2C0] shadow-2xs flex items-center gap-3">
              <div className="p-1.5 rounded-lg bg-[#E2EFE7] text-[#14422E] shrink-0">
                <CheckCircle className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-[#181F1C]">100% Genuine Sealed Cylinders</h3>
                <p className="text-[11px] text-[#5A6660]">Factory-crimped Super Gas security seal on every delivery.</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white border border-[#DCD2C0] shadow-2xs flex items-center gap-3">
              <div className="p-1.5 rounded-lg bg-[#FAF0DC] text-[#9A6410] shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-[#181F1C]">Commercial Volume Tariffs</h3>
                <p className="text-[11px] text-[#5A6660]">Competitive rates and discount slabs for high-volume kitchens.</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white border border-[#DCD2C0] shadow-2xs flex items-center gap-3">
              <div className="p-1.5 rounded-lg bg-[#E4EEF8] text-[#0B3B70] shrink-0">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-[#181F1C]">Commercial Emergency Refill</h3>
                <p className="text-[11px] text-[#5A6660]">Priority fast dispatch so your kitchen never stops cooking.</p>
              </div>
            </div>

            <div className="pt-1">
              <button
                onClick={onOpenOrderModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-[#14422E] to-[#1D5A3F] text-white text-xs font-bold uppercase tracking-wider hover:brightness-105 transition-all shadow-xs border border-[#C4841D]/40"
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
