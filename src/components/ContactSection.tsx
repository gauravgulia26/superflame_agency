import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare, ArrowUpRight, ShieldCheck, Map } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BUSINESS_INFO, CYLINDER_PRODUCTS } from '../data/businessData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    establishmentType: 'Restaurant / Cafe',
    cylinderSize: '19 KG',
    quantity: '2',
    address: '',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#14422E', '#C4841D', '#E59C24', '#0B3B70']
      });
    }, 500);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Super Flame Bharatgas,\nName: ${formData.name || 'Customer'}\n` +
      `Phone: ${formData.phone || 'N/A'}\n` +
      `Establishment: ${formData.establishmentType}\n` +
      `Cylinder Size: ${formData.cylinderSize} (Qty: ${formData.quantity})\n` +
      `Delivery Area: ${formData.address || 'Delhi'}\n` +
      `Notes: ${formData.notes || 'Looking for commercial LPG supply'}`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.rawPhone}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-14 md:py-20 bg-[#F3EFE6] relative overflow-hidden">
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
            <MapPin className="w-3.5 h-3.5 text-[#C4841D]" />
            <span>Direct Business Communications</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#181F1C] font-bold tracking-tight">
            Connect with <span className="italic font-serif text-[#14422E]">Super Flame Bharatgas</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#5A6660] leading-relaxed">
            Reach out to our Pooth Khurd hub for commercial bulk quotes, immediate refills, new connection setup, or gas bank piping consultations.
          </p>
        </motion.div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Details Card */}
          <motion.div 
            className="lg:col-span-5 space-y-5"
            initial={{ opacity: 0, scale: 0.94, filter: 'blur(6px)', x: -20 }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)', x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="luxury-card rounded-2xl p-5 sm:p-7 border border-[#C4841D]/35 shadow-luxury-md space-y-5">
              
              <div className="border-b border-[#DCD2C0] pb-3.5">
                <div className="text-[10px] uppercase tracking-widest text-[#9A6410] font-bold">
                  Authorized BPCL Agency
                </div>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#181F1C]">
                  {BUSINESS_INFO.brandName}
                </h3>
                <div className="text-xs text-[#14422E] font-bold mt-0.5">
                  Balaji Gas • Proprietor: {BUSINESS_INFO.proprietor}
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#E2EFE7] text-[#14422E] border border-[#14422E]/20 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#5A6660]">
                    Direct Phone / WhatsApp
                  </div>
                  <a
                    href={`tel:${BUSINESS_INFO.rawPhone}`}
                    className="text-base sm:text-lg font-mono font-bold text-[#14422E] hover:text-[#9A6410] transition-colors block"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <div className="text-[11px] text-[#5A6660]">Immediate Commercial Dispatch Line</div>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#FAF0DC] text-[#9A6410] border border-[#C4841D]/30 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#5A6660]">
                    Official Distribution Hub
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#181F1C]">
                    {BUSINESS_INFO.address}
                  </div>
                  <div className="text-[11px] text-[#5A6660] mt-0.5">Pooth Khurd, Delhi 110039</div>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#E4EEF8] text-[#0B3B70] border border-[#0B3B70]/20 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#5A6660]">
                    Operational Hours
                  </div>
                  <div className="text-xs text-[#181F1C] font-semibold">
                    Mon – Sat: 8:00 AM – 8:00 PM
                  </div>
                  <div className="text-[11px] text-[#5A6660]">
                    Sunday: 9:00 AM – 5:00 PM (24/7 Bulk Emergency Dispatch)
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={`tel:${BUSINESS_INFO.rawPhone}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-[#14422E] to-[#1D5A3F] text-white text-xs font-bold uppercase tracking-wider hover:brightness-105 transition-all shadow-sm border border-[#C4841D]/40"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${BUSINESS_INFO.googleMapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-[#14422E] text-xs font-bold uppercase tracking-wider hover:bg-[#FAF8F4] transition-all border border-[#DCD2C0]"
                >
                  <Map className="w-3.5 h-3.5 text-[#9A6410]" />
                  <span>Get Directions</span>
                </a>
              </div>

            </div>

            {/* Service Zones */}
            <div className="luxury-card rounded-2xl p-4 sm:p-5 border border-[#DCD2C0]">
              <div className="text-xs font-bold uppercase tracking-wider text-[#181F1C] mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#14422E]" />
                <span>Primary Delivery Service Zones</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {BUSINESS_INFO.coverageAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] px-2 py-0.5 rounded-md bg-white text-[#2D3833] border border-[#DCD2C0] font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form & Map */}
          <motion.div 
            className="lg:col-span-7 space-y-5"
            initial={{ opacity: 0, scale: 0.94, filter: 'blur(6px)', x: 20 }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)', x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="luxury-card rounded-2xl p-5 sm:p-7 border border-[#C4841D]/35 shadow-luxury-md">
              
              <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-[#DCD2C0]">
                <div>
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#181F1C]">
                    Request LPG Supply / Price Quote
                  </h3>
                  <p className="text-xs text-[#5A6660]">
                    Immediate response from our Pooth Khurd coordinator
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#25D366]/15 text-[#14422E] text-xs font-bold hover:bg-[#25D366]/25 transition-colors border border-[#25D366]/30"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Quote</span>
                </button>
              </div>

              {isSubmitted ? (
                <div className="py-8 text-center space-y-3.5">
                  <div className="w-12 h-12 rounded-full bg-[#E2EFE7] text-[#14422E] mx-auto flex items-center justify-center border border-[#14422E]/20 animate-bounce">
                    <CheckCircle2 className="w-7 h-7 text-[#14422E]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif font-bold text-xl text-[#181F1C]">
                      Inquiry Dispatched Successfully!
                    </h4>
                    <p className="text-xs text-[#5A6660] max-w-sm mx-auto">
                      Thank you. Our coordinator from Super Flame Bharatgas (Pooth Khurd) will call <strong className="text-[#181F1C]">{formData.phone}</strong> shortly.
                    </p>
                  </div>
                  <div className="pt-2 flex justify-center gap-2.5">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-4 py-2 rounded-xl bg-[#14422E] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1D5A3F] transition-all"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#181F1C] mb-1">
                        Business / Contact Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Royal Restaurant / Gaurav"
                        className="w-full px-3 py-2 rounded-xl bg-white border border-[#DCD2C0] text-xs text-[#181F1C] focus:outline-none focus:ring-2 focus:ring-[#14422E]/30"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#181F1C] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 98998XXXXX"
                        className="w-full px-3 py-2 rounded-xl bg-white border border-[#DCD2C0] text-xs text-[#181F1C] focus:outline-none focus:ring-2 focus:ring-[#14422E]/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#181F1C] mb-1">
                        Type
                      </label>
                      <select
                        value={formData.establishmentType}
                        onChange={(e) => setFormData({ ...formData, establishmentType: e.target.value })}
                        className="w-full px-2.5 py-2 rounded-xl bg-white border border-[#DCD2C0] text-xs text-[#181F1C] focus:outline-none focus:ring-2 focus:ring-[#14422E]/30"
                      >
                        <option value="Restaurant / Cafe">Restaurant / Cafe</option>
                        <option value="Cloud Kitchen">Cloud Kitchen</option>
                        <option value="Bakery / Halwai">Bakery / Halwai</option>
                        <option value="Hotel / Banquet">Hotel / Banquet</option>
                        <option value="Industrial / Factory">Industrial / Factory</option>
                        <option value="Domestic / Home">Domestic / Home</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#181F1C] mb-1">
                        Cylinder Size
                      </label>
                      <select
                        value={formData.cylinderSize}
                        onChange={(e) => setFormData({ ...formData, cylinderSize: e.target.value })}
                        className="w-full px-2.5 py-2 rounded-xl bg-white border border-[#DCD2C0] text-xs text-[#181F1C] focus:outline-none focus:ring-2 focus:ring-[#14422E]/30"
                      >
                        {CYLINDER_PRODUCTS.map((p) => (
                          <option key={p.id} value={p.size}>
                            {p.size}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#181F1C] mb-1">
                        Quantity
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="200"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-white border border-[#DCD2C0] text-xs text-[#181F1C] focus:outline-none focus:ring-2 focus:ring-[#14422E]/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#181F1C] mb-1">
                      Delivery Location in Delhi NCR *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="e.g. Pooth Khurd / Bawana Industrial / Rohini Sector 18"
                      className="w-full px-3 py-2 rounded-xl bg-white border border-[#DCD2C0] text-xs text-[#181F1C] focus:outline-none focus:ring-2 focus:ring-[#14422E]/30"
                    />
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#14422E] to-[#1D5A3F] text-white text-xs font-bold uppercase tracking-wider hover:brightness-105 transition-all shadow-sm border border-[#C4841D]/40 disabled:opacity-60"
                    >
                      <span>Submit Request</span>
                      <Send className="w-3.5 h-3.5 text-[#E59C24]" />
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#20BE5C] transition-colors shadow-xs"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Instant WhatsApp</span>
                    </button>
                  </div>

                </form>
              )}

            </div>

            {/* Embedded Map */}
            <div className="luxury-card rounded-2xl overflow-hidden border border-[#DCD2C0] shadow-luxury-sm">
              <div className="p-2.5 bg-[#FAF8F4] border-b border-[#DCD2C0] flex items-center justify-between text-xs font-bold text-[#181F1C]">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C4841D]" />
                  <span>Pooth Khurd, Delhi 110039 Location Map</span>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${BUSINESS_INFO.googleMapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#14422E] hover:underline flex items-center gap-1 text-[10px]"
                >
                  <span>Open Maps</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
              <div className="h-56 w-full bg-[#EAE3D5]">
                <iframe
                  title="Super Flame Bharatgas Pooth Khurd Delhi Map"
                  src="https://maps.google.com/maps?q=Pooth+Khurd+Delhi+110039&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
