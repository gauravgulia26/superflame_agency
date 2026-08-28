import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Phone, MessageSquare, ShieldCheck, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BUSINESS_INFO, CYLINDER_PRODUCTS } from '../data/businessData';

interface SupplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCylinderSize?: string;
}

export const SupplyRequestModal: React.FC<SupplyModalProps> = ({
  isOpen,
  onClose,
  initialCylinderSize = '19 KG'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    cylinderSize: initialCylinderSize,
    quantity: '2',
    deliveryArea: '',
    customerType: 'Commercial Restaurant / Cafe',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialCylinderSize) {
      setFormData(prev => ({ ...prev, cylinderSize: initialCylinderSize }));
    }
  }, [initialCylinderSize]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#14422E', '#C4841D', '#E59C24', '#0B3B70']
      });
    }, 500);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Super Flame Bharatgas,\nName: ${formData.name || 'Customer'}\n` +
      `Phone: ${formData.phone || 'N/A'}\n` +
      `Type: ${formData.customerType}\n` +
      `Requirement: ${formData.quantity} x ${formData.cylinderSize} cylinder(s)\n` +
      `Delivery Area: ${formData.deliveryArea || 'Delhi'}\n` +
      `Notes: ${formData.notes || 'Please confirm rate & delivery'}`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.rawPhone}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#FAF8F4] rounded-2xl shadow-2xl border border-[#C4841D]/40 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#14422E] via-[#1D5A3F] to-[#0B3B70] text-white p-5 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-white/15 text-[#E59C24] border border-white/20">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg leading-tight text-white">
                Request LPG Supply
              </h3>
              <p className="text-[11px] text-white/80">
                Super Flame Bharatgas • Pooth Khurd, Delhi
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-white/80 hover:text-white hover:bg-white/15 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 text-left">
          {isSubmitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#E2EFE7] text-[#14422E] mx-auto flex items-center justify-center border border-[#14422E]/20 animate-bounce">
                <CheckCircle2 className="w-8 h-8 text-[#14422E]" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-xl text-[#181F1C]">
                  Supply Request Registered!
                </h4>
                <p className="text-xs text-[#5A6660] max-w-xs mx-auto">
                  Our dispatch coordinator will reach out to <strong className="text-[#181F1C]">{formData.phone}</strong> to confirm tariff and delivery.
                </p>
              </div>
              <div className="pt-3 flex flex-col sm:flex-row gap-2.5 justify-center">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#14422E] hover:bg-[#1D5A3F] text-white text-xs font-bold uppercase tracking-wider"
                >
                  Done
                </button>
                <a
                  href={`tel:${BUSINESS_INFO.rawPhone}`}
                  className="px-5 py-2.5 rounded-xl bg-[#FAF8F4] hover:bg-[#EFEAE0] text-[#14422E] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 border border-[#DCD2C0]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C4841D]" />
                  <span>Call {BUSINESS_INFO.rawPhone}</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#181F1C] mb-1">
                    Contact / Business Name *
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#181F1C] mb-1">
                    Cylinder Size
                  </label>
                  <select
                    value={formData.cylinderSize}
                    onChange={(e) => setFormData({ ...formData, cylinderSize: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#DCD2C0] text-xs text-[#181F1C] focus:outline-none focus:ring-2 focus:ring-[#14422E]/30"
                  >
                    {CYLINDER_PRODUCTS.map((p) => (
                      <option key={p.id} value={p.size}>
                        {p.size} ({p.name})
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
                    max="500"
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
                  value={formData.deliveryArea}
                  onChange={(e) => setFormData({ ...formData, deliveryArea: e.target.value })}
                  placeholder="e.g. Pooth Khurd / Bawana / Rohini / Narela"
                  className="w-full px-3 py-2 rounded-xl bg-white border border-[#DCD2C0] text-xs text-[#181F1C] focus:outline-none focus:ring-2 focus:ring-[#14422E]/30"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#181F1C] mb-1">
                  Notes / Specific Requirements (Optional)
                </label>
                <input
                  type="text"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Commercial manifold setup / morning refill"
                  className="w-full px-3 py-2 rounded-xl bg-white border border-[#DCD2C0] text-xs text-[#181F1C] focus:outline-none focus:ring-2 focus:ring-[#14422E]/30"
                />
              </div>

              {/* Actions */}
              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#14422E] to-[#1D5A3F] hover:brightness-105 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-luxury-sm border border-[#C4841D]/40"
                >
                  <Send className="w-3.5 h-3.5 text-[#E59C24]" />
                  <span>Submit Request</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20BE5C] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>

              <div className="pt-2 text-center text-[10px] text-[#5A6660] flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#14422E]" />
                <span>BPCL Authorized Agency Guarantee • 100% Safe Cylinders</span>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
