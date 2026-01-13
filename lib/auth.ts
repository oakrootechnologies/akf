// MOCK AUTH FOR STANDALONE DEMO

export const ADMIN_PHONE = process.env.ADMIN_PHONE || '9999999999';

export async function loginOrRegisterUser(phone: string) {
    console.log('MOCK: loginOrRegisterUser', phone);

    // Determine role based on simple logic
    const role = phone === ADMIN_PHONE ? 'admin' : 'customer';

    return {
        _id: 'mock-user-' + phone,
        _type: 'user',
        phone,
        role,
        addresses: [],
        createdAt: new Date().toISOString()
    };
}

export async function getUserOrders(userId: string) {
    console.log('MOCK: getUserOrders', userId);
    return []; // Return empty orders
}
