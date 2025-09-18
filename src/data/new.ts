export interface Product { id: string; name: string; category: ProductCategory; subcategory: string; price: number; description: string; specifications: Record<string, string>; images: string[]; inStock: boolean; featured: boolean; manufacturer: string; model: string; }
 export type ProductCategory = 
 'agricultural' | 'beekeeping' | 'vocational' | 'medical' | 'promotional'; 
 export const categories =
  [ { id: 'agricultural', name: 'Agricultural Tools & Equipment', description: 'Professional farming and agricultural machinery for enhanced productivity', icon: '🚜' }, { id: 'beekeeping', name: 'Beekeeping Equipment', description: 'Complete beekeeping solutions for honey production and hive management', icon: '🐝' }, { id: 'vocational', name: 'Vocational Items', description: 'Professional tools and equipment for various trades and vocations', icon: '🔧' }, { id: 'medical', name: 'Medical Equipment', description: 'Advanced medical devices and healthcare solutions', icon: '🏥' }, { id: 'promotional', name: 'Promotional Items', description: 'Custom branded products and corporate promotional materials', icon: '🎁' } ] as const;
const agriculturalProducts: Product[] =[
  {
    "id": "1",
    "name": "Hand Hoe",
    "specifications": {
      "Material": "High Carbon Steel",
      "Handle": "Wooden Handle"
    },
    "price": 25000,
    "category": "agricultural",
    "subcategory": "Farm Tools",
    "description": "Durable hand hoe ideal for tilling and weeding small farms and gardens.",
    "manufacturer": "Ottoman Enterprise",
    "model": "HH-001",
    "inStock": true,
    "featured": true,
    "images": ["https://i.imghippo.com/files/MlC2341XvE.jpg"]
  },
  {
    "id": "2",
    "name": "Wheelbarrow",
    "specifications": {
      "Capacity": "100 Liters",
      "Material": "Heavy-Duty Steel Frame"
    },
    "price": 120000,
    "category": "agricultural",
    "subcategory": "Farm Tools",
    "description": "Heavy-duty wheelbarrow for transporting farm produce and materials.",
    "manufacturer": "Ottoman Enterprise",
    "model": "WB-100",
    "inStock": true,
    "featured": true,
    "images": ["https://i.imghippo.com/files/xQHx6332Z.jpg"]
  },
  {
    "id": "3",
    "name": "Irrigation Sprinkler",
    "specifications": {
      "Coverage": "10-15 Meters Radius",
      "Material": "Corrosion-Resistant Metal"
    },
    "price": 45000,
    "category": "agricultural",
    "subcategory": "Irrigation Equipment",
    "description": "Adjustable irrigation sprinkler for efficient water distribution on farms.",
    "manufacturer": "Ottoman Enterprise",
    "model": "IS-001",
    "inStock": true,
    "featured": false,
    "images": ["https://i.imghippo.com/files/mQH3518ak.jpg"]
  },
  {
    "id": "4",
    "name": "Water Pump",
    "specifications": {
      "Engine": "5.5HP Petrol Engine",
      "FlowRate": "30,000 L/hr"
    },
    "price": 850000,
    "category": "agricultural",
    "subcategory": "Irrigation Equipment",
    "description": "High-performance water pump for irrigation and farm water supply.",
    "manufacturer": "Ottoman Enterprise",
    "model": "WP-550",
    "inStock": true,
    "featured": true,
    "images": ["https://i.imghippo.com/files/Xrm1990aX.jpg"]
  },
  {
    "id": "5",
    "name": "Tractor",
    "specifications": {
      "HorsePower": "75 HP",
      "Transmission": "4WD",
      "Fuel": "Diesel"
    },
    "price": 45000000,
    "category": "agricultural",
    "subcategory": "Farm Machinery",
    "description": "Reliable 4-wheel drive tractor for large-scale farm operations.",
    "manufacturer": "Ottoman Enterprise",
    "model": "TR-75",
    "inStock": true,
    "featured": true,
    "images": ["https://i.imghippo.com/files/u8049uw.webp"]
  },
  {
    "id": "6",
    "name": "Rotary Tiller",
    "specifications": {
      "WorkingWidth": "1.8 Meters",
      "PowerSource": "Tractor PTO"
    },
    "price": 3500000,
    "category": "agricultural",
    "subcategory": "Farm Machinery",
    "description": "Rotary tiller attachment for tractors to prepare soil for planting.",
    "manufacturer": "Ottoman Enterprise",
    "model": "RT-180",
    "inStock": true,
    "featured": false,
    "images": ["https://i.imghippo.com/files/zrSP5080gPQ.jpg"]
  },
  {
    "id": "7",
    "name": "Seed Planter",
    "specifications": {
      "Rows": "4 Rows",
      "Capacity": "50 kg Seed Tank"
    },
    "price": 2800000,
    "category": "agricultural",
    "subcategory": "Farm Machinery",
    "description": "Manual and tractor-driven seed planter for accurate seed placement.",
    "manufacturer": "Ottoman Enterprise",
    "model": "SP-004",
    "inStock": true,
    "featured": false,
    "images": ["https://i.imghippo.com/files/SYH3394qZA.jpg"]
  }
]

    // ---------------------- Beekeeping Products ----------------------
const beekeepingProducts: Product[] = [
  {
    "id": "B2",
    "name": "Airtight Buckets",
    "category": "beekeeping",
    "subcategory": "Storage",
    "price": 15000,
    "description": "Durable airtight buckets for honey harvesting and storage.",
    "specifications": {
      "Capacity": "20 Liters",
      "Material": "Food-grade plastic"
    },
    "images": ["https://i.imghippo.com/files/rDh1109JcY.webp"],
    "inStock": true,
    "featured": false,
    "manufacturer": "Ottoman Enterprise",
    "model": "AB-020"
  },
  {
    "id": "B3",
    "name": "Honey Settling Tank (Large)",
    "category": "beekeeping",
    "subcategory": "Honey Processing Equipment",
    "price": 7000000,
    "description": "Large stainless steel honey settling tank with 800kg capacity.",
    "specifications": {
      "Material": "Food grade stainless steel",
      "Capacity": "800 kg"
    },
    "images": ["https://i.imghippo.com/files/BB4147jU.webp"],
    "inStock": true,
    "featured": true,
    "manufacturer": "Ottoman Enterprise",
    "model": "HST-800"
  },
  {
    "id": "B4",
    "name": "Solar Wax Extractor",
    "category": "beekeeping",
    "subcategory": "Honey Processing Equipment",
    "price": 1600000,
    "description": "Eco-friendly solar wax extractor for efficient wax melting.",
    "specifications": {
      "Type": "Solar-powered wax extractor"
    },
    "images": ["https://www.imghippo.com/i/sk2267Y.jpeg"],
    "inStock": true,
    "featured": true,
    "manufacturer": "Ottoman Enterprise",
    "model": "SWE-001"
  },
  {
    "id": "B5",
    "name": "Wax Steamer",
    "category": "beekeeping",
    "subcategory": "Honey Processing Equipment",
    "price": 2250000,
    "description": "High-capacity wax steamer for commercial wax extraction.",
    "specifications": {
      "Type": "Steam-based wax extractor"
    },
    "images": ["https://i.imghippo.com/files/mlKj6414gpc.jpg"],
    "inStock": true,
    "featured": false,
    "manufacturer": "Ottoman Enterprise",
    "model": "WS-001"
  },
  {
    "id": "B7",
    "name": "Plastic Honey Jars",
    "category": "beekeeping",
    "subcategory": "Packaging",
    "price": 900,
    "description": "500g plastic jars for honey packaging and sales.",
    "specifications": {
      "Size": "500g",
      "Material": "Food-grade plastic"
    },
    "images": ["https://i.imghippo.com/files/PIif1466IGk.jpg"],
    "inStock": true,
    "featured": false,
    "manufacturer": "Ottoman Enterprise",
    "model": "PHJ-500"
  },
  {
    "id": "B8",
    "name": "Plastic Squeeze Bottle",
    "category": "beekeeping",
    "subcategory": "Packaging",
    "price": 700,
    "description": "300ml squeeze bottle for easy honey dispensing.",
    "specifications": {
      "Size": "300ml",
      "Material": "Food-grade plastic"
    },
    "images": ["https://i.imghippo.com/files/iC3678Fow.jpg"],
    "inStock": true,
    "featured": false,
    "manufacturer": "Ottoman Enterprise",
    "model": "PSB-300"
  },
  {
    "id": "B9",
    "name": "Honey Centrifuge Extractor",
    "category": "beekeeping",
    "subcategory": "Honey Processing Equipment",
    "price": 16000000,
    "description": "High-capacity honey extractor with 20-frame capacity and stands.",
    "specifications": {
      "Material": "Steel",
      "FrameCapacity": "20 Frames"
    },
    "images": ["https://i.imghippo.com/files/ekWw7878RpU.jpg"],
    "inStock": true,
    "featured": true,
    "manufacturer": "Ottoman Enterprise",
    "model": "HCE-020"
  },
  {
    "id": "B10",
    "name": "Honey Press",
    "category": "beekeeping",
    "subcategory": "Honey Processing Equipment",
    "price": 1200000,
    "description": "Manual honey press for small-scale honey extraction.",
    "specifications": {
      "Type": "Manual honey press"
    },
    "images": ["https://i.imghippo.com/files/FwRO6201hGY.jpeg"],
    "inStock": true,
    "featured": false,
    "manufacturer": "Ottoman Enterprise",
    "model": "HP-001"
  },
  {
    "id": "B11",
    "name": "Strainers",
    "category": "beekeeping",
    "subcategory": "Honey Processing Equipment",
    "price": 20000,
    "description": "Nylon cloth sieves for filtering honey before packaging.",
    "specifications": {
      "Material": "Nylon cloth"
    },
    "images": ["https://i.imghippo.com/files/JHA4257iFI.webp"],
    "inStock": true,
    "featured": false,
    "manufacturer": "Ottoman Enterprise",
    "model": "NS-001"
  }
  
];

// ---------------------- Vocational Products ----------------------
const vocationalProducts: Product[] = [
  {
    "id": "5",
    "name": "Hair Washing Sink",
    "category": "vocational",
    "subcategory": "Hairdressing",
    "price": 120000,
    "description": "Hard plastic hair washing sink with metallic stand, Italian made.",
    "specifications": {
      "material": "Hard plastic",
      "stand": "Metallic",
      "origin": "Italy"
    },
    "images": [],
    "inStock": true,
    "featured": false,
    "manufacturer": "Italian Brand",
    "model": "Standard"
  },
  {
    "id": "6",
    "name": "Manual Sewing Machine",
    "category": "vocational",
    "subcategory": "Tailoring",
    "price": 400000,
    "description": "Manual sewing machine with original metallic stand, suitable for tailoring training.",
    "specifications": {
      "brand": "Singer or Equivalent",
      "stand": "Metallic"
    },
    "images": [],
    "inStock": true,
    "featured": false,
    "manufacturer": "Singer",
    "model": "Standard"
  },
  {
    "id": "7",
    "name": "Leather Sewing Machine",
    "category": "vocational",
    "subcategory": "Tailoring",
    "price": 750000,
    "description": "Heavy-duty leather sewing machine for industrial tailoring.",
    "specifications": {
      "brand": "Higlead or Equivalent",
      "use": "Leather stitching"
    },
    "images": [],
    "inStock": true,
    "featured": false,
    "manufacturer": "Higlead",
    "model": "Standard"
  },
  {
    "id": "8",
    "name": "Knitting Machine",
    "category": "vocational",
    "subcategory": "Tailoring",
    "price": 500000,
    "description": "Palie Brother KH871 knitting machine for fabric creation and tailoring.",
    "specifications": {
      "brand": "Palie Brother",
      "model": "KH871"
    },
    "images": [],
    "inStock": true,
    "featured": false,
    "manufacturer": "Palie Brother",
    "model": "KH871"
  },
  {
    "id": "9",
    "name": "Overlock Machine Heavy Duty",
    "category": "vocational",
    "subcategory": "Tailoring",
    "price": 1700000,
    "description": "Heavy-duty overlock machine for professional tailoring and garment finishing.",
    "specifications": {
      "type": "Industrial",
      "capacity": "High"
    },
    "images": [],
    "inStock": true,
    "featured": false,
    "manufacturer": "Generic",
    "model": "Industrial"
  },
  {
    "id": "10",
    "name": "Single Embroidery Machine",
    "category": "vocational",
    "subcategory": "Tailoring",
    "price": 18000000,
    "description": "15-needle single embroidery machine for advanced tailoring and embroidery work.",
    "specifications": {
      "needles": "15",
      "type": "Single head"
    },
    "images": [],
    "inStock": true,
    "featured": true,
    "manufacturer": "Generic",
    "model": "15-Needle"
  }
];


// ---------------------- Medical Products ----------------------
const medicalProducts: Product[] = [
 
];

// ---------------------- Promotional Products ----------------------
const promotionalProducts: Product[] = [
  {
    id: "37",
    name: "Custom Branded Mug",
    specifications: { "Material": "Ceramic", "Type": "Promotional" },
    price: 5000,
    category: "promotional",
    subcategory: "Custom Gifts",
    description: "Customizable promotional mug with your logo",
    manufacturer: "PromoCorp",
    model: "MUG-001",
    inStock: true,
    featured: false,
    images: ["https://i.imghippo.com/files/rm2815tgU.jpg"]
  },
  {
    id: "38",
    name: "Promotional T-Shirt",
    specifications: { "Material": "Cotton", "Type": "Promotional" },
    price: 12000,
    category: "promotional",
    subcategory: "T-Shirts",
    description: "High-quality promotional T-shirt for events and giveaways",
    manufacturer: "PromoCorp",
    model: "TS-001",
    inStock: true,
    featured: true,
    images: ["https://i.imghippo.com/files/ysdP2591Jqk.jpg"]
  }
];

// ---------------------- Export All Products ----------------------
export const allProducts: Product[] = [
  ...agriculturalProducts,
  ...beekeepingProducts,
  ...vocationalProducts,
  ...medicalProducts,
  ...promotionalProducts
];

export const getProductsByCategory = (category: ProductCategory): Product[] => {
  return allProducts.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return allProducts.filter(product => product.featured);
};

export const getProductById = (id: string): Product | undefined => {
  return allProducts.find(product => product.id === id);
};


const projects = [
  {
    id: 1,
    title: "Modernization of Al-Rashid Agricultural Complex",
    description: "Complete overhaul of irrigation systems and equipment modernization for a 500-hectare agricultural facility.",
    category: "Agricultural",
    location: "Antalya, Turkey",
    date: "2024",
    teamSize: "12 specialists",
    image: "agricultural-tractor.jpg",
    highlights: [
      "Installed 15 ProField Tractor 2000X units",
      "Deployed smart irrigation covering 500 hectares", 
      "Increased crop yield by 35%",
      "Reduced water consumption by 25%"
    ],
    status: "Completed"
  },
  {
    id: 2,
    title: "Honey Production Facility Setup",
    description: "Establishment of a modern honey production facility with complete beekeeping equipment installation.",
    category: "Beekeeping",
    location: "Izmir, Turkey",
    date: "2024",
    teamSize: "8 specialists",
    image: "beekeeping-hive.jpg",
    highlights: [
      "Set up 200 BeeMax Langstroth hive systems",
      "Installed professional honey extraction facility",
      "Trained 25 beekeepers on modern techniques",
      "Achieved 40% increase in honey production"
    ],
    status: "Completed"
  },
  {
    id: 3,
    title: "Medical Equipment Upgrade - Central Hospital",
    description: "Comprehensive medical equipment installation and staff training for a 300-bed hospital facility.",
    category: "Medical",
    location: "Istanbul, Turkey", 
    date: "2024",
    teamSize: "15 specialists",
    image: "project-medical.jpg",
    highlights: [
      "Installed 50+ pieces of advanced medical equipment",
      "Provided comprehensive staff training",
      "Ensured full regulatory compliance",
      "24/7 support system implementation"
    ],
    status: "In Progress"
  },
  {
    id: 4,
    title: "Industrial Workshop Equipment Installation",
    description: "Complete vocational workshop setup for a technical training institute with modern equipment.",
    category: "Vocational",
    location: "Bursa, Turkey",
    date: "2023",
    teamSize: "10 specialists", 
    image: "vocational-tools.jpg",
    highlights: [
      "Equipped 8 specialized workshops",
      "Installed 200+ professional tools",
      "Trained 50 instructors",
      "Enhanced student learning outcomes by 60%"
    ],
    status: "Completed"
  },
  {
    id: 5,
    title: "Corporate Branding Initiative",
    description: "Large-scale promotional items production and distribution for a multinational corporation.",
    category: "Promotional", 
    location: "Ankara, Turkey",
    date: "2023",
    teamSize: "6 specialists",
    image: "promotional-items.jpg",
    highlights: [
      "Produced 50,000+ branded items",
      "Delivered to 25 international offices",
      "Achieved 95% client satisfaction",
      "Completed 2 weeks ahead of schedule"
    ],
    status: "Completed"
  },
  {
    id: 6,
    title: "Smart Farm Technology Integration",
    description: "Implementation of IoT-enabled agricultural equipment for precision farming operations.",
    category: "Agricultural",
    location: "Konya, Turkey",
    date: "2023", 
    teamSize: "14 specialists",
    image: "project-tech.jpg",
    highlights: [
      "Integrated IoT sensors across 300 hectares",
      "Deployed autonomous farming equipment",
      "Reduced operational costs by 30%",
      "Implemented predictive maintenance system"
    ],
    status: "Completed"
  }
];
