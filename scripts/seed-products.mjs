import { createClient } from 'next-sanity'

// Configuration - attempt to read from env, but might need manual setting if env not loaded in script context
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your_project_id' // Fill this if env fails
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_TOKEN // FAST_EDIT_TOKEN or similar with write access

if (!token) {
    console.error("Error: SANITY_API_TOKEN is missing. Please set it in your .env file.")
    console.error("You can generate one at https://sanity.io/manage/project/<projectId>/api")
    process.exit(1)
}

const client = createClient({
    projectId,
    dataset,
    token,
    useCdn: false, // We are writing, so no CDN
    apiVersion: '2024-01-01',
})

const INVENTORY = [
    // --- CATEGORY: VEGETABLES (SABZI) ---
    {
        title: "Bitter Gourd (Karela)",
        category: "vegetable",
        variants: [
            { name: "Batuk", specs: "Small Spiny, 45-50 Days", price: 180 },
            { name: "Vachan 208", specs: "Medium Spiny, 50-60g", price: 180 },
            { name: "Raafale 1574", specs: "Elongated, 125-150g", price: 200 },
            { name: "Jhalar", specs: "Smooth Long, 30-35cm", price: 190 }
        ]
    },
    {
        title: "Bottle Gourd (Lauki)",
        category: "vegetable",
        variants: [
            { name: "Vachan-1830", specs: "Cylindrical Medium, 600g", price: 150 },
            { name: "SUMO", specs: "Long Cylindrical, 750g", price: 160 },
            { name: "Hareli", specs: "Bulb with Neck (Lattu)", price: 150 },
            { name: "Bhim", specs: "Round Bulb, 500g", price: 150 }
        ]
    },
    {
        title: "Tomato (Hybrid)",
        category: "vegetable",
        variants: [
            { name: "Vachan Desi", specs: "Flat Round, TLCV Tolerant", price: 350 },
            { name: "Preetam", specs: "Semi Determinate, 90g", price: 350 },
            { name: "Amar", specs: "Round Red, High Yield", price: 320 }
        ]
    },
    {
        title: "Hot Pepper (Chilli)",
        category: "vegetable",
        variants: [
            { name: "Rocket", specs: "Light Green, 6-7cm", price: 450 },
            { name: "Shot Gun", specs: "Bullet Type, Smooth", price: 480 },
            { name: "Kalia", specs: "Dark Purple, Black Chilli", price: 500 },
            { name: "Sunehari", specs: "Cayenne Type, Light Green", price: 420 }
        ]
    },
    {
        title: "Okra (Bhindi)",
        category: "vegetable",
        variants: [
            { name: "Mastani", specs: "Dark Green, Dwarf Plant", price: 250 },
            { name: "Radhika", specs: "Export Quality, Slender", price: 280 },
            { name: "Neelam", specs: "Pentagonal, 12-14cm", price: 240 }
        ]
    },
    {
        title: "Eggplant (Brinjal)",
        category: "vegetable",
        variants: [
            { name: "Romiyo", specs: "Green Variegated, Round", price: 220 },
            { name: "Black Beauty", specs: "Dark Purple, Round", price: 200 },
            { name: "Indigo", specs: "Long Purple", price: 210 }
        ]
    },
    {
        title: "Cucumber",
        category: "vegetable",
        variants: [
            { name: "Ria", specs: "Mottled Green, Cylindrical", price: 180 },
            { name: "Desi Gauri", specs: "Mottled Green, Crisp", price: 160 }
        ]
    },
    // --- CATEGORY: FIELD CROPS (KHETI) ---
    {
        title: "Maize (Makka)",
        category: "field_crop",
        variants: [
            { name: "Angad-1217", specs: "Single Cross, 120 Days", price: 600 },
            { name: "Gaja-31", specs: "Semi Flint, Orange", price: 580 },
            { name: "Sweet Corn Sugar Candy", specs: "Golden Yellow, High Brix", price: 850 }
        ]
    },
    {
        title: "Mustard (Sarso)",
        category: "field_crop",
        variants: [{ name: "V-111", specs: "Bold Grain, High Oil %", price: 300 }]
    },
    // --- CATEGORY: FRUIT PLANTATION (FAL) ---
    {
        title: "Guava Plants",
        category: "fruit",
        variants: [
            { name: "Taiwan Pink", specs: "Fleshy, Less Seeds", price: 120 },
            { name: "Allahabad Safeda", specs: "Sweet, White Flesh", price: 100 }
        ]
    },
    {
        title: "Dragon Fruit",
        category: "fruit",
        variants: [
            { name: "Red Hybrid", specs: "Dark Red Flesh, High Antioxidant", price: 150 },
            { name: "White Giant", specs: "Large Fruit, White Flesh", price: 150 }
        ]
    },
    {
        title: "Lemon (Nimbu)",
        category: "fruit",
        variants: [{ name: "Kagzi Baramasi", specs: "Paper Skin, Juicy", price: 80 }]
    },
    {
        title: "Papaya",
        category: "fruit",
        variants: [{ name: "Red Lady 786", specs: "Virus Tolerant, High Yield", price: 45 }]
    },
    // --- CATEGORY: FORESTRY (TIMBER) ---
    {
        title: "Sandalwood",
        category: "forestry",
        variants: [
            { name: "Red Sandalwood (Rakt Chandan)", specs: "Premium Heartwood", price: 250 },
            { name: "White Sandalwood (Srigandh)", specs: "Aromatic, High Value", price: 300 }
        ]
    },
    {
        title: "Timber Trees",
        category: "forestry",
        variants: [
            { name: "African Mahogany", specs: "Fast Growing, Furniture Grade", price: 120 },
            { name: "Burma Teak", specs: "Original Sagwan", price: 150 },
            { name: "Tissue Culture Bamboo", specs: "Biomass & Furniture", price: 80 }
        ]
    }
];

async function seed() {
    console.log('--- STARTING DATABASE RESET ---')

    // 1. Delete all existing products
    console.log('Deleting existing products...')
    await client.delete({ query: '*[_type == "product"]' })
    console.log('All existing products deleted.')

    // 2. Create new products
    console.log(`Seeding ${INVENTORY.length} products...`)

    for (const item of INVENTORY) {
        const doc = {
            _type: 'product',
            title: item.title,
            // Generate slug from title
            slug: {
                _type: 'slug',
                current: item.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')
            },
            cropCategory: item.category,
            cropType: item.title.split(' ')[0], // Approximate crop type
            isHybrid: true, // Default
            variants: item.variants.map((v, i) => ({
                _key: `v-${i}`,
                variantName: v.name,
                specs: v.specs,
                price: v.price,
                inStock: true
            })),
            // Default placeholder image if needed (will need real assets normally)
            images: []
        }

        try {
            const res = await client.create(doc)
            console.log(`Created: ${res.title}`)
        } catch (err) {
            console.error(`Failed to create ${item.title}:`, err)
        }
    }

    console.log('--- SEEDING COMPLETE ---')
}

seed().catch((err) => {
    console.error(err)
    process.exit(1)
})
