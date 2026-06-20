export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  subcategory?: string;
  price: number;
  description: string;
  specifications: Record<string, string>;
  images: string[];
  inStock: boolean;
  featured: boolean;
  manufacturer: string;
  model: string;
}

export type ProductCategory = 'agricultural' | 'beekeeping' | 'vocational' | 'water' ;

export const categories = [
  {
    id: 'agricultural',
    name: 'Agricultural Tools & Equipment',
    description: 'Professional farming and agricultural machinery for enhanced productivity',
    icon: '🚜'
  },
  {
    id: 'beekeeping',
    name: 'Beekeeping Equipment',
    description: 'Complete beekeeping solutions for honey production and hive management',
    icon: '🐝'
  },
  {
    id: 'vocational',
    name: 'Vocational Items',
    description: 'Professional tools and equipment for various trades and vocations',
    icon: '🔧'
  },
  {
    id: 'water',
    name: 'Water Equipment',
    description: 'Advanced water systems and treatment solutions',
    icon: '💧'
  },
  
] as const;

const agriculturalProducts: Product[] = [
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
      "Flow Rate": "30,000 L/hr"
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
      "Horsepower": "75 HP",
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
      "Working Width": "1.8 Meters",
      "Power Source": "Tractor PTO"
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
];

{
  const productTypes = [
    'Fertilizer Spreader', 'Disc Harrow', 'Hay Baler', 'Mower', 'Plow', 'Tedder',
    'Rake', 'Seeder', 'Sprayer', 'Trailer', 'Manure Spreader', 'Chisel Plow'
  ];
  const manufacturers = ['AgriTech', 'FarmMaster', 'CropPro', 'FieldKing', 'AgroMax'];

  for (let i = 8; i <= 55; i++) {
    const productType = productTypes[(i - 8) % productTypes.length];
    const manufacturer = manufacturers[(i - 8) % manufacturers.length];

    agriculturalProducts.push({
      id: `ag-${i.toString().padStart(3, '0')}`,
      name: `${manufacturer} ${productType} ${Math.floor(Math.random() * 9000) + 1000}`,
      category: 'agricultural',
      price: Math.floor(Math.random() * 50000) + 5000,
      description: `Professional ${productType.toLowerCase()} designed for efficient agricultural operations.`,
      specifications: {
        'Model Year': '2024',
        'Warranty': `${Math.floor(Math.random() * 3) + 2} years`,
        'Power Requirement': `${Math.floor(Math.random() * 200) + 50} HP`,
        'Weight': `${Math.floor(Math.random() * 5000) + 1000} kg`,
        'Certification': 'CE, ISO 9001'
      },
      images: ['https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800'],
      inStock: Math.random() > 0.1,
      featured: Math.random() > 0.8,
      manufacturer,
      model: `${productType.replace(' ', '')}-${Math.floor(Math.random() * 9000) + 1000}`
    });
  }
}

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
      "Frame Capacity": "20 Frames"
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

{
  const productTypes = [
    'Smoker', 'Hive Tool', 'Honey Extractor', 'Uncapping Knife', 'Queen Excluder',
    'Feeder', 'Bee Brush', 'Frame Puller', 'Honey Tank', 'Wax Melter'
  ];
  const manufacturers = ['BeeMax', 'HoneyPro', 'HiveTech', 'BeeKeeper Supply', 'ApiMax'];

  for (let i = 12; i <= 52; i++) {
    const productType = productTypes[(i - 12) % productTypes.length];
    const manufacturer = manufacturers[(i - 12) % manufacturers.length];

    beekeepingProducts.push({
      id: `bk-${i.toString().padStart(3, '0')}`,
      name: `${manufacturer} ${productType} ${Math.floor(Math.random() * 900) + 100}`,
      category: 'beekeeping',
      price: Math.floor(Math.random() * 800) + 50,
      description: `Professional ${productType.toLowerCase()} for efficient beekeeping operations.`,
      specifications: {
        'Material': 'Stainless steel',
        'Warranty': `${Math.floor(Math.random() * 2) + 1} year`,
        'Certification': 'Food grade',
        'Origin': 'EU manufactured',
        'Weight': `${Math.floor(Math.random() * 5) + 0.5} kg`
      },
      images: ['https://images.unsplash.com/photo-1498936178812-4b2e558d2937?w=800'],
      inStock: Math.random() > 0.05,
      featured: Math.random() > 0.85,
      manufacturer,
      model: `${productType.replace(' ', '')}-${Math.floor(Math.random() * 900) + 100}`
    });
  }
}

const vocationalProducts: Product[] = [
  {
    "id": "5",
    "name": "Hair Washing Sink",
    "category": "vocational",
    "subcategory": "Hairdressing",
    "price": 120000,
    "description": "Hard plastic hair washing sink with metallic stand, Italian made.",
    "specifications": {
      "Material": "Hard plastic",
      "Stand": "Metallic",
      "Origin": "Italy"
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
      "Brand": "Singer or Equivalent",
      "Stand": "Metallic"
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
      "Brand": "Higlead or Equivalent",
      "Use": "Leather stitching"
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
      "Brand": "Palie Brother",
      "Model": "KH871"
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
      "Type": "Industrial",
      "Capacity": "High"
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
      "Needles": "15",
      "Type": "Single head"
    },
    "images": [],
    "inStock": true,
    "featured": true,
    "manufacturer": "Generic",
    "model": "15-Needle"
  }
];

{
  const productTypes = [
    'Power Drill', 'Angle Grinder', 'Circular Saw', 'Welding Machine', 'Safety Helmet',
    'Work Gloves', 'Tool Box', 'Measuring Tape', 'Level', 'Socket Set'
  ];
  const manufacturers = ['ProTool', 'WorkMaster', 'IndustrialMax', 'TradePro', 'CraftTech'];

  for (let i = 11; i <= 50; i++) {
    const productType = productTypes[(i - 11) % productTypes.length];
    const manufacturer = manufacturers[(i - 11) % manufacturers.length];

    vocationalProducts.push({
      id: `vc-${i.toString().padStart(3, '0')}`,
      name: `${manufacturer} ${productType} ${Math.floor(Math.random() * 9000) + 1000}`,
      category: 'vocational',
      price: Math.floor(Math.random() * 2000) + 100,
      description: `Professional-grade ${productType.toLowerCase()} for demanding work environments.`,
      specifications: {
        'Power Rating': `${Math.floor(Math.random() * 2000) + 500}W`,
        'Warranty': `${Math.floor(Math.random() * 3) + 1} years`,
        'Safety Rating': 'IP65',
        'Material': 'Industrial grade',
        'Certification': 'CE, UL Listed'
      },
      images: ['https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800', 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800'],
      inStock: Math.random() > 0.1,
      featured: Math.random() > 0.85,
      manufacturer,
      model: `${productType.replace(' ', '')}-${Math.floor(Math.random() * 9000) + 1000}`
    });
  }
}

const waterProducts: Product[] = [];

{
  const productTypes = [
    'Water Pump', 'Filtration System', 'Water Treatment Unit', 'Irrigation Controller', 'Pressure Tank',
    'Water Heater', 'Reverse Osmosis System', 'Sewage Pump', 'Submersible Pump', 'Water Meter'
  ];
  const manufacturers = ['AquaFlow', 'HydroTech', 'PureWater Solutions', 'BlueWave Systems', 'EcoH2O'];

  for (let i = 1; i <= 50; i++) {
    const productType = productTypes[(i - 1) % productTypes.length];
    const manufacturer = manufacturers[(i - 1) % manufacturers.length];

    waterProducts.push({
      id: `wt-${i.toString().padStart(3, '0')}`,
      name: `${manufacturer} ${productType} ${Math.floor(Math.random() * 9000) + 1000}`,
      category: 'water',
      price: Math.floor(Math.random() * 100000) + 5000,
      description: `Reliable ${productType.toLowerCase()} for efficient water management and distribution.`,
      specifications: {
        'Warranty': `${Math.floor(Math.random() * 3) + 1} years`,
        'Power Supply': '220V AC',
        'Certification': 'ISO 9001, CE',
        'Material': 'Stainless Steel',
        'Service': '24/7 support available'
      },
      images: ['https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800', 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800'],
      inStock: Math.random() > 0.15,
      featured: Math.random() > 0.8,
      manufacturer,
      model: `${productType.replace(' ', '')}-${Math.floor(Math.random() * 9000) + 1000}`
    });
  }
}

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

export const allProducts: Product[] = [
  ...agriculturalProducts,
  ...beekeepingProducts,
  ...vocationalProducts,
  ...waterProducts,
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
