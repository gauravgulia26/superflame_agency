import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Flame, 
  CheckCircle2, 
  Layers, 
  Gauge, 
  ArrowUpRight, 
  Zap, 
  ThermometerSnowflake,
  ShieldAlert
} from 'lucide-react';
import { COMMERCIAL_SOLUTIONS } from '../data/businessData';

interface CommercialProps {
  onOpenOrderModal: (size?: string) => void;
}

export const CommercialBulkSection: React.FC<CommercialProps> = ({ onOpenOrderModal }) => {
  const [selectedTab, setSelectedTab] = useState<'vot' | 'lot' | 'maxima'>('lot');

  return (
    <section id="commercial" className="py-10 sm:py-20 bg-[#FAF8F4] relative overflow-hidden border-t border-[#DCD2C0]">
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
            <Building2 className="w-3.5 h-3.5 text-[#C4841D]" />
            <span>Industrial & Bulk Energy Infrastructure</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl text-[#181F1C] font-bold tracking-tight">
            Commercial & Bulk <span className="italic font-serif text-[#14422E]">Gas Solutions</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#5A6660] leading-relaxed">
            Eliminate kitchen downtime, cylinder freezing, and erratic pressure. We engineer certified Liquid Off-Take (LOT) and Vapour Off-Take (VOT) gas banks backed by priority Super Gas logistics.
          </p>
        </motion.div>

        {/* 3 Industry Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6 mb-8 sm:mb-14">
          {COMMERCIAL_SOLUTIONS.map((sol, idx) => (
            <motion.div
              key={idx}
              className="luxury-card rounded-2xl p-4 sm:p-6 border border-[#DCD2C0] shadow-luxury-sm flex flex-col justify-between text-left"
              initial={{ opacity: 0, scale: 0.94, filter: 'blur(6px)', y: 20 }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
                  <span className="text-[10px] sm:text-xs font-mono font-bold text-[#14422E] bg-[#E2EFE7] px-2 py-0.5 rounded-md border border-[#14422E]/20">
                    {sol.tag}
                  </span>
                  <Flame className="w-4 h-4 text-[#E59C24]" />
                </div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#181F1C] mb-1">
                  {sol.title}
                </h3>
                <p className="text-xs text-[#5A6660] leading-relaxed mb-3">
                  {sol.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-[#DCD2C0]">
                  {sol.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-1.5 text-xs text-[#2D3833]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#14422E] shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#DCD2C0]">
                <button
                  onClick={() => onOpenOrderModal(sol.tag.split(' ')[0])}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-xl bg-white hover:bg-[#FAF8F4] text-[#14422E] text-xs font-bold border border-[#DCD2C0] transition-colors"
                >
                  <span>Inquire for {sol.title.split(' ')[0]}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C4841D]" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Deep Dive System Selector */}
        <motion.div 
          className="luxury-card rounded-2xl p-4 sm:p-8 border border-[#C4841D]/35 shadow-luxury-md text-left"
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(6px)', y: 20 }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Header Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 sm:pb-4 border-b border-[#DCD2C0] gap-2.5">
            <div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-[#9A6410]">
                Engineering Architecture
              </div>
              <h3 className="font-serif font-bold text-lg sm:text-2xl text-[#181F1C]">
                Commercial Manifolds & Bulk Vessel Systems
              </h3>
            </div>

            <div className="flex items-center gap-1 bg-[#FAF8F4] p-1 rounded-xl border border-[#DCD2C0] self-start sm:self-auto">
              <button
                onClick={() => setSelectedTab('lot')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  selectedTab === 'lot' ? 'bg-[#14422E] text-white shadow-xs' : 'text-[#5A6660] hover:text-[#14422E]'
                }`}
              >
                LOT (Liquid Off-Take)
              </button>
              <button
                onClick={() => setSelectedTab('vot')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  selectedTab === 'vot' ? 'bg-[#14422E] text-white shadow-xs' : 'text-[#5A6660] hover:text-[#14422E]'
                }`}
              >
                VOT (Vapour Off-Take)
              </button>
              <button
                onClick={() => setSelectedTab('maxima')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  selectedTab === 'maxima' ? 'bg-[#14422E] text-white shadow-xs' : 'text-[#5A6660] hover:text-[#14422E]'
                }`}
              >
                450 KG Bulk Tank
              </button>
            </div>
          </div>

          {/* System Tab Details */}
          <div className="mt-4 sm:mt-6">
            {selectedTab === 'lot' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
                <div className="lg:col-span-7 space-y-2.5">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#E2EFE7] text-[#14422E] text-xs font-bold">
                    <Zap className="w-3.5 h-3.5 text-[#14422E]" />
                    <span>Recommended for High-Consumption Kitchens & Bakeries</span>
                  </div>
                  <h4 className="font-serif font-bold text-base sm:text-xl text-[#181F1C]">
                    Liquid Off-Take (LOT) with External Vaporizer
                  </h4>
                  <p className="text-xs text-[#5A6660] leading-relaxed">
                    Draws LPG in liquid phase from 47.5 kg cylinders and converts it to vapour through an external hot-water bath vaporizer. Prevents frost buildup on cylinders and extracts 100% of the gas even during severe Delhi winter temperatures.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                    <div className="p-2 rounded-xl bg-white border border-[#DCD2C0]">
                      <div className="font-bold text-[#14422E]">Zero Freeze-Up</div>
                      <div className="text-[10px] text-[#5A6660]">100% extraction efficiency</div>
                    </div>
                    <div className="p-2 rounded-xl bg-white border border-[#DCD2C0]">
                      <div className="font-bold text-[#14422E]">Space Saving</div>
                      <div className="text-[10px] text-[#5A6660]">Requires fewer cylinders on site</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 p-4 rounded-xl bg-white border border-[#DCD2C0] text-center space-y-2">
                  <Gauge className="w-8 h-8 text-[#14422E] mx-auto" />
                  <div className="text-xs font-bold text-[#14422E] font-serif">PESO Certified Standards</div>
                  <p className="text-[11px] text-[#5A6660]">
                    Complete manifold engineering, safety non-return valves, explosion-proof pressure regulators, and periodic safety audits.
                  </p>
                  <button
                    onClick={() => onOpenOrderModal('47.5 KG')}
                    className="w-full py-2 rounded-xl bg-gradient-to-r from-[#14422E] to-[#1D5A3F] text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:brightness-105 transition-all"
                  >
                    Request LOT Setup
                  </button>
                </div>
              </div>
            )}

            {selectedTab === 'vot' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
                <div className="lg:col-span-7 space-y-2.5">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#FAF0DC] text-[#9A6410] text-xs font-bold">
                    <Layers className="w-3.5 h-3.5 text-[#C4841D]" />
                    <span>Cost-Effective for Restaurants & Cloud Kitchens</span>
                  </div>
                  <h4 className="font-serif font-bold text-base sm:text-xl text-[#181F1C]">
                    Vapour Off-Take (VOT) Direct Manifold System
                  </h4>
                  <p className="text-xs text-[#5A6660] leading-relaxed">
                    Natural vapour withdrawal from 19kg and 35kg cylinders connected via 2x2, 2x4, or 4x4 automatic changeover manifolds. Simple installation, minimal maintenance, and zero electricity requirements for smaller commercial cooking applications.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                    <div className="p-2 rounded-xl bg-white border border-[#DCD2C0]">
                      <div className="font-bold text-[#14422E]">Low Setup Cost</div>
                      <div className="text-[10px] text-[#5A6660]">No external vaporizer required</div>
                    </div>
                    <div className="p-2 rounded-xl bg-white border border-[#DCD2C0]">
                      <div className="font-bold text-[#14422E]">Auto-Changeover</div>
                      <div className="text-[10px] text-[#5A6660]">Zero cooking interruption</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 p-4 rounded-xl bg-white border border-[#DCD2C0] text-center space-y-2">
                  <ThermometerSnowflake className="w-8 h-8 text-[#0B3B70] mx-auto" />
                  <div className="text-xs font-bold text-[#0B3B70] font-serif">Quick 24-Hour Turnkey Setup</div>
                  <p className="text-[11px] text-[#5A6660]">
                    Ideal for cloud kitchens, restaurants, sweet shops, and dhabas with moderate hourly gas flow.
                  </p>
                  <button
                    onClick={() => onOpenOrderModal('19 KG')}
                    className="w-full py-2 rounded-xl bg-gradient-to-r from-[#14422E] to-[#1D5A3F] text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:brightness-105 transition-all"
                  >
                    Request VOT Setup
                  </button>
                </div>
              </div>
            )}

            {selectedTab === 'maxima' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
                <div className="lg:col-span-7 space-y-2.5">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#FAF0DC] text-[#9A6410] text-xs font-bold">
                    <ShieldAlert className="w-3.5 h-3.5 text-[#C4841D]" />
                    <span>Maximum Economy for Large Industrial Plants</span>
                  </div>
                  <h4 className="font-serif font-bold text-base sm:text-xl text-[#181F1C]">
                    450 KG Super Gas Bulk Mini-Tank Vessel
                  </h4>
                  <p className="text-xs text-[#5A6660] leading-relaxed">
                    A stationary or transportable 450kg pressure vessel replacing 24 standard commercial cylinders. Eliminates cylinder handling, reduces manpower requirements, and provides the highest tariff savings with automated tanker replenishment.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                    <div className="p-2 rounded-xl bg-white border border-[#DCD2C0]">
                      <div className="font-bold text-[#14422E]">Bulk Tariff Discount</div>
                      <div className="text-[10px] text-[#5A6660]">Maximum commercial savings</div>
                    </div>
                    <div className="p-2 rounded-xl bg-white border border-[#DCD2C0]">
                      <div className="font-bold text-[#14422E]">Zero Manual Handling</div>
                      <div className="text-[10px] text-[#5A6660]">Refilled via dedicated tanker</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 p-4 rounded-xl bg-white border border-[#DCD2C0] text-center space-y-2">
                  <Building2 className="w-8 h-8 text-[#C4841D] mx-auto" />
                  <div className="text-xs font-bold text-[#181F1C] font-serif">Industrial Supply Contract</div>
                  <p className="text-[11px] text-[#5A6660]">
                    Dedicated bulk tanker dispatch and scheduled refills for industrial plants in Bawana, Narela, and Delhi NCR.
                  </p>
                  <button
                    onClick={() => onOpenOrderModal('450 KG')}
                    className="w-full py-2 rounded-xl bg-gradient-to-r from-[#14422E] to-[#1D5A3F] text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:brightness-105 transition-all"
                  >
                    Inquire for 450kg Bulk Tank
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
