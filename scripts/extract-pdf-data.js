const fs = require('fs');
const pdfLib = require('pdf-parse');
const path = require('path');

const priceListPath = path.join(__dirname, '../products/PRICE LIST FY 25-26.pdf');
const idCardsPath = path.join(__dirname, '../products/CASL Product ID Cards-2025 (2).pdf');
const outputPath = path.join(__dirname, 'pdf_analysis_output.txt');

async function extractText() {
    let output = '';
    console.log('Structure of required module:', pdfLib);

    // Finding the function
    let parseFunc = pdfLib;
    if (typeof parseFunc !== 'function') {
        if (typeof parseFunc.default === 'function') parseFunc = parseFunc.default;
        else if (typeof parseFunc.pdf === 'function') parseFunc = parseFunc.pdf;
        else {
            // Maybe it's not exported correctly?
            console.log("Could not find function in export.");
        }
    }

    if (typeof parseFunc !== 'function') {
        console.error("FATAL: helper function not found.");
        return;
    }

    // 1. Process Price List
    try {
        console.log('Reading Price List...');
        const dataBuffer = fs.readFileSync(priceListPath);
        const data = await parseFunc(dataBuffer);
        output += '=== PRICE LIST START ===\n';
        output += data.text;
        output += '\n=== PRICE LIST END ===\n\n';
    } catch (err) {
        output += `Error reading Price List: ${err.message}\n`;
    }

    // 2. Process ID Cards
    try {
        console.log('Reading ID Cards...');
        const dataBuffer = fs.readFileSync(idCardsPath);
        const data = await parseFunc(dataBuffer);
        output += '=== ID CARDS START ===\n';
        output += data.text;
        output += '\n=== ID CARDS END ===\n';
    } catch (err) {
        output += `Error reading ID Cards: ${err.message}\n`;
    }

    fs.writeFileSync(outputPath, output);
    console.log(`Extraction complete. Output written to ${outputPath}`);
}

extractText();
