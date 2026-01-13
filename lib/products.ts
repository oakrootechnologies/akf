import { Product } from '@/models/Product'
import { FALLBACK_INVENTORY } from './fallback-data'

// MOCK PRODUCT FETCHER FOR STANDALONE DEMO
// Directly returns fallback data instead of calling API endpoints.

export async function fetchProducts(): Promise<Product[]> {
  console.log('MOCK: fetchProducts returning fallback data');
  return FALLBACK_INVENTORY as unknown as Product[];
}

export async function fetchProductById(id: string): Promise<Product | null> {
  console.log('MOCK: fetchProductById', id);
  const product = FALLBACK_INVENTORY.find((p: any) => p._id === id);
  return (product as unknown as Product) || null;
}

export async function fetchProductBySlug(slug: string): Promise<Product | null> {
  console.log('MOCK: fetchProductBySlug', slug);
  const product = FALLBACK_INVENTORY.find((p: any) => p.slug === slug);
  return (product as unknown as Product) || null;
}
