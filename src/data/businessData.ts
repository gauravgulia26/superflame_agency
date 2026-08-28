export interface CylinderProduct {
  id: string;
  size: string;
  weightNumber: number;
  unit: string;
  name: string;
  tagline: string;
  subtitle: string;
  category: 'Domestic & Compact' | 'Commercial Standard' | 'Commercial Heavy' | 'Industrial Heavy';
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
  brandName: "Balaji Gas",
  dealerTitle: "Authorized Dealer: Super Gas",
  shortDealerTitle: "Auth. Dealer: Super Gas",
  proprietor: "Neeraj Dabas",
  tagline: "More Power. Everyday Confidence.",
  subTagline: "Reliable Energy • Everyday Confidence",
  slogan: "Powering Homes. Fueling Businesses.",
  onePromise: "More Power. Everyday Confidence.",
  groupImage: "/images/supergas_group.png",
  trustBadge: "Your Safety Our Priority",
  ratingStars: 5,
  phone: "+91 98998 13581",
  rawPhone: "9899813581",
  address: "Plot number 251/154, Kanhaiya Dharam Kata, Pooth Khurd, Delhi 110039",
  shortAddress: "Kanhaiya Dharam Kata, Pooth Khurd, Delhi 110039",
  city: "Delhi",
  pincode: "110039",
  whatsappUrl: "https://wa.me/919899813581?text=Hello%20Balaji%20Gas%20(Super%20Gas%20Dealer)%2C%20I%20would%20like%20to%20inquire%20about%20LPG%20gas%20supply.",
  googleMapsQuery: "Plot+number+251+154+Kanhaiya+Dharam+Kata+Pooth+Khurd+Delhi+110039",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=Kanhaiya+Dharam+Kata+Pooth+Khurd+Delhi+110039&t=&z=14&ie=UTF8&iwloc=&output=embed",
  corePillars: [
    {
      title: "100% Safe",
      subtitle: "Trusted Safety",
      description: "Super Gas certified pressure-tested cylinders with automated multi-point leak checks & tamper-evident seals.",
      shortDesc: "Super Gas certified cylinders with zero-leak guarantee.",
      icon: "ShieldCheck",
      accent: "text-forest"
    },
    {
      title: "Best Price",
      subtitle: "More Savings",
      description: "Direct Super Gas commercial tariffs with volume discount slabs for high-consumption restaurants & enterprises.",
      shortDesc: "Competitive official tariffs with volume commercial discounts.",
      icon: "IndianRupee",
      accent: "text-gold"
    },
    {
      title: "On Time Delivery",
      subtitle: "Every Need, Every Time",
      description: "Priority dispatch fleet covering Pooth Khurd, Bawana, Narela, Rohini & Delhi NCR with zero delivery delays.",
      shortDesc: "Prompt priority delivery across Pooth Khurd, Bawana & Delhi NCR.",
      icon: "Truck",
      accent: "text-navy"
    },
    {
      title: "Trusted Service",
      subtitle: "Service with a Smile",
      description: "Personalized account management by Balaji Gas (Neeraj Dabas) with 24/7 commercial emergency assistance.",
      shortDesc: "Dedicated local support by Neeraj Dabas (Balaji Gas).",
      icon: "Handshake",
      accent: "text-forest"
    }
  ],
  serviceHighlights: [
    "Commercial Bulk Supply & Turnkey Manifold Installations",
    "Liquid Off-Take (LOT) & Vapour Off-Take (VOT) Systems",
    "24/7 Priority Emergency Support for Commercial Kitchens",
    "Automated Routine Inspection & O-Ring Safety Audits",
    "Direct Super Gas Supply Chain Integrity"
  ],
  operationalHours: "Mon – Sat: 8:00 AM – 8:00 PM | Sun: 9:00 AM – 5:00 PM (24x7 Commercial Emergency)",
  coverageAreas: [
    "Pooth Khurd",
    "Bawana Industrial Area",
    "Narela Industrial Area",
    "Rohini (Sectors 1–38)",
    "Pitampura",
    "Kanjhawala",
    "Mundka Industrial Area",
    "Alipur & GT Karnal Road",
    "North & West Delhi"
  ]
};

export const CYLINDER_PRODUCTS: CylinderProduct[] = [
  {
    id: "cyl-5kg",
    size: "5 KG",
    weightNumber: 5,
    unit: "KG",
    name: "5 Kg Super Gas Cylinder",
    tagline: "Small in size, Big in performance.",
    subtitle: "Compact design engineered for small kitchens, food kiosks, live counters and portable heating.",
    category: "Domestic & Compact",
    image: "/images/supergas_5kg.png",
    posterImage: "/images/supergas_5kg.png",
    colorName: "Olive Green",
    themeColor: "#14422E",
    badge: "Compact & Light",
    specs: {
      gasCapacity: "5.0 kg Net LPG",
      tareWeight: "Approx. 7.5 - 8.2 kg",
      height: "440 mm",
      diameter: "240 mm",
      valveType: "Standard Self-Closing Safety Valve",
      offTakeType: "Vapour Off-Take (VOT)"
    },
    idealFor: [
      "Small Kitchens & Compact Spaces",
      "Food Trucks & Outdoor Live Counters",
      "Weekend Caterers & Pop-up Kiosks",
      "Laboratory & Portable Heating"
    ],
    features: [
      "Small in size, big in performance",
      "Ergonomic handle for easy lifting & mobility",
      "Pressure-tested Super Gas safety valve",
      "Factory-crimped tamper-evident security seal"
    ],
    bestPriceNote: "Economical pricing with swift on-demand refill."
  },
  {
    id: "cyl-19kg",
    size: "19 KG",
    weightNumber: 19,
    unit: "KG",
    name: "19 kg Super Gas Cylinder",
    tagline: "Powering your everyday moments.",
    subtitle: "The trusted commercial workhorse for restaurants, cafes, cloud kitchens, and large households.",
    category: "Commercial Standard",
    image: "/images/supergas_19kg.png",
    posterImage: "/images/supergas_19kg.png",
    colorName: "Royal Blue",
    themeColor: "#0B3B70",
    badge: "Commercial Favorite",
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
      "Powering your everyday moments with high calorific heat",
      "High performance: Consistent intense blue flame",
      "Clean & efficient: Cleaner burning for commercial kitchens",
      "Seamless manifold pairing for 2 to 8 cylinder banks"
    ],
    bestPriceNote: "Volume commercial discount slabs for contracted restaurants."
  },
  {
    id: "cyl-35kg",
    size: "35 KG",
    weightNumber: 35,
    unit: "KG",
    name: "35 Kg Super Gas Cylinder",
    tagline: "Reliable energy. Everyday confidence.",
    subtitle: "High-capacity commercial cylinder designed for bakeries, industrial ovens, and heavy cooking.",
    category: "Commercial Heavy",
    image: "/images/supergas_35kg.png",
    posterImage: "/images/supergas_35kg.png",
    colorName: "Crimson Red",
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
      "Reliable energy with 84% more fuel than 19kg",
      "Superior safety with heavy-duty protective collar",
      "Efficient & reliable: Fewer cylinder swaps, less downtime",
      "High continuous vaporization rate for peak load hours"
    ],
    bestPriceNote: "Optimized unit cost with scheduled commercial delivery."
  },
  {
    id: "cyl-47.5kg",
    size: "47.5 KG",
    weightNumber: 47.5,
    unit: "KG",
    name: "47.5 Kg Super Gas Cylinder",
    tagline: "More Power. Everyday Confidence.",
    subtitle: "Built for heavy industrial demands, large hotel manifolds, and Liquid Off-Take (LOT) systems.",
    category: "Industrial Heavy",
    image: "/images/supergas_47kg.png",
    posterImage: "/images/supergas_47kg.png",
    colorName: "Forest Green Heavy",
    themeColor: "#14422E",
    badge: "LOT & Industrial",
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
      "More power and maximum payload per cylinder footprint",
      "Heavy industrial grade construction for heavy cycles",
      "100% fuel extraction with zero winter freeze residue",
      "Ideal for multi-cylinder automatic changeover manifolds"
    ],
    bestPriceNote: "Direct institutional pricing for manufacturing & hospitality."
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
    description: "Delivered strictly with intact, serialized Super Gas tamper-evident security caps and safety instructions."
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
    tag: "47.5 KG LOT & Heavy VOT",
    description: "Turnkey LPG installations with automated changeover manifolds, external water-bath vaporizers, and PESO-compliant reticulation.",
    points: ["Zero winter freezing loss", "Complete safety certification", "Scheduled bulk cylinder supply"]
  }
];

export const FAQS = [
  {
    question: "What is Balaji Gas and how is it affiliated?",
    answer: "Balaji Gas (managed by Proprietor Neeraj Dabas) is an Official Authorized Dealer for Super Gas, operating from Plot number 251/154, Kanhaiya Dharam Kata, Pooth Khurd, Delhi 110039. We supply genuine, certified Super Gas LPG cylinders for domestic, commercial, and industrial clients."
  },
  {
    question: "Which cylinder sizes are available for supply?",
    answer: "We supply all 4 official capacity Super Gas cylinders: 5 kg (Domestic & Compact), 19 kg (Standard Commercial), 35 kg (High-Efficiency Commercial), and 47.5 kg (Heavy Commercial & LOT/VOT Industrial)."
  },
  {
    question: "How do I place a quick commercial cylinder order or schedule regular deliveries?",
    answer: "You can call Neeraj Dabas directly at 9899813581 or tap the WhatsApp button on this website. Our team coordinates immediate dispatch for commercial and bulk clients across Delhi NCR."
  },
  {
    question: "What areas in Delhi NCR do you service?",
    answer: "Our primary hub at Kanhaiya Dharam Kata in Pooth Khurd (Delhi 110039) services North Delhi, Bawana Industrial Area, Narela, Rohini, Pitampura, Mundka, Alipur, Kanjhawala, Mangolpuri, and surrounding commercial districts."
  },
  {
    question: "What is the difference between VOT and LOT cylinder installations?",
    answer: "VOT (Vapour Off-Take) draws gas naturally in vapour form from the top of the cylinder, ideal for 19kg and 35kg systems. LOT (Liquid Off-Take) draws liquid LPG from 47.5kg cylinders and uses an external vaporizer, preventing cylinder freeze-up and extracting 100% of the gas even in extreme winter temperatures."
  }
];
