import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product (Master)',
  type: 'document',
  fields: [
    // --- IDENTITY ---
    defineField({
      name: 'title',
      title: 'Product Name',
      type: 'string',
      description: 'e.g., Bitter Gourd Batuk',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    }),
    defineField({
      name: 'isHybrid',
      title: 'Is Hybrid (F1)?',
      type: 'boolean',
      initialValue: true,
    }),

    // --- CATEGORY MAPPING ---
    defineField({
      name: 'cropCategory',
      title: 'Crop Category',
      type: 'string',
      options: {
        list: [
          { title: 'Vegetable Seeds (Sabzi)', value: 'vegetable' },
          { title: 'Field Crops (Kheti)', value: 'field_crop' },
          { title: 'Fruit Plantation (Fal)', value: 'fruit' },
          { title: 'Forestry (Timber)', value: 'forestry' },
        ],
      },
    }),
    defineField({
      name: 'cropType',
      title: 'Crop Type',
      type: 'string',
      description: 'e.g., Bitter Gourd, Okra, Maize',
    }),

    // --- VISUALS (From ID Cards) ---
    defineField({
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{ type: 'image' }],
      description: 'Upload the images from the ID Card PDF here.',
    }),

    // --- TECHNICAL SPECS (The "ID Card" Data) ---
    // Instead of 100 separate fields, we use a flexible table
    defineField({
      name: 'specifications',
      title: 'Technical Specifications (ID Card Data)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Feature (e.g. Fruit Shape)' },
            { name: 'value', type: 'string', title: 'Value (e.g. Spindle)' },
          ],
        },
      ],
      description: 'Add rows for: Days to Maturity, Fruit Color, Length, Market Slot, etc.',
    }),

    // --- VARIANTS (The "Price List" Data) ---
    defineField({
      name: 'variants',
      title: 'Pack Sizes & Pricing',
      type: 'array',
      of: [{ type: 'productVariant' }], // See schema below
    }),
  ],
})
