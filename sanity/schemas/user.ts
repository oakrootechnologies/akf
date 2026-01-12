import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        defineField({
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
            validation: (Rule) => Rule.required().error('Phone number is required'),
            // Note: Uniqueness is typically handled by using the phone number as the document ID or ensuring logic in the app, 
            // but Sanity studio doesn't strictly enforce uniqueness on string fields without custom validation or unique document IDs.
            // We will assume the auth logic handles finding the user by phone.
        }),
        defineField({
            name: 'role',
            title: 'Role',
            type: 'string',
            options: {
                list: [
                    { title: 'Customer', value: 'customer' },
                    { title: 'Admin', value: 'admin' },
                ],
                layout: 'radio',
            },
            initialValue: 'customer',
        }),
        defineField({
            name: 'addresses',
            title: 'Addresses',
            type: 'array',
            of: [
                {
                    type: 'object',
                    title: 'Address',
                    fields: [
                        { name: 'formattedAddress', title: 'Formatted Address', type: 'string' },
                        { name: 'street', title: 'Street/Locality', type: 'string' },
                        { name: 'city', title: 'City', type: 'string' },
                        { name: 'state', title: 'State', type: 'string' },
                        { name: 'postalCode', title: 'Postal Code', type: 'string' },
                        { name: 'country', title: 'Country', type: 'string' },
                        {
                            name: 'location',
                            title: 'Location (Lat/Lng)',
                            type: 'geopoint'
                        },
                        { name: 'isDefault', title: 'Default Address', type: 'boolean', initialValue: false }
                    ],
                },
            ],
        }),
        defineField({
            name: 'orderHistory',
            title: 'Order History',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'order' }] }],
            // This might be better as a query on the order side (orders where userId == this.id) 
            // to avoid unlimited array growth, but the prompt specifically asked for:
            // "orderHistory: Array of References to order documents."
        }),
    ],
    preview: {
        select: {
            title: 'phone',
            subtitle: 'role',
        },
    },
})
