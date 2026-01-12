import { client } from "./sanity.server";

export const ADMIN_PHONE = process.env.ADMIN_PHONE;

export async function loginOrRegisterUser(phone: string) {
    // Sanitize phone number if needed (strip spaces etc)
    // strict match assumed for now based on prompt

    // Check Admin Override
    const isAdmin = phone === ADMIN_PHONE;

    // Query Sanity
    const query = `*[_type == "user" && phone == $phone][0]`;
    const existingUser = await client.fetch(query, { phone });

    if (existingUser) {
        // If phone matches admin env var, force role to admin
        if (isAdmin && existingUser.role !== 'admin') {
            // Optional: Update DB to reflect this? Or just return it. 
            // Prompt says "force the role to 'admin' regardless of the database value".
            return {
                ...existingUser,
                role: 'admin'
            };
        }
        return existingUser;
    }

    // If No: Create a new user with role 'customer' (or admin if phone matches)
    const newUser = {
        _type: 'user',
        phone,
        role: isAdmin ? 'admin' : 'customer',
        addresses: [],
        // orderHistory is a reference array, can be empty initially
    };

    const createdUser = await client.create(newUser);
    return createdUser;
}

export async function getUserOrders(userId: string) {
    // "Fetch orders where user._id == currentUser._id"
    // "Trap: Do not implement "SWR" or caching for this page. Fetch fresh data on every render"
    // Using sanity.server client ensures useCdn: false
    const query = `*[_type == "order" && user._ref == $userId] | order(date desc) {
        _id,
        orderId,
        date,
        totalAmount,
        status,
        items[] {
            productTitle,
            quantity,
            price,
            variantKey,
            product-> {
                title,
                slug,
                "image": images[0].asset->url
            }
        }
    }`;

    return await client.fetch(query, { userId });
}
