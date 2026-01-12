import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'productVariant',
  title: 'Product Variant',
  type: 'object',
  fields: [
    defineField({
      name: 'variantName',
      title: 'Variant Name',
      type: 'string',
      description: 'e.g., Batuk, Vachan 208',
    }),
    defineField({
      name: 'specs',
      title: 'Specifications',
      type: 'string',
      description: 'e.g., Small Spiny, 45-50 Days',
    }),
    defineField({
      name: 'packSize',
      title: 'Pack Size',
      type: 'string',
      description: 'e.g., 10g, 50g, 1kg (Optional)',
    }),
    defineField({
      name: 'sku',
      title: 'SKU Code',
      type: 'string',
      description: 'e.g., CASL-BG-BATUK-10',
    }),
    defineField({
      name: 'price',
      title: 'Selling Price (Invoice Price)',
      type: 'number',
    }),
    defineField({
      name: 'mrp',
      title: 'MRP (On Packet)',
      type: 'number',
    }),
    defineField({
      name: 'inStock',
      title: 'In Stock',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'packSize',
      subtitle: 'price',
    },
  },
})
