import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, MapPin, Phone, Building2, Flame, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface AboutSectionProps {
  onOpenOrderModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenOrderModal }) => {
  return (
    <section id="about" className="py-14 md:py-20 bg-[#FAF8F4]/80 relative border-t border-b border-[#DCD2C0]">
      
      {/* Glow */}
      <div className="absolute top-10 right-1/4 w-72 h-72 bg-[#C4841D]/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Blur+Zoom scroll effect */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12 space-y-2.5"
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(6px)', y: 20 }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E2EFE7] border border-[#14422E]/20 text-xs font-bold uppercase tracking-wider text-[#14422E]">
            <Award className="w-3.5 h-3.5 text-[#C4841D]" />
            <span>Authorized BPCL LPG Agency</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#181F1C] font-bold tracking-tight">
            Distinguished Heritage in <br className="hidden sm:inline" />
            <span className="italic font-serif text-[#14422E]">Safe & Uninterrupted</span> Energy Logistics
          </h2>
          <p className="text-xs sm:text-sm text-[#5A6660] leading-relaxed">
            Operating under the stewardship of <strong className="text-[#181F1C] font-bold">Balaji Gas (Neeraj Dabas)</strong>, Super Flame Bharatgas delivers genuine Bharat Petroleum LPG with verified weight accuracy, pressure certification, and dedicated commercial priority.
          </p>
        </motion.div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Credentials Card with Blur+Zoom */}
          <motion.div 
            className="lg:col-span-6 space-y-5"
            initial={{ opacity: 0, scale: 0.94, filter: 'blur(6px)', x: -20 }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)', x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="luxury-card rounded-2xl p-6 sm:p-7 border border-[#C4841D]/35 shadow-luxury-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#C4841D]/15 to-transparent rounded-bl-full pointer-events-none" />

              <div className="flex items-center gap-3 border-b border-[#DCD2C0] pb-4 mb-4">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#14422E] to-[#0B3B70] text-white shadow-xs">
                  <Building2 className="w-5 h-5 text-[#E59C24]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-[#181F1C]">
                    Super Flame Bharatgas
                  </h3>
                  <p className="text-[11px] text-[#9A6410] font-bold tracking-wide uppercase">
                    Auth. LPG Distributor: Bharat Petroleum Corp. Ltd. (BPCL)
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#2D3833] leading-relaxed">
                <p>
                  As an accredited Bharatgas distributor, we uphold BPCL’s sacred motto: <em className="font-serif text-[#14422E] font-bold">“Cook Food. Serve Love.”</em> We supply certified LPG fuel directly to restaurants, commercial food factories, hotels, institutions, and domestic customers.
                </p>
                <p>
                  Our central distribution facility in <strong className="text-[#181F1C] font-semibold">Pooth Khurd (Delhi 110039)</strong> operates with automated tare-weight verification, electronic leak inspections, and swift replenishment vehicles covering North and West Delhi.
                </p>
              </div>

              {/* Entity Facts */}
              <div className="mt-5 pt-4 border-t border-[#DCD2C0] grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-white border border-[#DCD2C0]">
                  <div className="text-[9px] uppercase tracking-wider text-[#5A6660] font-bold">Principal Entity</div>
                  <div className="text-sm font-serif font-bold text-[#14422E]">Balaji Gas</div>
                  <div className="text-[10px] text-[#5A6660] font-medium">Neeraj Dabas</div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-[#DCD2C0]">
                  <div className="text-[9px] uppercase tracking-wider text-[#5A6660] font-bold">BPCL Accreditation</div>
                  <div className="text-sm font-serif font-bold text-[#0B3B70]">Auth. Distributor</div>
                  <div className="text-[10px] text-[#5A6660] font-medium">All 5 Standard Sizes</div>
                </div>
              </div>

              {/* Location Bar */}
              <div className="mt-4 flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF0DC] border border-[#C4841D]/35 text-xs text-[#181F1C]">
                <MapPin className="w-4 h-4 text-[#C4841D] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#9A6410]">Registered Operating Hub:</span>{' '}
                  <span className="text-[#5A6660]">Plot No 366, Kh No 155, Pooth Khurd, Delhi 110039</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Values with Blur+Zoom */}
          <motion.div 
            className="lg:col-span-6 space-y-3.5"
            initial={{ opacity: 0, scale: 0.94, filter: 'blur(6px)', x: 20 }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)', x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            
            {/* Card 1 */}
            <motion.div 
              className="luxury-card luxury-card-hover p-4 sm:p-5 rounded-2xl border border-[#DCD2C0]"
              whileHover={{ y: -3 }}
            >
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#E2EFE7] text-[#14422E] border border-[#14422E]/20 shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#181F1C] mb-1">
                    “Your Safety Our Priority” Protocol
                  </h4>
                  <p className="text-xs text-[#5A6660] leading-relaxed">
                    Zero tolerance for compromised seals or worn valves. Every cylinder dispatched has passed multi-stage hydrostatic inspection and pre-delivery seal verification.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              className="luxury-card luxury-card-hover p-4 sm:p-5 rounded-2xl border border-[#DCD2C0]"
              whileHover={{ y: -3 }}
            >
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#FAF0DC] text-[#9A6410] border border-[#C4841D]/30 shrink-0">
                  <Flame className="w-5 h-5 text-[#E59C24]" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#181F1C] mb-1">
                    Commercial & Industrial Manifold Specialization
                  </h4>
                  <p className="text-xs text-[#5A6660] leading-relaxed">
                    Custom VOT and LOT manifold banks engineered for restaurants, commercial bakeries, and factories—eliminating fuel freeze and ensuring calorific stability.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              className="luxury-card luxury-card-hover p-4 sm:p-5 rounded-2xl border border-[#DCD2C0]"
              whileHover={{ y: -3 }}
            >
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#E4EEF8] text-[#0B3B70] border border-[#0B3B70]/20 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#181F1C] mb-1">
                    Direct Proprietor & Priority Dispatch Line
                  </h4>
                  <p className="text-xs text-[#5A6660] leading-relaxed">
                    Direct access to knowledgeable energy consultants for cylinder bank sizing, piping safety audits, and scheduled replenishment contracts.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Action Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <motion.button
                onClick={onOpenOrderModal}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#14422E] to-[#1D5A3F] hover:brightness-105 text-white text-xs font-bold uppercase tracking-wider shadow-sm border border-[#C4841D]/40"
              >
                <span>Partner with Us</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E59C24]" />
              </motion.button>

              <motion.a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#14422E] text-xs font-bold border border-[#DCD2C0] hover:bg-[#FAF8F4] shadow-luxury-sm transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C4841D]" />
                <span>Call Neeraj Dabas ({BUSINESS_INFO.rawPhone})</span>
              </motion.a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
