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

export type ProductCategory = 'agricultural' | 'beekeeping' | 'vocational' | 'water' | 'promotional';

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
    id: 'medical',
    name: 'medical Equipment',
    description: 'Advanced medical systems and treatment solutions',
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
  },
  {
    "id": "ag-021",
    "name": "Knapsack Sprayer",
    "category": "agricultural",
    "subcategory": "Sprayers",
    "price": 70000,
    "description": "20-litre manual knapsack sprayer for pesticides and foliar feeds.",
    "specifications": {
      "Capacity": "20 litres",
      "Type": "Manual knapsack",
      "Material": "Durable polyethylene"
    },
    "images": ["https://images.unsplash.com/photo-1524594157360-61597f2d90b5?w=800"],
    "inStock": true,
    "featured": false,
    "manufacturer": "Ottoman Enterprise",
    "model": "KS-20"
  },
  {
    "id": "ag-022",
    "name": "Motorized Knapsack",
    "category": "agricultural",
    "subcategory": "Sprayers",
    "price": 580000,
    "description": "Motorized knapsack sprayer for fast, efficient field spraying.",
    "specifications": {
      "Type": "Motorized",
      "Capacity": "20 litres",
      "Power": "2-stroke engine"
    },
    "images": ["https://images.unsplash.com/photo-1592331514812-7a0a4576121d?w=800"],
    "inStock": true,
    "featured": false,
    "manufacturer": "Ottoman Enterprise",
    "model": "MK-100"
  },
  {
    "id": "ag-023",
    "name": "Victor Zeb Fungicide",
    "category": "agricultural",
    "subcategory": "Crop Protection",
    "price": 45000,
    "description": "1kg fungicide powder for broad-spectrum crop disease control.",
    "specifications": {
      "Weight": "1 kg",
      "Use": "Fungicide",
      "Pack Size": "1 Kg"
    },
    "images": ["https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=800"],
    "inStock": true,
    "featured": false,
    "manufacturer": "Victor Agro",
    "model": "VZ-1000"
  },
  {
    "id": "ag-024",
    "name": "Optimizer 40%",
    "category": "agricultural",
    "subcategory": "Crop Nutrition",
    "price": 40000,
    "description": "Liquid nutrient optimizer formulated at 40% concentration for improved plant performance.",
    "specifications": {
      "Concentration": "40%",
      "Volume": "1 litre",
      "Application": "Foliar feed"
    },
    "images": ["https://images.unsplash.com/photo-1518933165971-611dbc9c412d?w=800"],
    "inStock": true,
    "featured": false,
    "manufacturer": "Optimizer Agro",
    "model": "OPT-40"
  },
  {
    "id": "ag-025",
    "name": "Dudu Accelamectin Insecticide",
    "category": "agricultural",
    "subcategory": "Crop Protection",
    "price": 35000,
    "description": "10-litre insecticide for crop pest control, suitable for vegetables and cash crops.",
    "specifications": {
      "Volume": "10 litres",
      "Type": "Insecticide",
      "Active Ingredient": "Accelamectin"
    },
    "images": ["https://images.unsplash.com/photo-1498842812179-c81beecf902c?w=800"],
    "inStock": true,
    "featured": false,
    "manufacturer": "Dudu Agro",
    "model": "DA-10L"
  },
  {
    "id": "ag-026",
    "name": "Dudu Alpha 500ml",
    "category": "agricultural",
    "subcategory": "Crop Protection",
    "price": 30000,
    "description": "500ml insecticide concentrate for targeted pest management.",
    "specifications": {
      "Volume": "500 ml",
      "Pack Type": "Bottle",
      "Use": "Insecticide"
    },
    "images": ["https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800"],
    "inStock": true,
    "featured": false,
    "manufacturer": "Dudu Agro",
    "model": "DA-500"
  },
  {
    "id": "ag-027",
    "name": "Striker 1 Litre",
    "category": "agricultural",
    "subcategory": "Crop Protection",
    "price": 45000,
    "description": "1 litre crop protection solution for effective weed and pest control.",
    "specifications": {
      "Volume": "1 litre",
      "Type": "Herbicide/ insecticide",
      "Application": "Foliar spray"
    },
    "images": ["https://images.unsplash.com/photo-1511174511562-5f7f18b0a602?w=800"],
    "inStock": true,
    "featured": false,
    "manufacturer": "Striker Agro",
    "model": "STR-1L"
  },
  {
    "id": "ag-028",
    "name": "Rodomic Fungicide",
    "category": "agricultural",
    "subcategory": "Crop Protection",
    "price": 80000,
    "description": "1kg fungicide for disease prevention in cereals and vegetables.",
    "specifications": {
      "Weight": "1 kg",
      "Use": "Fungicide",
      "Packaging": "Powder"
    },
    "images": ["https://images.unsplash.com/photo-1518770660439-4636190af475?w=800"],
    "inStock": true,
    "featured": false,
    "manufacturer": "Rodomic",
    "model": "RD-1000"
  },
  {
    "id": "ag-029",
    "name": "Mancozeb 1kg",
    "category": "agricultural",
    "subcategory": "Crop Protection",
    "price": 26000,
    "description": "1kg mancozeb fungicide for crop disease control.",
    "specifications": {
      "Weight": "1 kg",
      "Active Ingredient": "Mancozeb",
      "Application": "Foliar spray"
    },
    "images": ["https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800"],
    "inStock": true,
    "featured": false,
    "manufacturer": "AgroChem",
    "model": "MAN-1KG"
  },
  {
    "id": "ag-030",
    "name": "UREA Fertilizer 50Kg",
    "category": "agricultural",
    "subcategory": "Fertilizers",
    "price": 125000,
    "description": "50kg bag of urea fertilizer for high-nitrogen crop nutrition.",
    "specifications": {
      "Weight": "50 kg",
      "Nutrient": "Nitrogen 46%"
    },
    "images": ["https://images.unsplash.com/photo-1473168124609-2fb82ef1c5cf?w=800"],
    "inStock": true,
    "featured": false,
    "manufacturer": "AgroFert",
    "model": "UREA-50"
  },
  {
    "id": "ag-031",
    "name": "CAN Fertilizer 50Kg",
    "category": "agricultural",
    "subcategory": "Fertilizers",
    "price": 120000,
    "description": "50kg bag of calcium ammonium nitrate fertilizer for balanced crop development.",
    "specifications": {
      "Weight": "50 kg",
      "Nutrient": "Nitrogen 27%, Calcium 10%"
    },
    "images": ["https://images.unsplash.com/photo-1518732714860-b62714ce0c1c?w=800"],
    "inStock": true,
    "featured": false,
    "manufacturer": "AgroFert",
    "model": "CAN-50"
  },
  {
    "id": "ag-032",
    "name": "NPK Fertilizer 50Kg",
    "category": "agricultural",
    "subcategory": "Fertilizers",
    "price": 125000,
    "description": "50kg bag of NPK fertilizer for all-round crop nutrition.",
    "specifications": {
      "Weight": "50 kg",
      "Nutrient": "NPK blend"
    },
    "images": ["https://images.unsplash.com/photo-1485960994840-902a67c57f46?w=800"],
    "inStock": true,
    "featured": false,
    "manufacturer": "AgroFert",
    "model": "NPK-50"
  },
  {
    "id": "ag-033",
    "name": "Hand Hoe 3LB",
    "category": "agricultural",
    "subcategory": "Farm Tools",
    "price": 14000,
    "description": "3LB cock brand hand hoe for weeding and soil preparation.",
    "specifications": {
      "Weight": "3 LB",
      "Handle": "Wooden",
      "Blade Material": "Forged steel"
    },
    "images": ["https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800"],
    "inStock": true,
    "featured": false,
    "manufacturer": "Cock Brand",
    "model": "HH-3LB"
  },
  {
    "id": "ag-034",
    "name": "Slasher",
    "category": "agricultural",
    "subcategory": "Farm Tools",
    "price": 8000,
    "description": "Wooden-handle slasher for clearing vegetation and harvesting.",
    "specifications": {
      "Handle": "Wooden",
      "Blade Length": "18 inches"
    },
    "images": ["https://images.unsplash.com/photo-1494526585095-c41746248156?w=800"],
    "inStock": true,
    "featured": false,
    "manufacturer": "Field Tools",
    "model": "SL-001"
  },
  {
    "id": "ag-035",
    "name": "Panga",
    "category": "agricultural",
    "subcategory": "Farm Tools",
    "price": 7000,
    "description": "Wooden-handle panga for cutting brush and clearing fields.",
    "specifications": {
      "Handle": "Wooden",
      "Blade Length": "16 inches"
    },
    "images": ["https://images.unsplash.com/photo-1585060691685-26b0a6d7a3f4?w=800"],
    "inStock": true,
    "featured": false,
    "manufacturer": "Field Tools",
    "model": "PG-001"
  },
  {
    "id": "ag-036",
    "name": "Diamond Axe",
    "category": "agricultural",
    "subcategory": "Farm Tools",
    "price": 30000,
    "description": "Diamond-brand axe for heavy chopping and farm use.",
    "specifications": {
      "Blade": "Forged steel",
      "Handle": "Hardwood"
    },
    "images": ["https://images.unsplash.com/photo-1515548219893-9918f89a8f38?w=800"],
    "inStock": true,
    "featured": false,
    "manufacturer": "Diamond",
    "model": "AX-001"
  },
  {
    "id": "ag-037",
    "name": "Rake",
    "category": "agricultural",
    "subcategory": "Farm Tools",
    "price": 15000,
    "description": "Metallic-handle rake for collecting debris and leveling soil.",
    "specifications": {
      "Handle": "Metallic",
      "Tines": "Steel"
    },
    "images": ["https://images.unsplash.com/photo-1523895665938-35dbcc24f321?w=800"],
    "inStock": true,
    "featured": false,
    "manufacturer": "Field Tools",
    "model": "RK-001"
  },
  {
    "id": "ag-038",
    "name": "Wheel Barrow",
    "category": "agricultural",
    "subcategory": "Farm Tools",
    "price": 120000,
    "description": "Reliance wheel barrow ideal for moving soil, produce, and materials.",
    "specifications": {
      "Capacity": "100 Liters",
      "Material": "Steel frame"
    },
    "images": ["https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=800"],
    "inStock": true,
    "featured": false,
    "manufacturer": "Reliance",
    "model": "WB-100"
  },
  {
    "id": "ag-039",
    "name": "Gumboots",
    "category": "agricultural",
    "subcategory": "Protective Gear",
    "price": 70000,
    "description": "Heavy-duty gumboots for farm work and wet conditions.",
    "specifications": {
      "Material": "PVC",
      "Size Range": "39-45"
    },
    "images": ["https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800"],
    "inStock": true,
    "featured": false,
    "manufacturer": "AgriWear",
    "model": "GB-100"
  },
  {
    "id": "ag-040",
    "name": "Ox-Plough Strong Type",
    "category": "agricultural",
    "subcategory": "Ploughs",
    "price": 350000,
    "description": "Strong-type ox plough for traditional ploughing and land preparation.",
    "specifications": {
      "Type": "Strong Type",
      "Material": "Forged steel"
    },
    "images": ["https://images.unsplash.com/photo-1527694224013-d0843214b19b?w=800"],
    "inStock": true,
    "featured": false,
    "manufacturer": "AgriClassic",
    "model": "OP-STRONG"
  }
];

{
  const productTypes = [
    'Fertilizer Spreader', 'Disc Harrow', 'Hay Baler', 'Mower', 'Plow', 'Tedder',
    'Rake', 'Seeder', 'Sprayer', 'Trailer', 'Manure Spreader', 'Chisel Plow'
  ];
  const manufacturers = ['AgriTech', 'FarmMaster', 'CropPro', 'FieldKing', 'AgroMax'];

  for (let i = 8; i <= 25; i++) {
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
  },
  {
    "id": "B1",
    "name": "Bee Hives KTB",
    "category": "beekeeping",
    "subcategory": "Hive Equipment",
    "price": 85000,
    "description": "KTB-style bee hive suitable for commercial beekeeping and colony expansion.",
    "specifications": {
      "Type": "KTB",
      "Material": "Wood",
      "Package": "Single hive"
    },
    "images": ["https://images.unsplash.com/photo-1493238792000-8113da705763?w=800"],
    "inStock": true,
    "featured": false,
    "manufacturer": "Ottoman Enterprise",
    "model": "KT-001"
  },
  {
    "id": "B6",
    "name": "Bee Hives Langstroth",
    "category": "beekeeping",
    "subcategory": "Hive Equipment",
    "price": 180000,
    "description": "Langstroth bee hive designed for easy frame handling and honey management.",
    "specifications": {
      "Type": "Langstroth",
      "Material": "Wood",
      "Package": "Single hive"
    },
    "images": ["https://images.unsplash.com/photo-1524594157360-61597f2d90b5?w=800"],
    "inStock": true,
    "featured": false,
    "manufacturer": "Ottoman Enterprise",
    "model": "LS-001"
  },
  {
    "id": "B12",
    "name": "Honey Harvesting Gear",
    "category": "beekeeping",
    "subcategory": "Harvesting Equipment",
    "price": 150000,
    "description": "Complete honey harvesting gear kit for efficient extraction and transport.",
    "specifications": {
      "Type": "Complete kit",
      "Contents": "Frames, tools, containers"
    },
    "images": ["https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800"],
    "inStock": true,
    "featured": false,
    "manufacturer": "BeePro",
    "model": "HHG-001"
  },
  {
    "id": "B13",
    "name": "Smoker Diamond",
    "category": "beekeeping",
    "subcategory": "Hive Equipment",
    "price": 50000,
    "description": "Diamond smoker for gentle hive calming during inspections.",
    "specifications": {
      "Type": "Smoker",
      "Material": "Metal"
    },
    "images": ["https://images.unsplash.com/photo-1492522791000-59d9345be5ff?w=800"],
    "inStock": true,
    "featured": false,
    "manufacturer": "Diamond",
    "model": "SM-001"
  },
  {
    "id": "B14",
    "name": "Honey Bait Block",
    "category": "beekeeping",
    "subcategory": "Attractants",
    "price": 30000,
    "description": "Honey bait block to attract bees for colony relocation and monitoring.",
    "specifications": {
      "Type": "Bait block",
      "Weight": "1 block"
    },
    "images": ["https://images.unsplash.com/photo-1465188162913-8fb2b1c2a9d6?w=800"],
    "inStock": true,
    "featured": false,
    "manufacturer": "BeeMate",
    "model": "HB-001"
  },
  {
    "id": "B15",
    "name": "Honey Tester Hydrometer",
    "category": "beekeeping",
    "subcategory": "Testing Equipment",
    "price": 300000,
    "description": "Hydrometer for precise honey moisture testing and quality control.",
    "specifications": {
      "Type": "Hydrometer",
      "Model": "Honey tester"
    },
    "images": ["https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"],
    "inStock": true,
    "featured": false,
    "manufacturer": "HoneyTest",
    "model": "HT-100"
  },
  {
    "id": "B16",
    "name": "Honey Refractometer",
    "category": "beekeeping",
    "subcategory": "Testing Equipment",
    "price": 400000,
    "description": "Precision refractometer for measuring honey moisture content accurately.",
    "specifications": {
      "Type": "Refractometer",
      "Origin": "UK model"
    },
    "images": ["https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=800"],
    "inStock": true,
    "featured": false,
    "manufacturer": "Atago",
    "model": "HR-100"
  },
  {
    "id": "B17",
    "name": "Honey Testing Kit",
    "category": "beekeeping",
    "subcategory": "Testing Equipment",
    "price": 350000,
    "description": "Complete honey testing kit with Atago/UK model instruments.",
    "specifications": {
      "Type": "Testing kit",
      "Contents": "Refractometer, hydrometer"
    },
    "images": ["https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800"],
    "inStock": true,
    "featured": false,
    "manufacturer": "HoneyTest",
    "model": "HTK-001"
  },
  {
    "id": "B18",
    "name": "Stick Candle Mold",
    "category": "beekeeping",
    "subcategory": "Candle Making",
    "price": 200000,
    "description": "Stick candle mold for producing beekeeping candles from beeswax.",
    "specifications": {
      "Type": "Mold",
      "Capacity": "Multiple sticks"
    },
    "images": ["https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800"],
    "inStock": true,
    "featured": false,
    "manufacturer": "WaxCraft",
    "model": "SCM-001"
  },
  {
    "id": "B19",
    "name": "Double Stainless Steel Filter",
    "category": "beekeeping",
    "subcategory": "Honey Processing Equipment",
    "price": 70000,
    "description": "Double stainless steel filter for clean honey filtration before packaging.",
    "specifications": {
      "Type": "Double filter",
      "Material": "Stainless steel"
    },
    "images": ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800"],
    "inStock": true,
    "featured": false,
    "manufacturer": "BeePro",
    "model": "DSF-001"
  }
];

{
  const productTypes = [
    'Smoker', 'Hive Tool', 'Honey Extractor', 'Uncapping Knife', 'Queen Excluder',
    'Feeder', 'Bee Brush', 'Frame Puller', 'Honey Tank', 'Wax Melter'
  ];
  const manufacturers = ['BeeMax', 'HoneyPro', 'HiveTech', 'BeeKeeper Supply', 'ApiMax'];

  for (let i = 12; i <= 17; i++) {
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

  for (let i = 11; i <= 29; i++) {
    const productType = productTypes[(i - 11) % productTypes.length];
    const manufacturer = manufacturers[(i - 11) % manufacturers.length];

    vocationalProducts.push({
      id: `vc-${i.toString().padStart(3, '0')}`,
      name: `${manufacturer} ${productType} ${Math.floor(Math.random() * 9000) + 1000}`,
      category: 'vocational',
      price: Math.floor(Math.random() * 2000) + 100,
      description: `Professional-grade ${productType.toLowerCase()} for demanding work environments.`,
      specifications: {
        'Power Rating': `${Math.floor(Matgith.random() * 2000) + 500}W`,
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

const medicalproducts: Product[] = [
  {
    id: "md-001",
    name: "Digital Blood Pressure Monitor",
    category: "medical",
    subcategory: "diagnostic",
    price: 85000,
    description: "Automatic blood pressure monitor for accurate home and clinical use.",
    specifications: {
      Type: "Digital",
      Display: "LCD",
      Power: "Battery Operated"
    },
    images: ["https://images.unsplash.com/photo-1584515933487-779824d29309?w=800"],
    inStock: true,
    featured: true,
    manufacturer: "HealthCare",
    model: "BPM-100"
  },
  {
    id: "md-002",
    name: "Pulse Oximeter",
    category: "medical",
    subcategory: "diagnostic",
    price: 45000,
    description: "Finger pulse oximeter for measuring blood oxygen saturation and pulse rate.",
    specifications: {
      Type: "Portable",
      Display: "OLED",
      Power: "Battery Operated"
    },
    images: ["https://images.unsplash.com/photo-1584362917165-526a968579e8?w=800"],
    inStock: true,
    featured: false,
    manufacturer: "MediCare",
    model: "PO-50"
  },
  {
    id: "md-003",
    name: "Infrared Thermometer",
    category: "medical",
    subcategory: "diagnostic",
    price: 35000,
    description: "Non-contact infrared thermometer for quick temperature readings.",
    specifications: {
      Type: "Infrared",
      Range: "32°C - 42.9°C",
      Display: "LCD"
    },
    images: ["https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800"],
    inStock: true,
    featured: false,
    manufacturer: "ThermoCare",
    model: "IT-200"
  },
  {
    id: "md-004",
    name: "Nebulizer Machine",
    category: "medical",
    subcategory: "respiratory",
    price: 120000,
    description: "Portable nebulizer for respiratory therapy.",
    specifications: {
      Type: "Compressor",
      Power: "220V",
      FlowRate: "0.3 ml/min"
    },
    images: ["https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800"],
    inStock: true,
    featured: true,
    manufacturer: "AeroCare",
    model: "NB-300"
  },
  {
    id: "md-005",
    name: "Glucometer",
    category: "medical",
    subcategory: "diagnostic",
    price: 60000,
    description: "Blood glucose meter for diabetic monitoring.",
    specifications: {
      Type: "Digital",
      Sample: "Capillary Blood",
      Memory: "500 Records"
    },
    images: ["https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800"],
    inStock: true,
    featured: false,
    manufacturer: "GlucoPro",
    model: "GM-100"
  },
  {
    id: "md-006",
    name: "Digital Weighing Scale",
    category: "medical",
    subcategory: "fitness",
    price: 50000,
    description: "Electronic weighing scale for body weight monitoring.",
    specifications: {
      Type: "Digital",
      Capacity: "180kg",
      Display: "LCD"
    },
    images: ["https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800"],
    inStock: true,
    featured: false,
    manufacturer: "BodyCare",
    model: "WS-180"
  },
  {
    id: "md-007",
    name: "Stethoscope",
    category: "medical",
    subcategory: "diagnostic",
    price: 40000,
    description: "Professional acoustic stethoscope for medical examinations.",
    specifications: {
      Material: "Stainless Steel",
      Type: "Dual Head"
    },
    images: ["https://images.unsplash.com/photo-1580281657527-47e1f0d44b4f?w=800"],
    inStock: true,
    featured: true,
    manufacturer: "MediSound",
    model: "ST-01"
  },
  {
    id: "md-008",
    name: "Wheelchair",
    category: "medical",
    subcategory: "mobility",
    price: 450000,
    description: "Foldable wheelchair with comfortable seating.",
    specifications: {
      Material: "Steel",
      Capacity: "120kg"
    },
    images: ["https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800"],
    inStock: true,
    featured: true,
    manufacturer: "MobilityCare",
    model: "WC-120"
  },
  {
    id: "md-009",
    name: "Walking Frame",
    category: "medical",
    subcategory: "mobility",
    price: 150000,
    description: "Aluminum walking frame for elderly support.",
    specifications: {
      Material: "Aluminum",
      Adjustable: "Yes"
    },
    images: ["https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800"],
    inStock: true,
    featured: false,
    manufacturer: "MobilityCare",
    model: "WF-10"
  },
  {
    id: "md-010",
    name: "Crutches",
    category: "medical",
    subcategory: "mobility",
    price: 80000,
    description: "Adjustable aluminum crutches for mobility assistance.",
    specifications: {
      Material: "Aluminum",
      Adjustable: "Yes"
    },
    images: ["https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800"],
    inStock: true,
    featured: false,
    manufacturer: "MobilityCare",
    model: "CR-20"
  },
  {
    id: "md-011",
    name: "Examination Bed",
    category: "medical",
    subcategory: "hospital",
    price: 650000,
    description: "Comfortable examination couch for clinics and hospitals.",
    specifications: {
      Material: "Steel Frame",
      Length: "190cm"
    },
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800"],
    inStock: true,
    featured: false,
    manufacturer: "HospitalPro",
    model: "EB-190"
  },
  {
    id: "md-012",
    name: "Oxygen Concentrator",
    category: "medical",
    subcategory: "respiratory",
    price: 1200000,
    description: "Medical oxygen concentrator for home and hospital use.",
    specifications: {
      FlowRate: "5L/min",
      Power: "220V"
    },
    images: ["https://images.unsplash.com/photo-1584515933487-779824d29309?w=800"],
    inStock: true,
    featured: true,
    manufacturer: "OxyCare",
    model: "OC-5"
  },
  {
    id: "md-013",
    name: "Suction Machine",
    category: "medical",
    subcategory: "hospital",
    price: 500000,
    description: "Portable suction machine for airway clearance.",
    specifications: {
      Type: "Electric",
      Capacity: "1000ml"
    },
    images: ["https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800"],
    inStock: true,
    featured: false,
    manufacturer: "MedVac",
    model: "SM-100"
  },
  {
    id: "md-014",
    name: "ECG Machine",
    category: "medical",
    subcategory: "cardiology",
    price: 2500000,
    description: "12-channel ECG machine for heart monitoring.",
    specifications: {
      Channels: "12",
      Display: "LCD"
    },
    images: ["https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=800"],
    inStock: true,
    featured: true,
    manufacturer: "CardioPro",
    model: "ECG-12"
  },
  {
    id: "md-015",
    name: "Hospital Bed",
    category: "medical",
    subcategory: "hospital",
    price: 1800000,
    description: "Adjustable hospital bed with side rails.",
    specifications: {
      Material: "Steel",
      Adjustable: "Yes"
    },
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800"],
    inStock: true,
    featured: true,
    manufacturer: "HospitalPro",
    model: "HB-01"
  },
  {
    id: "md-016",
    name: "Patient Monitor",
    category: "medical",
    subcategory: "monitoring",
    price: 3500000,
    description: "Multiparameter patient monitor for ICU and emergency care.",
    specifications: {
      Display: "12 inch",
      Parameters: "ECG, SPO2, NIBP"
    },
    images: ["https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=800"],
    inStock: true,
    featured: true,
    manufacturer: "LifeCare",
  },
]; 


export const allProducts: Product[] = [
  ...agriculturalProducts,
  ...beekeepingProducts,
  ...vocationalProducts,
  ...medicalProducts,
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
