export interface CylinderProduct {
  id: string;
  size: string;
  weightNumber: number;
  unit: string;
  name: string;
  tagline: string;
  category: string;
  image: string;
  posterImage: string;
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
}

export const BUSINESS_INFO = {
  brandName: "Balaji Gas",
  dealerTitle: "Authorized Dealer: Super Gas",
  shortDealerTitle: "Auth. Dealer: Super Gas",
  proprietor: "Neeraj Dabas",
  tagline: "More Power. Everyday Confidence.",
  groupImage: "/images/supergas_group.png",
  phone: "+91 98998 13581",
  rawPhone: "9899813581",
  address: "Plot number 251/154, Kanhaiya Dharam Kata, Pooth Khurd, Delhi 110039",
  shortAddress: "Kanhaiya Dharam Kata, Pooth Khurd, Delhi 110039",
  whatsappUrl: "https://wa.me/919899813581?text=Hello%20Balaji%20Gas%2C%20I%20want%20to%20order%20Super%20Gas%20LPG%20cylinders.",
  googleMapsQuery: "Plot+number+251+154+Kanhaiya+Dharam+Kata+Pooth+Khurd+Delhi+110039",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=Kanhaiya+Dharam+Kata+Pooth+Khurd+Delhi+110039&t=&z=14&ie=UTF8&iwloc=&output=embed",
  corePillars: [
    {
      title: "100% Safe",
      subtitle: "Zero-Leak Guarantee",
      description: "Pressure-tested cylinders with tamper-evident seals.",
      icon: "ShieldCheck"
    },
    {
      title: "Best Price",
      subtitle: "Volume Savings",
      description: "Direct commercial rates with volume discount slabs.",
      icon: "IndianRupee"
    },
    {
      title: "On Time Delivery",
      subtitle: "Priority Fleet",
      description: "Fast dispatch across Pooth Khurd, Bawana & Delhi NCR.",
      icon: "Truck"
    },
    {
      title: "Trusted Service",
      subtitle: "Direct Support",
      description: "Dedicated account management by Neeraj Dabas.",
      icon: "Handshake"
    }
  ],
  operationalHours: "Mon – Sat: 8:00 AM – 8:00 PM | Sun: 9:00 AM – 5:00 PM",
  coverageAreas: [
    "Pooth Khurd",
    "Bawana Industrial",
    "Narela Industrial",
    "Rohini",
    "Pitampura",
    "Mundka",
    "Alipur",
    "Delhi NCR"
  ]
};

export const CYLINDER_PRODUCTS: CylinderProduct[] = [
  {
    id: "cyl-5kg",
    size: "5 KG",
    weightNumber: 5,
    unit: "KG",
    name: "5 Kg Cylinder",
    tagline: "Small in size, Big in performance.",
    category: "Compact & Domestic",
    image: "/images/supergas_5kg.png",
    posterImage: "/images/supergas_5kg.png",
    badge: "Lightweight",
    specs: {
      gasCapacity: "5.0 kg Net",
      tareWeight: "7.5 - 8.2 kg",
      height: "440 mm",
      diameter: "240 mm",
      valveType: "Safety Self-Closing Valve",
      offTakeType: "Vapour (VOT)"
    },
    idealFor: [
      "Small Kitchens",
      "Food Trucks & Kiosks",
      "Live Catering Counters",
      "Portable Heating"
    ],
    features: [
      "Easy to lift and transport",
      "Super Gas certified safety valve",
      "Factory-crimped security seal",
      "Ideal for quick portable setups"
    ]
  },
  {
    id: "cyl-19kg",
    size: "19 KG",
    weightNumber: 19,
    unit: "KG",
    name: "19 kg Cylinder",
    tagline: "Powering your everyday moments.",
    category: "Commercial Standard",
    image: "/images/supergas_19kg.png",
    posterImage: "/images/supergas_19kg.png",
    badge: "Commercial Favorite",
    specs: {
      gasCapacity: "19.0 kg Net",
      tareWeight: "18.5 - 19.5 kg",
      height: "850 mm",
      diameter: "315 mm",
      valveType: "High-Flow SC Valve",
      offTakeType: "Vapour (VOT)"
    },
    idealFor: [
      "Restaurants & Cafes",
      "Cloud Kitchens",
      "Dhabas & Sweet Shops",
      "Catering Services"
    ],
    features: [
      "High calorific intense blue flame",
      "Cleaner burning commercial fuel",
      "Pairs with 2 to 8 cylinder manifolds",
      "Reliable daily refill supply"
    ]
  },
  {
    id: "cyl-35kg",
    size: "35 KG",
    weightNumber: 35,
    unit: "KG",
    name: "35 Kg Cylinder",
    tagline: "Reliable energy. Everyday confidence.",
    category: "Commercial Heavy",
    image: "/images/supergas_35kg.png",
    posterImage: "/images/supergas_35kg.png",
    badge: "High Capacity",
    specs: {
      gasCapacity: "35.0 kg Net",
      tareWeight: "31.0 - 33.0 kg",
      height: "1150 mm",
      diameter: "360 mm",
      valveType: "Heavy-Duty Valve",
      offTakeType: "Vapour (VOT)"
    },
    idealFor: [
      "Commercial Bakeries",
      "Industrial Ovens",
      "Banquet Mega-Kitchens",
      "Steam Boilers"
    ],
    features: [
      "84% more fuel than 19kg cylinder",
      "Fewer swaps and less kitchen downtime",
      "High continuous vaporization rate",
      "Rugged protective steel collar"
    ]
  },
  {
    id: "cyl-47.5kg",
    size: "47.5 KG",
    weightNumber: 47.5,
    unit: "KG",
    name: "47.5 Kg Cylinder",
    tagline: "More Power. Everyday Confidence.",
    category: "Industrial & LOT",
    image: "/images/supergas_47kg.png",
    posterImage: "/images/supergas_47kg.png",
    badge: "Industrial Grade",
    specs: {
      gasCapacity: "47.5 kg Net",
      tareWeight: "40.0 - 43.0 kg",
      height: "1350 mm",
      diameter: "375 mm",
      valveType: "LOT / Heavy VOT Valve",
      offTakeType: "Liquid (LOT) or Vapour (VOT)"
    },
    idealFor: [
      "Hotels & Large Caterers",
      "Central Gas Banks (LOT)",
      "Industrial Powder Coating",
      "Factory Heat Processing"
    ],
    features: [
      "Maximum payload per cylinder footprint",
      "100% fuel extraction with zero winter freezing",
      "Connects to auto-changeover LOT manifolds",
      "Lowest cost per kg for high consumption"
    ]
  }
];

export const SAFETY_PROTOCOLS = [
  {
    step: "01",
    title: "Weight Verification",
    description: "Digital tare & net weight check before dispatch."
  },
  {
    step: "02",
    title: "Leak Testing",
    description: "Multi-point electronic valve & O-ring inspection."
  },
  {
    step: "03",
    title: "Tamper-Proof Seal",
    description: "Factory-crimped Super Gas serialized safety seal."
  },
  {
    step: "04",
    title: "Safe Transport",
    description: "Certified logistics fleet with fire-safety equipment."
  }
];

export const COMMERCIAL_SOLUTIONS = [
  {
    title: "Restaurants & Cafes",
    tag: "19 KG VOT",
    points: ["Instant 2-hour refill dispatch", "Compact auto-changeover manifolds", "Consistent high-flame heat"]
  },
  {
    title: "Bakeries & Ovens",
    tag: "35 KG Heavy",
    points: ["84% more fuel per cylinder", "Fewer cylinder changes", "Dedicated delivery account"]
  },
  {
    title: "Industrial & LOT Banks",
    tag: "47.5 KG LOT",
    points: ["Zero winter freezing loss", "100% gas extraction", "PESO-compliant manifold piping"]
  }
];

export const FAQS = [
  {
    question: "What is Balaji Gas?",
    answer: "Balaji Gas (Proprietor: Neeraj Dabas) is an Authorized Super Gas Dealer at Kanhaiya Dharam Kata, Pooth Khurd, Delhi 110039, supplying certified commercial and domestic LPG cylinders."
  },
  {
    question: "Which cylinder sizes are available?",
    answer: "We supply 5 kg, 19 kg, 35 kg, and 47.5 kg Super Gas cylinders."
  },
  {
    question: "How do I order a cylinder?",
    answer: "Call 9899813581 or tap 'Send Order via WhatsApp' on this site for instant dispatch coordination."
  },
  {
    question: "What areas do you deliver to?",
    answer: "Pooth Khurd, Bawana Industrial Area, Narela, Rohini, Pitampura, Mundka, Alipur, and across Delhi NCR."
  },
  {
    question: "What is the difference between VOT and LOT systems?",
    answer: "VOT draws natural vapour for 19kg/35kg cylinders. LOT draws liquid gas from 47.5kg cylinders through an external vaporizer, preventing frost and giving 100% fuel extraction in winter."
  }
];
