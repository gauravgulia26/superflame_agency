import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight, Sparkles, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface CalculatorProps {
  onOpenOrderModal: (cylinderSize?: string) => void;
}

interface SectorConfig {
  name: string;
  avgKgPerBurnerHour: number;
  defaultBurners: number;
  defaultHours: number;
  recommendedCylinder: string;
  setupAdvice: string;
}

const SECTORS: Record<string, SectorConfig> = {
  restaurant: {
    name: "Restaurant / Cafe / Dhaba",
    avgKgPerBurnerHour: 0.45,
    defaultBurners: 4,
    defaultHours: 10,
    recommendedCylinder: "19 KG",
    setupAdvice: "2x2 (4-cylinder) VOT automatic changeover manifold for uninterrupted peak cooking."
  },
  cloudKitchen: {
    name: "Cloud Kitchen / High Delivery",
    avgKgPerBurnerHour: 0.50,
    defaultBurners: 6,
    defaultHours: 14,
    recommendedCylinder: "19 KG or 35 KG",
    setupAdvice: "35 KG high-efficiency cylinders to minimize exchange frequency during rush hours."
  },
  bakery: {
    name: "Bakery / Sweet Maker (Halwai)",
    avgKgPerBurnerHour: 0.65,
    defaultBurners: 5,
    defaultHours: 12,
    recommendedCylinder: "35 KG or 47.5 KG",
    setupAdvice: "47.5 KG cylinders with high-flow pressure regulators for deep browning and baking ovens."
  },
  hotel: {
    name: "Banquet Hall / Hotel Complex",
    avgKgPerBurnerHour: 0.70,
    defaultBurners: 12,
    defaultHours: 12,
    recommendedCylinder: "47.5 KG (LOT)",
    setupAdvice: "Centralized LOT manifold bank with external vaporizer to prevent cylinder freezing."
  },
  industrial: {
    name: "Factory / Powder Coating / Forging",
    avgKgPerBurnerHour: 1.20,
    defaultBurners: 8,
    defaultHours: 16,
    recommendedCylinder: "450 KG Maxima or 47.5 KG LOT",
    setupAdvice: "Bharatgas 450 KG Maxima mini-bulk vessel or 8-cylinder LOT manifold system."
  },
  foodTruck: {
    name: "Food Truck / Portable Kiosk",
    avgKgPerBurnerHour: 0.35,
    defaultBurners: 2,
    defaultHours: 8,
    recommendedCylinder: "5 KG or 19 KG",
    setupAdvice: "Compact portable cylinders with high-durability regulators and safety clamps."
  }
};

export const InteractiveLpgCalculator: React.FC<CalculatorProps> = ({ onOpenOrderModal }) => {
  const [selectedSectorKey, setSelectedSectorKey] = useState<string>('restaurant');
  const [burners, setBurners] = useState<number>(4);
  const [hoursPerDay, setHoursPerDay] = useState<number>(10);
  const [daysPerMonth, setDaysPerMonth] = useState<number>(30);

  const currentSector = SECTORS[selectedSectorKey] || SECTORS.restaurant;

  const dailyKg = burners * hoursPerDay * currentSector.avgKgPerBurnerHour;
  const monthlyKg = Math.round(dailyKg * daysPerMonth);

  let recommendedSize = "19 KG";
  let countPerMonth = Math.ceil(monthlyKg / 19);

  if (monthlyKg > 1200) {
    recommendedSize = "450 KG";
    countPerMonth = Math.ceil(monthlyKg / 450);
  } else if (monthlyKg > 500) {
    recommendedSize = "47.5 KG";
    countPerMonth = Math.ceil(monthlyKg / 47.5);
  } else if (monthlyKg > 200) {
    recommendedSize = "35 KG";
    countPerMonth = Math.ceil(monthlyKg / 35);
  } else if (monthlyKg <= 60) {
    recommendedSize = "5 KG";
    countPerMonth = Math.ceil(monthlyKg / 5);
  }

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `Hello Super Flame Bharatgas, I used your LPG Requirement Estimator for my ${currentSector.name}.\n` +
      `Estimated Monthly Consumption: ~${monthlyKg} KG (${countPerMonth} x ${recommendedSize} cylinders).\n` +
      `Please provide best commercial quote and delivery schedule for Delhi.`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.rawPhone}?text=${text}`, '_blank');
  };

  return (
    <section id="calculator" className="py-14 md:py-20 bg-[#EFEAE0]/80 relative overflow-hidden border-t border-b border-[#DCD2C0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Blur+Zoom scroll effect */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-10 space-y-2.5"
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(6px)', y: 20 }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF0DC] border border-[#C4841D]/40 text-xs font-bold uppercase tracking-wider text-[#9A6410]">
            <Calculator className="w-3.5 h-3.5 text-[#C4841D]" />
            <span>Interactive Business Estimator</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#181F1C] font-bold tracking-tight">
            Commercial LPG <span className="italic font-serif text-[#14422E]">Requirement Estimator</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#5A6660] leading-relaxed">
            Estimate your monthly gas volume, optimal cylinder configuration, and avoid unexpected kitchen run-outs.
          </p>
        </motion.div>

        {/* Calculator Grid with Blur+Zoom */}
        <motion.div 
          className="luxury-card rounded-2xl p-5 sm:p-8 border border-[#C4841D]/35 shadow-luxury-md"
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(6px)', y: 20 }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Inputs */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Sector Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#181F1C] mb-2">
                  1. Select Establishment Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {Object.entries(SECTORS).map(([key, sec]) => (
                    <button
                      key={key}
                      onClick={() => {
                        setSelectedSectorKey(key);
                        setBurners(sec.defaultBurners);
                        setHoursPerDay(sec.defaultHours);
                      }}
                      className={`p-2.5 rounded-xl text-left transition-all border text-xs font-medium ${
                        selectedSectorKey === key
                          ? 'bg-[#14422E] text-white border-[#14422E] shadow-sm font-bold'
                          : 'bg-white hover:bg-[#FAF8F4] text-[#181F1C] border-[#DCD2C0]'
                      }`}
                    >
                      <div className="truncate">{sec.name.split('/')[0]}</div>
                      <div className="text-[9px] opacity-80 truncate">{sec.recommendedCylinder}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sliders: Burners & Hours */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#FAF8F4] p-4 rounded-xl border border-[#DCD2C0]">
                
                {/* Burners Slider */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-bold text-[#181F1C]">
                    <span>Burners / Appliances:</span>
                    <span className="font-mono text-sm text-[#14422E] font-bold bg-[#E2EFE7] px-2 py-0.5 rounded border border-[#14422E]/20">
                      {burners}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={burners}
                    onChange={(e) => setBurners(parseInt(e.target.value))}
                    className="w-full h-2 bg-[#DCD2C0] rounded-lg appearance-none cursor-pointer accent-[#14422E]"
                  />
                  <div className="flex justify-between text-[9px] text-[#5A6660]">
                    <span>1 burner</span>
                    <span>30 burners</span>
                  </div>
                </div>

                {/* Hours Slider */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-bold text-[#181F1C]">
                    <span>Operating Hours / Day:</span>
                    <span className="font-mono text-sm text-[#9A6410] font-bold bg-[#FAF0DC] px-2 py-0.5 rounded border border-[#C4841D]/30">
                      {hoursPerDay} hrs
                    </span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="24"
                    value={hoursPerDay}
                    onChange={(e) => setHoursPerDay(parseInt(e.target.value))}
                    className="w-full h-2 bg-[#DCD2C0] rounded-lg appearance-none cursor-pointer accent-[#14422E]"
                  />
                  <div className="flex justify-between text-[9px] text-[#5A6660]">
                    <span>2 hrs</span>
                    <span>24 hrs (Continuous)</span>
                  </div>
                </div>

              </div>

              {/* Days Per Month */}
              <div className="flex items-center justify-between text-xs text-[#181F1C] bg-[#FAF8F4] p-3 rounded-xl border border-[#DCD2C0]">
                <span className="font-semibold text-[#5A6660]">Operational Days / Month:</span>
                <div className="flex gap-2">
                  {[26, 28, 30].map((d) => (
                    <button
                      key={d}
                      onClick={() => setDaysPerMonth(d)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                        daysPerMonth === d
                          ? 'bg-[#14422E] text-white'
                          : 'bg-white text-[#5A6660] hover:bg-[#FAF8F4] border border-[#DCD2C0]'
                      }`}
                    >
                      {d} Days
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Output Recommendation Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#14422E] via-[#1D5A3F] to-[#0B3B70] text-white p-5 sm:p-6 rounded-2xl shadow-luxury-lg border border-[#C4841D]/40 flex flex-col justify-between space-y-5">
              
              <div>
                <div className="flex items-center justify-between border-b border-white/20 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#E59C24]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#E59C24]">
                      Estimated LPG Volume
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider bg-white/10 px-2.5 py-0.5 rounded-full text-white/90">
                    Monthly
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                    ~{monthlyKg.toLocaleString()} <span className="text-base font-serif font-normal text-white/80">KG / Month</span>
                  </div>
                  <div className="text-xs text-white/80">
                    Average Daily: <strong className="text-white font-mono">{dailyKg.toFixed(1)} KG/day</strong>
                  </div>
                </div>

                {/* Configuration Box */}
                <div className="mt-4 p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 space-y-1.5">
                  <div className="text-[10px] uppercase tracking-wider text-[#E59C24] font-bold">
                    Recommended Configuration
                  </div>
                  <div className="text-base font-serif font-bold text-white">
                    {countPerMonth} × {recommendedSize} Cylinders
                  </div>
                  <p className="text-xs text-white/85 leading-relaxed">
                    {currentSector.setupAdvice}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  onClick={handleWhatsAppShare}
                  className="w-full py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20BE5C] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Estimate to WhatsApp</span>
                </button>

                <button
                  onClick={() => onOpenOrderModal(recommendedSize)}
                  className="w-full py-2.5 rounded-xl bg-white text-[#14422E] hover:bg-[#FAF8F4] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Book Supply for {recommendedSize}</span>
                  <ArrowRight className="w-4 h-4 text-[#14422E]" />
                </button>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
