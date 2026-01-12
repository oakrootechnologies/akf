export interface Specification {
  label: string
  value: string
}

export interface ProductVariant {
  packSize: string
  sku: string
  price: number
  mrp?: number
  inStock: boolean
}

export interface Product {
  _id?: string
  id?: string
  title: string
  slug: string
  isHybrid: boolean
  cropCategory: 'vegetable' | 'field_crop' | 'op_product'
  cropType: string
  images: string[]
  specifications: Specification[]
  variants: ProductVariant[]
  // Computed fields (for frontend convenience)
  startingPrice?: number
  lowestMrp?: number
}
