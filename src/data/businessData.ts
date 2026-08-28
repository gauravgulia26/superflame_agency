export interface CylinderProduct {
  id: string;
  size: string;
  weightNumber: number;
  unit: string;
  name: string;
  tagline: string;
  subtitle: string;
  category: 'Domestic & Compact' | 'Commercial Standard' | 'Commercial Heavy' | 'Industrial Heavy' | 'Bulk Operations';
  image: string;
  posterImage: string;
  colorName: string;
  themeColor: string;
  badge: string;
  specs: {
    gasCapacity: string;
    tareWeight: string;
    height: string;
    diameter: string;
    valveType: string;
    offTakeType: string;
  };
  idealFor: string[];
  features: string[];
  bestPriceNote: string;
}

export const BUSINESS_INFO = {
  brandName: "Super Flame Bharatgas",
  subtitle: "Auth. LPG Distributor (BPCL)",
  agencyName: "Balaji Gas",
  proprietor: "Neeraj Dabas",
  tagline: "Safe Energy • Every Day • Every Way",
  slogan: "Cook Food. Serve Love.",
  onePromise: "Every Need. Every Size. Powering Homes. Fueling Businesses.",
  groupImage: "/images/group_all_cylinders.png",
  trustBadge: "Your Safety Our Priority",
  ratingStars: 5,
  phone: "+91 98998 13581",
  rawPhone: "9899813581",
  address: "Plot No 366, Kh No 155, Pooth Khurd, Delhi 110039",
  shortAddress: "Pooth Khurd, Delhi 110039",
  city: "Delhi",
  pincode: "110039",
  whatsappUrl: "https://wa.me/919899813581?text=Hello%20Super%20Flame%20Bharatgas%2C%20I%20would%20like%20to%20inquire%20about%20LPG%20gas%20supply.",
  googleMapsQuery: "Plot+No+366+Kh+No+155+Pooth+Khurd+Delhi+110039",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=Plot+No+366+Kh+No+155+Pooth+Khurd+Delhi+110039&t=&z=14&ie=UTF8&iwloc=&output=embed",
  corePillars: [
    {
      title: "100% Safe",
      subtitle: "Trusted Safety",
      description: "BPCL certified pressure-tested cylinders with automated multi-point leak checks & tamper-evident seals.",
      shortDesc: "BPCL certified pressure-tested cylinders with zero-leak guarantee.",
      icon: "ShieldCheck",
      accent: "text-forest"
    },
    {
      title: "Best Price",
      subtitle: "More Savings",
      description: "Direct official BPCL commercial tariffs with volume discount slabs for high-consumption restaurants & enterprises.",
      shortDesc: "Official BPCL commercial rates with volume discount slabs.",
      icon: "IndianRupee",
      accent: "text-gold"
    },
    {
      title: "On Time Delivery",
      subtitle: "Every Need, Every Time",
      description: "Priority dispatch fleet covering Pooth Khurd, Bawana, Narela, Rohini & Delhi NCR with zero delivery delays.",
      shortDesc: "Priority prompt dispatch across Pooth Khurd, Bawana & Delhi NCR.",
      icon: "Truck",
      accent: "text-navy"
    },
    {
      title: "Trusted Service",
      subtitle: "Service with a Smile",
      description: "Personalized account management by Balaji Gas (Neeraj Dabas) with 24/7 commercial emergency assistance.",
      shortDesc: "Dedicated local support by Balaji Gas (Neeraj Dabas).",
      icon: "Handshake",
      accent: "text-forest"
    }
  ],
  serviceHighlights: [
    "Commercial Bulk Supply & Turnkey Manifold Installations",
    "Liquid Off-Take (LOT) & Vapour Off-Take (VOT) Systems",
    "24/7 Priority Emergency Support for Commercial Kitchens",
    "Automated Routine Inspection & O-Ring Safety Audits",
    "Direct BPCL Bottling Plant Supply Chain Integrity"
  ],
  operationalHours: "Mon – Sat: 8:00 AM – 8:00 PM | Sun: 9:00 AM – 5:00 PM (24x7 Commercial Emergency)",
  coverageAreas: [
    "Pooth Khurd",
    "Bawana Industrial Area",
    "Narela Industrial Area",
    "Rohini (Sectors 1–38)",
    "Pitampura",
    "Kanjhawala",
    "Mundka",
    "Alipur",
    "North & West Delhi"
  ]
};

export const CYLINDER_PRODUCTS: CylinderProduct[] = [
  {
    id: "cyl-5kg",
    size: "5 KG",
    weightNumber: 5,
    unit: "KG",
    name: "5 kg LPG Cylinder",
    tagline: "Small in Size, Big in Performance.",
    subtitle: "Perfect for Small Families & Compact Kitchens. Big on Safety. Easy on Everyday.",
    category: "Domestic & Compact",
    image: "/images/poster_5kg.png",
    posterImage: "/images/poster_5kg.png",
    colorName: "Vibrant Green",
    themeColor: "#14422E",
    badge: "Easy to Lift",
    specs: {
      gasCapacity: "5.0 kg Net LPG",
      tareWeight: "Approx. 7.5 - 8.2 kg",
      height: "440 mm",
      diameter: "240 mm",
      valveType: "Standard Self-Closing Safety Valve",
      offTakeType: "Vapour Off-Take (VOT)"
    },
    idealFor: [
      "Small Families & Compact Kitchens",
      "Food Trucks & Outdoor Live Counters",
      "Weekend Caterers & Pop-up Kiosks",
      "Laboratory & Portable Heating"
    ],
    features: [
      "Easy to Lift: Lightweight design for convenience",
      "Safe & Reliable: Built with advanced safety features",
      "Perfect for Daily Use: Ideal for cooking meals for small families",
      "Trusted Quality: Backed by Bharatgas quality you can trust"
    ],
    bestPriceNote: "Economical pricing with swift on-demand refill."
  },
  {
    id: "cyl-19kg",
    size: "19 KG",
    weightNumber: 19,
    unit: "KG",
    name: "19 kg LPG Cylinder",
    tagline: "For Every Home, Every Meal.",
    subtitle: "The Heart of Your Home Kitchen. The trusted choice for millions of Indian families & cafes.",
    category: "Commercial Standard",
    image: "/images/poster_19kg.png",
    posterImage: "/images/poster_19kg.png",
    colorName: "Royal Blue",
    themeColor: "#0B3B70",
    badge: "High Performance",
    specs: {
      gasCapacity: "19.0 kg Net LPG",
      tareWeight: "Approx. 18.5 - 19.5 kg",
      height: "850 mm",
      diameter: "315 mm",
      valveType: "Commercial High-Flow SC Valve",
      offTakeType: "Vapour Off-Take (VOT)"
    },
    idealFor: [
      "Restaurants, Cloud Kitchens & Cafes",
      "Dhabas, Sweet Shops (Halwais) & Canteens",
      "Large Households & Joint Families",
      "Catering & Banqueting Services"
    ],
    features: [
      "High Performance: Consistent flame, better cooking",
      "Safe & Reliable: Advanced safety features you can trust",
      "Clean & Efficient: Cleaner fuel for a healthier kitchen & home",
      "Trusted by Millions: Standard commercial workhorse"
    ],
    bestPriceNote: "Volume commercial discount slabs for restaurants."
  },
  {
    id: "cyl-35kg",
    size: "35 KG",
    weightNumber: 35,
    unit: "KG",
    name: "35 kg LPG Cylinder",
    tagline: "More Power for Your Everyday Needs.",
    subtitle: "Built to deliver strong performance for bigger families, bakeries and heavy commercial cooking.",
    category: "Commercial Heavy",
    image: "/images/poster_35kg.png",
    posterImage: "/images/poster_35kg.png",
    colorName: "Flame Red",
    themeColor: "#C23131",
    badge: "High Capacity",
    specs: {
      gasCapacity: "35.0 kg Net LPG",
      tareWeight: "Approx. 31.0 - 33.0 kg",
      height: "1150 mm",
      diameter: "360 mm",
      valveType: "Heavy-Duty High-Capacity Valve",
      offTakeType: "Vapour Off-Take (VOT)"
    },
    idealFor: [
      "Commercial Bakeries & Industrial Ovens",
      "Banquet Halls & Resort Mega-Kitchens",
      "Commercial Laundry Steam Boilers",
      "Heavy Food Processing Kitchens"
    ],
    features: [
      "High Capacity: Ideal for large families, catering & heavy cooking",
      "Superior Safety: Advanced safety features ensure peace of mind",
      "Efficient & Reliable: Consistent performance with fewer refills",
      "Trusted Quality: Backed by Bharatgas quality you can trust"
    ],
    bestPriceNote: "Optimized unit cost with scheduled commercial delivery."
  },
  {
    id: "cyl-47.5kg",
    size: "47.5 KG",
    weightNumber: 47.5,
    unit: "KG",
    name: "47.5 kg LPG Cylinder",
    tagline: "Strength You Can Count On.",
    subtitle: "Performance You Can Trust. Designed for larger households, commercial kitchens and heavy LOT manifolds.",
    category: "Industrial Heavy",
    image: "/images/poster_47kg.png",
    posterImage: "/images/poster_47kg.png",
    colorName: "Forest Green Heavy",
    themeColor: "#14422E",
    badge: "Extra Large Capacity",
    specs: {
      gasCapacity: "47.5 kg Net LPG",
      tareWeight: "Approx. 40.0 - 43.0 kg",
      height: "1350 mm",
      diameter: "375 mm",
      valveType: "LOT (Liquid Off-Take) / VOT Heavy Valve",
      offTakeType: "Liquid (LOT) with Vaporizer or Vapour (VOT)"
    },
    idealFor: [
      "Hotels, Large Caterers & Institutional Dining",
      "Industrial Powder Coating & Curing Ovens",
      "Metallurgical Heat Treatment & Forging",
      "Centralized Commercial Gas Banks (LOT Manifolds)"
    ],
    features: [
      "Extra Large Capacity: Ideal for big demands and commercial use",
      "Maximum Safety: Built with robust safety features",
      "Longer Durability: Made from high-grade materials for long life",
      "More Convenience: Fewer refills, more savings and uninterrupted cooking"
    ],
    bestPriceNote: "Direct institutional pricing for manufacturing & hospitality."
  },
  {
    id: "cyl-450kg",
    size: "450 KG",
    weightNumber: 450,
    unit: "KG",
    name: "450 kg LPG Tank",
    tagline: "Powering Businesses. Fueling Growth.",
    subtitle: "Bulk energy solution for large scale industrial operations. High capacity. Always reliable.",
    category: "Bulk Operations",
    image: "/images/poster_450kg.png",
    posterImage: "/images/poster_450kg.png",
    colorName: "Titanium White Vessel",
    themeColor: "#C4841D",
    badge: "Bulk Vessel",
    specs: {
      gasCapacity: "450.0 kg (Approx. 1,000 Litres WC)",
      tareWeight: "Approx. 340 kg (Pressure Vessel)",
      height: "1750 mm",
      diameter: "950 mm",
      valveType: "Industrial Flanged Safety Multi-Port Assembly",
      offTakeType: "Liquid / Vapour Heavy Turnkey Manifold"
    },
    idealFor: [
      "Manufacturing Plants & Glass Melting Furnaces",
      "Shopping Mall Centralized Food Courts",
      "Pharmaceutical Synthesis & Chemical Plants",
      "Townships & Reticulated Gas Networks"
    ],
    features: [
      "Extra Large Capacity: Replaces 24+ standard cylinders",
      "Maximum Safety: Telemetry monitoring & interlocks",
      "Cost Efficient: Lower operating costs and more savings",
      "Reliable & Durable: Built to last with superior quality"
    ],
    bestPriceNote: "Dedicated bulk tanker replenishment with maximum tariff advantages."
  }
];

export const SAFETY_PROTOCOLS = [
  {
    step: "01",
    title: "Tare & Net Weight Verification",
    shortTitle: "Weight Verification",
    description: "Every single cylinder undergoes precision digital tare weight verification to guarantee exact gas quantity before leaving the premises."
  },
  {
    step: "02",
    title: "O-Ring & Valve Integrity Testing",
    shortTitle: "Leak Testing",
    description: "Multi-point electronic leakage detection and rubber O-ring seal checks ensure zero micro-leaks under operating pressure."
  },
  {
    step: "03",
    title: "Tamper-Proof Holographic Seal",
    shortTitle: "Tamper-Proof Seal",
    description: "Delivered strictly with intact, serialized Bharatgas tamper-evident security caps and safety instructions."
  },
  {
    step: "04",
    title: "Safe Transport & Handling Protocol",
    shortTitle: "Certified Transport",
    description: "Dedicated transport vehicles compliant with explosive and flammable payload safety norms, equipped with certified fire extinguishers."
  }
];

export const COMMERCIAL_SOLUTIONS = [
  {
    title: "Restaurants & Cloud Kitchens",
    tag: "19 KG & 35 KG VOT",
    description: "Continuous high-pressure cooking supply engineered to handle sudden peak-hour dining surges without temperature or pressure drops.",
    points: ["2-hour emergency refill dispatch", "Compact manifold designs", "Free piping leak inspection"]
  },
  {
    title: "Hotels & Bakeries",
    tag: "35 KG & 47.5 KG",
    description: "Reliable, high-calorific heat for baking ovens, deep fryers, and multi-tier cooking ranges with consistent flame characteristics.",
    points: ["High thermal efficiency", "Reduced cylinder change downtime", "Dedicated account manager"]
  },
  {
    title: "Industrial & Factories",
    tag: "47.5 KG LOT & 450 KG",
    description: "Turnkey LPG installations with automated changeover manifolds, external water-bath vaporizers, and PESO-compliant reticulation.",
    points: ["Zero winter freezing loss", "Complete safety certification", "Scheduled bulk supply"]
  }
];

export const FAQS = [
  {
    question: "What is Super Flame Bharatgas and how is it affiliated?",
    answer: "Super Flame Bharatgas (Balaji Gas, managed by Neeraj Dabas) is an Official Authorized LPG Distributor affiliated with Bharat Petroleum Corporation Limited (BPCL), operating from Pooth Khurd, Delhi (PIN 110039). We supply genuine, safety-tested Bharatgas cylinders for domestic, commercial, and industrial clients."
  },
  {
    question: "Which cylinder sizes are available for supply?",
    answer: "We supply all 5 official capacity cylinders: 5 kg (Domestic & Compact), 19 kg (Standard Commercial), 35 kg (High-Efficiency Commercial), 47.5 kg (Heavy Commercial & LOT/VOT Industrial), and 450 kg (Bharatgas Maxima Bulk Storage Vessel)."
  },
  {
    question: "How do I place a quick commercial cylinder order or schedule regular deliveries?",
    answer: "You can call us directly at 9899813581 or tap the WhatsApp / Request Supply button on this website. Our team coordinates immediate dispatch for verified commercial and bulk clients."
  },
  {
    question: "What areas in Delhi NCR do you service?",
    answer: "Our primary hub in Pooth Khurd (Delhi 110039) services North Delhi, Bawana Industrial Area, Narela, Rohini, Pitampura, Mundka, Alipur, Kanjhawala, Mangolpuri, and surrounding commercial districts."
  },
  {
    question: "What is the difference between VOT and LOT cylinder installations?",
    answer: "VOT (Vapour Off-Take) draws gas naturally in vapour form from the top of the cylinder, ideal for 19kg and 35kg systems. LOT (Liquid Off-Take) draws liquid LPG from 47.5kg cylinders and uses an external vaporizer, preventing cylinder freeze-up and extracting 100% of the gas even in extreme winter temperatures."
  }
];
