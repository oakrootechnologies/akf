import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
        defineField({
            name: 'orderId',
            title: 'Order ID',
            type: 'string',
            readOnly: true,
        }),
        defineField({
            name: 'user',
            title: 'Customer',
            type: 'reference',
            to: [{ type: 'user' }],
            readOnly: true,
        }),
        defineField({
            name: 'date',
            title: 'Order Date',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
            readOnly: true,
        }),
        defineField({
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'productTitle', type: 'string' },
                        { name: 'quantity', type: 'number' },
                        { name: 'price', type: 'number' },
                        { name: 'variantKey', type: 'string', title: 'Variant' },
                        // Reference to actual product for linking
                        { name: 'product', type: 'reference', to: [{ type: 'product' }] }
                    ]
                }
            ],
            readOnly: true, // Admin shouldn't change what was ordered
        }),
        defineField({
            name: 'totalAmount',
            title: 'Total Amount',
            type: 'number',
            readOnly: true, // "Ensure the order document in Sanity is Read-Only for fields like totalAmount"
        }),
        defineField({
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Pending', value: 'pending' },
                    { title: 'Processing', value: 'confirmed' },
                    { title: 'Shipped', value: 'shipped' },
                    { title: 'Delivered', value: 'delivered' },
                    { title: 'Cancelled', value: 'cancelled' },
                ],
                layout: 'radio',
            },
            initialValue: 'pending',
            // This is the ONE field the admin edits manually
        }),
        defineField({
            name: 'statusNote',
            title: '⚠️ System Notification',
            type: 'string',
            readOnly: true,
            initialValue: "Changing status to 'Shipped' will trigger the automatic WhatsApp Notification API (Billable Event).",
            // This reinforces that the system is "Live" and "Expensive"
        }),
        defineField({
            name: 'shippingAddress',
            title: 'Shipping Address',
            type: 'string', // Storing the formatted string snapshot for the record
            readOnly: true
        })
    ],
    preview: {
        select: {
            title: 'orderId',
            subtitle: 'status',
            amount: 'totalAmount'
        },
        prepare({ title, subtitle, amount }) {
            return {
                title: `Order: ${title}`,
                subtitle: `${subtitle} - ₹${amount}`
            }
        }
    },
})
