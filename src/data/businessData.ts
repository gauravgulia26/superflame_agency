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
    tagline: "Powering your everyday moments.",
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
      "Portable Cooking & Heating"
    ],
    features: [
      "Lightweight and easy to carry",
      "Super Gas certified safety valve",
      "Tamper-evident security cap",
      "Quick on-demand refill"
    ]
  },
  {
    id: "cyl-12kg",
    size: "12 KG",
    weightNumber: 12,
    unit: "KG",
    name: "12 Kg Cylinder",
    tagline: "Powering your everyday moments.",
    category: "Domestic & Light Commercial",
    image: "/images/supergas_12kg.png",
    posterImage: "/images/supergas_12kg.png",
    badge: "Versatile Choice",
    specs: {
      gasCapacity: "12.0 kg Net",
      tareWeight: "13.5 - 14.5 kg",
      height: "580 mm",
      diameter: "300 mm",
      valveType: "Compact High-Flow SC Valve",
      offTakeType: "Vapour (VOT)"
    },
    idealFor: [
      "Households & Residential Kitchens",
      "Small Cafes & Fast Food Outlets",
      "Tea & Snack Stalls",
      "Outdoor Food Stalls"
    ],
    features: [
      "Optimal balance of capacity & mobility",
      "Consistent high-pressure blue flame",
      "100% inspected O-ring safety seal",
      "Same-day local dispatch"
    ]
  },
  {
    id: "cyl-17kg",
    size: "17 KG",
    weightNumber: 17,
    unit: "KG",
    name: "17 Kg Cylinder",
    tagline: "Powering your everyday moments.",
    category: "Commercial Standard",
    image: "/images/supergas_17kg.png",
    posterImage: "/images/supergas_17kg.png",
    badge: "Commercial Choice",
    specs: {
      gasCapacity: "17.0 kg Net",
      tareWeight: "17.0 - 18.0 kg",
      height: "780 mm",
      diameter: "315 mm",
      valveType: "High-Flow Commercial Valve",
      offTakeType: "Vapour (VOT)"
    },
    idealFor: [
      "Restaurants & Cloud Kitchens",
      "Dhabas & Sweet Shops (Halwais)",
      "Hotel Kitchens & Canteens",
      "Catering & Banquets"
    ],
    features: [
      "High thermal calorific output",
      "Clean burning with zero black residue",
      "Pairs seamlessly with manifold systems",
      "Priority commercial refill fleet"
    ]
  },
  {
    id: "cyl-33kg",
    size: "33 KG",
    weightNumber: 33,
    unit: "KG",
    name: "33 Kg Cylinder",
    tagline: "Powering your everyday moments.",
    category: "Commercial Heavy",
    image: "/images/supergas_33kg.png",
    posterImage: "/images/supergas_33kg.png",
    badge: "Heavy Duty",
    specs: {
      gasCapacity: "33.0 kg Net",
      tareWeight: "29.0 - 31.0 kg",
      height: "1100 mm",
      diameter: "360 mm",
      valveType: "Heavy-Duty Commercial Valve",
      offTakeType: "Vapour (VOT) / Heavy Flow"
    },
    idealFor: [
      "Commercial Bakeries & Large Ovens",
      "Banquet Mega-Kitchens",
      "Industrial Food Processing Units",
      "Heavy Commercial Kitchen Manifolds"
    ],
    features: [
      "Nearly double capacity for fewer swaps",
      "High continuous vaporization rate",
      "Rugged protective steel collar",
      "Volume commercial discount pricing"
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
    title: "Cafes & Small Kitchens",
    tag: "12 KG VOT",
    points: ["Quick-service compact setup", "Easy cylinder replacement", "Consistent clean blue flame"]
  },
  {
    title: "Restaurants & Dhabas",
    tag: "17 KG VOT",
    points: ["Instant 2-hour refill dispatch", "Multi-cylinder changeover manifold", "High continuous heat output"]
  },
  {
    title: "Bakeries & Mega-Kitchens",
    tag: "33 KG Heavy",
    points: ["Nearly 2x fuel capacity per bottle", "Fewer cylinder swaps & zero downtime", "Dedicated delivery account manager"]
  }
];

export const FAQS = [
  {
    question: "What is Balaji Gas?",
    answer: "Balaji Gas (Proprietor: Neeraj Dabas) is an Authorized Super Gas Dealer at Kanhaiya Dharam Kata, Pooth Khurd, Delhi 110039, supplying certified commercial and domestic LPG cylinders."
  },
  {
    question: "Which cylinder sizes are available?",
    answer: "We supply 5 kg, 12 kg, 17 kg, and 33 kg Super Gas cylinders."
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
    question: "Do you provide multi-cylinder manifold reticulation?",
    answer: "Yes, we install certified multi-cylinder automatic changeover manifolds for restaurants, cafes, and bakeries to ensure continuous, uninterrupted gas flow."
  }
];
