const fs = require('fs');
const path = require('path');

const products = require('./extracted_products.json');

const categoryMap = {
    'Bitter Gourd': 'vegetable',
    'Bottle Gourd': 'vegetable',
    'Pumpkin': 'vegetable',
    'PUMPKIN': 'vegetable',
    'Ash gourd': 'vegetable',
    'Ridge Gourd': 'vegetable',
    'Watermelon': 'vegetable',
    'Sponge Gourd': 'vegetable',
    'Cucumber': 'vegetable',
    'CUCUMBER': 'vegetable',
    'Tomato': 'vegetable',
    'Hot Pepper': 'vegetable',
    'Capsicum': 'vegetable',
    'Eggplant': 'vegetable',
    'Egg Plant': 'vegetable',
    'Okra': 'vegetable',
    'Cauliflower': 'vegetable',
    'Beet Root': 'vegetable',
    'Radish': 'vegetable',
    'Dolichos Bean': 'vegetable',
    'Pea': 'vegetable',
    'Cowpea': 'vegetable',
    'Cowpea Pole (Green)': 'vegetable',
    'Cowpea Bush (Red)': 'vegetable',
    'French Bean': 'vegetable',
    'Maize': 'field_crop',
    'Mustard': 'field_crop',
    'Sweet corn': 'field_crop',
};

// Group by crop
const grouped = {};

const imageMap = {
    'Bitter Gourd': '/Website Images/generated/bitter-gourd.png',
    'Bottle Gourd': '/Website Images/generated/bottle-gourd.png',
    'Pumpkin': '/Website Images/generated/pumpkin.png',
    'Ash gourd': '/Website Images/generated/bottle-gourd.png', // Fallback
    'Ridge Gourd': '/Website Images/generated/ridge-gourd.png',
    'Watermelon': '/Website Images/generated/watermelon.png',
    'Sponge Gourd': '/Website Images/generated/sponge-gourd.png',
    'Cucumber': '/Website Images/generated/cucumber.png',
    'Tomato': '/Website Images/generated/tomato.png',
    'Hot Pepper': '/Website Images/generated/hot-pepper.png',
    'Capsicum': '/Website Images/generated/hot-pepper.png', // Fallback
    'Eggplant': '/Website Images/generated/eggplant.png',
    'Okra': '/Website Images/generated/okra.png',
    'Cauliflower': '/Website Images/generated/cauliflower.png',
    'Beet Root': '/Website Images/generated/radish.png', // Fallback: similar root
    'Radish': '/Website Images/generated/radish.png',
    'Dolichos Bean': '/Website Images/generated/french-bean.png', // Fallback
    'Pea': '/Website Images/generated/french-bean.png', // Fallback
    'Cowpea': '/Website Images/generated/cowpea.png',
    'French Bean': '/Website Images/generated/french-bean.png',
    'Maize': '/Website Images/generated/maize.png',
    'Mustard': '/Website Images/generated/mustard.png',
    'Sweet corn': '/Website Images/generated/maize.png'
};

products.forEach(p => {
    let cropName = p.crop.trim();
    // Normalize crop name
    if (cropName.toUpperCase() === 'PUMPKIN') cropName = 'Pumpkin';
    if (cropName.toUpperCase() === 'CUCUMBER') cropName = 'Cucumber';
    if (cropName === 'Egg Plant') cropName = 'Eggplant';
    if (cropName.includes('Cowpea')) cropName = 'Cowpea';
    if (cropName === 'Sweet corn') cropName = 'Maize'; // Group Sweet Corn with Maize? Or separate? Let's keep separate or merge. User has Maize (Makka).

    // Fix "Maize : Angad - 1217" -> crop "Maize", variety "Angad - 1217"
    // My parser did that.

    if (!grouped[cropName]) {
        let image = "/Website Images/generated/vegetable_seeds.png";
        if (categoryMap[p.crop] === 'field_crop') image = "/Website Images/generated/field_crops.png";

        // Use specific image if available
        if (imageMap[cropName]) {
            image = imageMap[cropName];
        }

        grouped[cropName] = {
            title: cropName,
            slug: cropName.toLowerCase().replace(/[\s\(\)]+/g, '-'),
            category: categoryMap[p.crop] || 'vegetable', // Default to vegetable
            cropType: categoryMap[p.crop] === 'field_crop' ? 'Field Crop' : 'Vegetable', // Simple logic
            isHybrid: true, // Accessing PDF title "Product Catalogue-Hybrids" suggests these are hybrids. OP section starts later.
            image: image,
            hoverImages: [image],
            variants: [],
            specs: [] // Aggregate?
        };
    }

    // Clean specs
    const cleanSpecs = {};
    for (const [k, v] of Object.entries(p.specs)) {
        if (v && v.length < 50) cleanSpecs[k] = v; // Filter long noise
    }

    // Spec string for variant
    // e.g. "Fruit Weight: 50g, Length: 10cm"
    const specParts = [];
    if (cleanSpecs['Fruit Weight']) specParts.push(cleanSpecs['Fruit Weight']);
    if (cleanSpecs['Days to first picking']) specParts.push(cleanSpecs['Days to first picking']);
    if (cleanSpecs['Days to harvest']) specParts.push(cleanSpecs['Days to harvest']);

    const specStr = specParts.join(', ') || "Standard Quality";

    grouped[cropName].variants.push({
        name: p.variety,
        specs: specStr,
        price: 150, // Dummy
        mrp: 300,
        packSize: "10g",
        fullSpecs: cleanSpecs
    });
});

// Generate TS output
let tsOutput = `export const FALLBACK_INVENTORY = [\n`;

let idCounter = 1;

for (const [crop, data] of Object.entries(grouped)) {
    // Determine image - ALREADY DONE IN GROUPING
    let image = data.image;

    // Determine common specs for the main product card
    // We can take the fullSpecs of the first variant as the "Technical Specifications" for the product modal
    const mainSpecs = data.variants[0]?.fullSpecs || {};
    const specList = Object.entries(mainSpecs).map(([k, v]) => `{ label: "${k}", value: "${v}" }`).join(',\n            ');

    tsOutput += `    {
        _id: 'fb-${idCounter++}',
        title: "${data.title}",
        slug: "${data.slug}",
        category: "${data.category}",
        cropType: "${data.cropType}",
        isHybrid: ${data.isHybrid},
        image: "${image}",
        hoverImages: ["${image}"],
        variants: [
${data.variants.map(v => `            { name: "${v.name}", specs: "${v.specs.replace(/"/g, '\\"')}", price: ${v.price}, mrp: ${v.mrp}, packSize: "${v.packSize}" }`).join(',\n')}
        ],
        specifications: [
            ${specList}
        ]
    },\n`;
}

// Add Fruits and Forestry (Hardcoded as they were not in PDF)
const fruitsAndForestry = [
    {
        _id: 'fb-100',
        title: "Guava Plants",
        slug: "guava",
        category: "fruit",
        cropType: "Fruit",
        isHybrid: true,
        image: "/Website Images/guava(Hero)/Hero.jpg",
        hoverImages: ["/Website Images/guava(Hero)/Hero.jpg"],
        variants: [
            { name: "Taiwan Pink", specs: "Fleshy, Less Seeds", price: 120, mrp: 240, packSize: "1 Plant" },
            { name: "Allahabad Safeda", specs: "Sweet, White Flesh", price: 100, mrp: 200, packSize: "1 Plant" }
        ],
        specifications: [
            { label: "Fruit Weight", value: "250-500g" },
            { label: "Flesh Colour", value: "Pink/White" },
            { label: "Plant Height", value: "2-3 Feet" }
        ]
    },
    {
        _id: 'fb-101',
        title: "Dragon Fruit",
        slug: "dragon-fruit",
        category: "fruit",
        cropType: "Fruit",
        isHybrid: true,
        image: "/Website Images/Dragon Fruit(Hero)/Hero.jpg",
        hoverImages: ["/Website Images/Dragon Fruit(Hero)/Hero.jpg"],
        variants: [
            { name: "Red Hybrid", specs: "Dark Red Flesh, High Antioxidant", price: 150, mrp: 300, packSize: "1 Plant" },
            { name: "White Giant", specs: "Large Fruit, White Flesh", price: 150, mrp: 300, packSize: "1 Plant" }
        ],
        specifications: [
            { label: "Fruit Weight", value: "300-600g" },
            { label: "Flesh Colour", value: "Red/White" },
            { label: "Variety", value: "Hybrid" }
        ]
    },
    {
        _id: 'fb-102',
        title: "Lemon (Nimbu)",
        slug: "lemon",
        category: "fruit",
        cropType: "Fruit",
        isHybrid: false,
        image: "/Website Images/lemon(Hero)/Hero.png",
        hoverImages: ["/Website Images/lemon(Hero)/Hero.png"],
        variants: [{ name: "Kagzi Baramasi", specs: "Paper Skin, Juicy", price: 80, mrp: 160, packSize: "1 Plant" }],
        specifications: [
            { label: "Fruit Skin", value: "Paper Thin" },
            { label: "Juice Content", value: "High" },
            { label: "Fruiting", value: "All Year (Baramasi)" }
        ]
    },
    {
        _id: 'fb-103',
        title: "Sandalwood",
        slug: "sandalwood",
        category: "forestry",
        cropType: "Forestry",
        isHybrid: false,
        image: "/Website Images/Sandalwood(Hero)/Red sandalwood.jpeg",
        hoverImages: ["/Website Images/Sandalwood(Hero)/Red sandalwood.jpeg"],
        variants: [
            { name: "Red Sandalwood (Rakt Chandan)", specs: "Premium Heartwood", price: 250, mrp: 500, packSize: "1 Plant" },
            { name: "White Sandalwood (Srigandh)", specs: "Aromatic, High Value", price: 300, mrp: 600, packSize: "1 Plant" }
        ],
        specifications: [
            { label: "Harvest Time", value: "12-15 Years" },
            { label: "Wood Type", value: "Heartwood" },
            { label: "Usage", value: "Medicinal/Cosmetic" }
        ]
    },
    {
        _id: 'fb-104',
        title: "Timber Trees",
        slug: "timber-trees",
        category: "forestry",
        cropType: "Forestry",
        isHybrid: false,
        image: "/Website Images/Mahogany/IMG-20221214-WA0002.jpg",
        hoverImages: ["/Website Images/Mahogany/IMG-20221214-WA0002.jpg"],
        variants: [
            { name: "African Mahogany", specs: "Fast Growing, Furniture Grade", price: 120, mrp: 240, packSize: "1 Plant" },
            { name: "Burma Teak", specs: "Original Sagwan", price: 150, mrp: 300, packSize: "1 Plant" },
            { name: "Tissue Culture Bamboo", specs: "Biomass & Furniture", price: 80, mrp: 160, packSize: "1 Plant" }
        ],
        specifications: [
            { label: "Growth Rate", value: "Fast" },
            { label: "Wood Quality", value: "Premium" },
            { label: "Harvest Time", value: "8-10 Years" }
        ]
    }
];

// Append formatted objects directly from source code logic
// Actually I can just format them here
for (const p of fruitsAndForestry) {
    tsOutput += `    {
        _id: '${p._id}',
        title: "${p.title}",
        slug: "${p.slug}",
        category: "${p.category}",
        cropType: "${p.cropType}",
        isHybrid: ${p.isHybrid},
        image: "${p.image}",
        hoverImages: ["${p.image}"],
        variants: [
${p.variants.map(v => `            { name: "${v.name}", specs: "${v.specs}", price: ${v.price}, mrp: ${v.mrp}, packSize: "${v.packSize}" }`).join(',\n')}
        ],
        specifications: [
${p.specifications.map(s => `            { label: "${s.label}", value: "${s.value}" }`).join(',\n')}
        ]
    },\n`;
}

tsOutput += `];\n\n`;
tsOutput += `export function getCalculatedFallbackInventory() {
    return FALLBACK_INVENTORY.map(p => {
        const prices = p.variants?.map((v: any) => v.price) || []
        const minP = prices.length > 0 ? Math.min(...prices) : 0
        return { ...p, startingPrice: minP }
    })
}`;

fs.writeFileSync(path.join(__dirname, '../lib/fallback-data.ts'), tsOutput);
console.log('Done');
