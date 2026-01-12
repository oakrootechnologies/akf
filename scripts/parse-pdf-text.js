const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'pdf_analysis_output.txt');
const outputPath = path.join(__dirname, 'extracted_products.json');

function parseText() {
    const text = fs.readFileSync(inputPath, 'utf-8');
    const lines = text.split('\n');

    const products = [];
    let currentProduct = null;

    // Pattern: "Crop : Variety" or "Crop: Variety"
    // e.g. "Bitter Gourd : Batuk"
    const productHeaderRegex = /^(.+?)\s*[:]\s*(.+?)\s*$/;

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();
        if (!line) continue;
        if (line.startsWith('===') || line.startsWith('Product ID Card')) continue;

        // Heuristic: Check for header like "Bitter Gourd : Batuk"
        // But some lines might be "Days to first..." which contains colon too.
        // Headers usually don't have numbers at start, or specific keywords?
        // Let's look at the file. "Bitter Gourd : Batuk "

        // Known keys to look for at start of line
        const keys = [
            "Days to first picking", "Days to harvest", "Days to Maturity", "Days to 1st picking", "1st Harvest",
            "Fruit colour", "Fruit Color", "Fruit Shape", "Fruit Weight", "Fruit Length", "Fruit Dimension", "Fruit Surface",
            "Product Slot", "Market Slot", "MarketSegment", "Market Segment", "Recommended", "Recommendation",
            "Plant Type", "Plant growth habit", "Disease tolerance", "Sowing Window", "Calyx colour",
            "Root Color", "Root shape", "Root Length", "Root Weight",
            "Pod Colour", "Pod Length", "Pod Shape", "No. of seeds per pod",
            "No of Kernel Rows", "Grains per row", "Kernal Texture", "Kernal Colour", "Tip filling", "Plant Height", "Yield potential", "Oil %",
            "Special features", "Special Characteristics", "Remark", "Brix", "Cob length"
        ];

        let matchedKey = null;
        for (const k of keys) {
            // Case insensitive check matching start of line
            // Handle slight variations like "Fruit colour" vs "Fruit Colour"
            // And handle if key is followed immediately by value without space
            // Regex: ^Key(.*)$ case insensitive
            const re = new RegExp('^' + k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(.*)$', 'i');
            const m = line.match(re);
            if (m) {
                matchedKey = k;
                const val = m[1].trim();
                // If val starts with :, remove it
                currentProduct.specs[k] = val.replace(/^[:\-\s]+/, '').trim();
                break;
            }
        }

        if (matchedKey) continue;

        const match = line.match(productHeaderRegex);
        if (match) {
            // It might be a product header
            // Check if looks like a crop name we know?
            const crop = match[1].trim();
            const variety = match[2].trim();

            // Filter out noise
            if (crop.includes('Harvest') || crop.includes('Weight') || crop.length > 30) continue;

            if (currentProduct) {
                products.push(currentProduct);
            }
            currentProduct = {
                crop: crop,
                variety: variety,
                specs: {}
            };
        }
    }
    if (currentProduct) products.push(currentProduct);

    fs.writeFileSync(outputPath, JSON.stringify(products, null, 2));
    console.log(`Parsed ${products.length} products.`);
}

parseText();
