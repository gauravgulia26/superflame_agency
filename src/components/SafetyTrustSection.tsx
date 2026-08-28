import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, AlertTriangle, Phone, Flame, Lock, Scale } from 'lucide-react';
import { SAFETY_PROTOCOLS, BUSINESS_INFO } from '../data/businessData';

export const SafetyTrustSection: React.FC = () => {
  return (
    <section id="safety" className="py-14 md:py-20 bg-[#FAF8F4]/80 relative border-t border-b border-[#DCD2C0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Blur+Zoom scroll effect */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12 space-y-2.5"
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(6px)', y: 20 }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E2EFE7] border border-[#14422E]/20 text-xs font-bold uppercase tracking-wider text-[#14422E]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#14422E]" />
            <span>BPCL Certified Safety Protocols</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#181F1C] font-bold tracking-tight">
            “Your Safety Our Priority” <br className="hidden sm:inline" />
            <span className="italic font-serif text-[#14422E]">5-Star Standard</span> of Energy Delivery
          </h2>
          <p className="text-xs sm:text-sm text-[#5A6660] leading-relaxed">
            As an authorized BPCL distributor, every single cylinder dispatched from our Pooth Khurd hub follows rigorous government safety certifications.
          </p>
        </motion.div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {SAFETY_PROTOCOLS.map((proto, idx) => (
            <motion.div
              key={idx}
              className="luxury-card luxury-card-hover rounded-2xl p-5 sm:p-6 border border-[#DCD2C0] relative flex flex-col justify-between"
              initial={{ opacity: 0, scale: 0.94, filter: 'blur(6px)', y: 20 }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <span className="font-serif font-bold text-2xl text-[#C0B08E] group-hover:text-[#14422E] transition-colors">
                    {proto.step}
                  </span>
                  <div className="p-2 rounded-xl bg-[#FAF8F4] text-[#14422E] border border-[#C4841D]/30 shadow-xs">
                    {idx === 0 && <Scale className="w-4 h-4" />}
                    {idx === 1 && <Flame className="w-4 h-4 text-[#E59C24]" />}
                    {idx === 2 && <Lock className="w-4 h-4" />}
                    {idx === 3 && <ShieldCheck className="w-4 h-4" />}
                  </div>
                </div>

                <h3 className="font-serif font-bold text-base text-[#181F1C] mb-1.5">
                  {proto.title}
                </h3>
                <p className="text-xs text-[#5A6660] leading-relaxed">
                  {proto.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#DCD2C0] flex items-center gap-1.5 text-[11px] font-bold text-[#14422E]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Standard</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Emergency Safety Card with Blur+Zoom */}
        <motion.div 
          className="luxury-card-dark rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden shadow-luxury-lg"
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(6px)', y: 20 }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#C4841D]/20 to-transparent rounded-bl-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8 space-y-3.5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E59C24]">
                <AlertTriangle className="w-4 h-4" />
                <span>Important Safety Guidelines</span>
              </div>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
                Essential LPG Safety Practices for Commercial Kitchens & Homes
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-white/90">
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E59C24] mt-1.5 shrink-0"></span>
                  <span>Always keep cylinders upright in well-ventilated locations above floor level.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E59C24] mt-1.5 shrink-0"></span>
                  <span>Check rubber hose tubes (Suraksha) regularly; replace every 5 years.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E59C24] mt-1.5 shrink-0"></span>
                  <span>Turn off cylinder regulator valve at the close of commercial business hours.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E59C24] mt-1.5 shrink-0"></span>
                  <span>In case of gas smell, do not operate electrical switches or open flames.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-center space-y-2.5">
              <div className="text-[10px] uppercase tracking-wider text-[#E59C24] font-bold">
                Emergency Dispatch & Safety Helpline
              </div>
              <div className="text-xl font-bold font-mono text-white">
                {BUSINESS_INFO.phone}
              </div>
              <div className="text-[10px] text-white/80">
                National LPG Emergency Helpline: <strong className="text-white">1906</strong>
              </div>
              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="w-full inline-flex items-center justify-center gap-2 py-2 rounded-lg bg-[#E59C24] text-[#181F1C] text-xs font-bold uppercase tracking-wider hover:bg-yellow-400 transition-colors shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Emergency Line</span>
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
