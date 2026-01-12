# Sanity CMS Setup Guide

This project uses Sanity CMS for content management. Follow these steps to set up:

## 1. Install Dependencies

```bash
npm install
```

## 2. Create Sanity Project

1. Go to [sanity.io](https://www.sanity.io) and create an account
2. Create a new project
3. Note your Project ID and Dataset name (usually "production")

## 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here
```

To get your API token:
1. Go to [Sanity Manage](https://www.sanity.io/manage)
2. Select your project
3. Go to API → Tokens
4. Create a new token with "Editor" permissions

## 4. Access Sanity Studio

Once configured, access the CMS at:
- Development: `http://localhost:3000/studio`
- Production: `https://yourdomain.com/studio`

## 5. Add Products

1. Log in to Sanity Studio
2. Click "Create new" → "Product"
3. Fill in the product details:
   - Name (required)
   - Slug (auto-generated from name)
   - Type (Seed/Plant/Tool)
   - Price
   - Stock
   - Description
   - Main Image
   - Additional Images (optional)
   - Scientific Name (optional)
   - Cultivation Time (optional)
   - Benefits (optional)

## 6. Product Schema

The product schema includes:
- **name**: Product name
- **slug**: URL-friendly identifier (auto-generated)
- **type**: seed | plant | tool
- **price**: Price in USD
- **stock**: Available quantity
- **description**: Product description
- **image**: Main product image
- **images**: Additional images array
- **scientificName**: Scientific name (optional)
- **cultivationTime**: e.g., "8-12 months" (optional)
- **benefits**: Detailed benefits text (optional)

## 7. Frontend Integration

Products are automatically fetched from Sanity via:
- `/api/products` - Get all products
- `/api/products/[slug]` - Get single product by slug

The frontend components (`TabbedProductGrid`, product pages) automatically use this data.

## Troubleshooting

- **Studio not loading**: Check your `NEXT_PUBLIC_SANITY_PROJECT_ID` in `.env.local`
- **Products not showing**: Verify your dataset name matches in `.env.local`
- **Images not loading**: Ensure images are uploaded in Sanity Studio

