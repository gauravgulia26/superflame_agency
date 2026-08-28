import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Factory, UtensilsCrossed, CheckCircle2, Phone, ArrowUpRight, Wrench } from 'lucide-react';
import { BUSINESS_INFO, COMMERCIAL_SOLUTIONS } from '../data/businessData';

interface CommercialBulkProps {
  onOpenOrderModal: (cylinderSize?: string) => void;
}

export const CommercialBulkSection: React.FC<CommercialBulkProps> = ({ onOpenOrderModal }) => {
  return (
    <section id="commercial" className="py-14 md:py-20 bg-[#F3EFE6] relative border-t border-[#DCD2C0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Blur+Zoom scroll effect */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12 space-y-2.5"
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(6px)', y: 20 }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF0DC] border border-[#C4841D]/40 text-xs font-bold uppercase tracking-wider text-[#9A6410]">
            <Flame className="w-3.5 h-3.5 text-[#E59C24]" />
            <span>Enterprise & B2B Solutions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#181F1C] font-bold tracking-tight">
            Commercial Bulk Supply & <br className="hidden sm:inline" />
            <span className="italic font-serif text-[#14422E]">Turnkey Manifold</span> Systems
          </h2>
          <p className="text-xs sm:text-sm text-[#5A6660] leading-relaxed">
            Eliminate kitchen downtime, cylinder freezing, and erratic pressure. We engineer certified Liquid Off-Take (LOT) and Vapour Off-Take (VOT) gas banks backed by priority BPCL logistics.
          </p>
        </motion.div>

        {/* 3 Industry Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {COMMERCIAL_SOLUTIONS.map((sol, idx) => (
            <motion.div
              key={idx}
              className="luxury-card luxury-card-hover rounded-2xl p-5 sm:p-6 border border-[#DCD2C0] flex flex-col justify-between"
              initial={{ opacity: 0, scale: 0.94, filter: 'blur(6px)', y: 20 }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <div className="p-2.5 rounded-xl bg-[#FAF8F4] text-[#14422E] border border-[#DCD2C0] shadow-xs">
                    {idx === 0 && <UtensilsCrossed className="w-5 h-5" />}
                    {idx === 1 && <Flame className="w-5 h-5 text-[#E59C24]" />}
                    {idx === 2 && <Factory className="w-5 h-5 text-[#0B3B70]" />}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#9A6410] bg-[#FAF0DC] px-2.5 py-0.5 rounded-full border border-[#C4841D]/40">
                    {sol.tag}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-lg text-[#181F1C] mb-1.5">
                  {sol.title}
                </h3>
                <p className="text-xs text-[#5A6660] leading-relaxed mb-4">
                  {sol.description}
                </p>

                <div className="space-y-1.5 border-t border-[#DCD2C0] pt-3.5">
                  {sol.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-1.5 text-xs text-[#2D3833]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#14422E] shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3.5 border-t border-[#DCD2C0]">
                <button
                  onClick={() => onOpenOrderModal(idx === 2 ? '450 KG' : idx === 1 ? '47.5 KG' : '19 KG')}
                  className="w-full py-2.5 rounded-xl bg-[#FAF8F4] hover:bg-[#14422E] hover:text-white text-[#14422E] text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 border border-[#DCD2C0]"
                >
                  <span>Request Bulk Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E59C24]" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Comparison Banner with Blur+Zoom */}
        <motion.div 
          className="luxury-card rounded-2xl p-5 sm:p-7 border border-[#C4841D]/35 shadow-luxury-md"
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(6px)', y: 20 }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#9A6410]">
                <Wrench className="w-4 h-4 text-[#C4841D]" />
                <span>Engineered for Maximum Efficiency</span>
              </div>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#181F1C]">
                Liquid Off-Take (LOT) & 450 KG Maxima Advantages
              </h3>
              <p className="text-xs text-[#5A6660] leading-relaxed">
                Traditional vapour cylinders suffer from frost condensation and up to 10% residual gas wastage during winters. Our LOT installations draw liquid fuel into external warm water vaporizers—extracting 100% of the gas at continuous full pressure.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-white border border-[#DCD2C0]">
                  <div className="text-xs font-bold text-[#14422E] font-serif">100% Fuel Extraction</div>
                  <div className="text-[10px] text-[#5A6660] mt-0.5">Zero unburnt LPG residue left behind</div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#DCD2C0]">
                  <div className="text-xs font-bold text-[#14422E] font-serif">Constant High Flow</div>
                  <div className="text-[10px] text-[#5A6660] mt-0.5">No pressure drops during peak hours</div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#DCD2C0]">
                  <div className="text-xs font-bold text-[#14422E] font-serif">PESO & BPCL Certified</div>
                  <div className="text-[10px] text-[#5A6660] mt-0.5">Fully audited safety valving & manifold</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-5 rounded-2xl bg-gradient-to-br from-[#14422E] via-[#1D5A3F] to-[#0B3B70] text-white text-center shadow-luxury-md space-y-3 border border-[#C4841D]/40">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#E59C24]">
                Commercial Bulk Hotline
              </div>
              <div className="font-serif font-bold text-xl text-white">
                Neeraj Dabas
              </div>
              <div className="text-xs text-white/80">
                Direct Consultations for Hotels, Caterers & Industrial Plants
              </div>
              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-[#14422E] text-xs font-bold uppercase tracking-wider hover:bg-[#FAF8F4] transition-colors shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-[#14422E]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
