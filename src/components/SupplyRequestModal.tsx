import React, { useState, useEffect } from 'react';
import { X, MessageSquare, ShieldCheck, Phone } from 'lucide-react';
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

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#14422E', '#C4841D', '#E59C24', '#25D366']
    });

    const text = encodeURIComponent(
      `Hello Balaji Gas (Super Gas Dealer),\n` +
      `👤 Name: ${formData.name || 'Customer'}\n` +
      `📞 Phone: ${formData.phone || 'N/A'}\n` +
      `🏢 Type: ${formData.customerType}\n` +
      `🛢️ Requirement: ${formData.quantity} x ${formData.cylinderSize} cylinder(s)\n` +
      `📍 Delivery Area: ${formData.deliveryArea || 'Delhi'}\n` +
      `📝 Notes: ${formData.notes || 'Please confirm rate & delivery'}`
    );

    // Open WhatsApp
    window.open(`https://wa.me/${BUSINESS_INFO.rawPhone}?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#FAF8F4] rounded-2xl shadow-2xl border border-[#C4841D]/40 overflow-hidden my-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#14422E] via-[#1D5A3F] to-[#0B3B70] text-white p-4 sm:p-5 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <img
              src="/images/balaji_gas_logo.svg"
              alt="Balaji Gas Logo"
              className="w-10 h-10 object-contain rounded-xl shadow-xs"
            />
            <div>
              <h3 className="font-serif font-bold text-base sm:text-lg leading-tight text-white">
                Request Super Gas Supply
              </h3>
              <p className="text-[10px] sm:text-[11px] text-white/80">
                {BUSINESS_INFO.brandName} • Prop: {BUSINESS_INFO.proprietor}
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
        <div className="p-4 sm:p-6">
          <form onSubmit={handleWhatsAppSubmit} className="space-y-3">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
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
                Notes / Special Requirements (Optional)
              </label>
              <input
                type="text"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="e.g. Commercial manifold setup / urgent refill"
                className="w-full px-3 py-2 rounded-xl bg-white border border-[#DCD2C0] text-xs text-[#181F1C] focus:outline-none focus:ring-2 focus:ring-[#14422E]/30"
              />
            </div>

            {/* Direct WhatsApp Action Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20BE5C] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md active:scale-[0.98] border border-white/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Order via WhatsApp</span>
              </button>
            </div>

            {/* Quick Call Link */}
            <div className="pt-1 flex items-center justify-between text-[11px] text-[#5A6660] border-t border-[#DCD2C0]">
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#14422E]" />
                <span>Super Gas Authorized Dealer</span>
              </div>
              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="font-bold text-[#14422E] hover:underline flex items-center gap-1"
              >
                <Phone className="w-3 h-3 text-[#C4841D]" />
                <span>Call {BUSINESS_INFO.rawPhone}</span>
              </a>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};
